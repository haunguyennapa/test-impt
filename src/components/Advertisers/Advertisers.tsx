"use client";
import { useDebounce } from "@/hooks";
import { DemoAPI } from "@/services/demo.service";
import { EProgramStatus } from "@/services/type";
import { useQuery } from "@tanstack/react-query";
import { Col, Layout, Pagination, Row, Spin } from "antd";
import { useState } from "react";
import Advertiser from "./Advertiser";
import { AdvertiserFilters } from "./AdvertiserFilters";

export function Advertisers() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [programStatus, setProgramStatus] = useState(EProgramStatus.APPROVED)

  const [debouncedName, setName, name] = useDebounce("", 500)

  const { data, isPending, isFetching } = useQuery({
    queryKey: ["advertisers", { page, pageSize, programStatus, name: debouncedName }],
    queryFn: () => DemoAPI.getAdvertisers({ page, pageSize, ProgramStatus: programStatus, Name: debouncedName }),
    placeholderData: {
      results: [],
      messages: "",
      pageNumber: 1,
      pageSize: 12,
      resultType: "",
      totalCount: 100,
    },
  });

  return (
    <Layout.Content className="min-h-screen max-w-[80%] min-w-[80%] my-0 mx-auto">
      <div className="my-4">
        <AdvertiserFilters programStatus={programStatus} setProgramStatus={setProgramStatus} name={name} setName={setName} />
      </div>

      <Spin size="large" spinning={isPending || isFetching}>
        <Row gutter={[12, 12]}>
          {data?.results?.map((advertiser) => (
            <Col xs={24} sm={12} md={8} lg={4} key={advertiser.id}>
              <Advertiser key={advertiser.id} advertiser={advertiser} />
            </Col>
          ))}
        </Row>
      </Spin>
      <div className="flex justify-center my-6">
        <Pagination
          total={data?.totalCount}
          pageSize={pageSize}
          current={page}
          onChange={(page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          }}
        />
      </div>
    </Layout.Content>
  );
}
