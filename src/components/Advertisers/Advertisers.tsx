"use client";
import { DemoAPI } from "@/services/demo.service";
import { useQuery } from "@tanstack/react-query";
import { Col, Layout, Pagination, Row, Spin } from "antd";
import { useState } from "react";
import Advertiser from "./Advertiser";

export function Advertisers() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["advertisers", { page, pageSize }],
    queryFn: () => DemoAPI.getAdvertisers({ page, pageSize }),
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
