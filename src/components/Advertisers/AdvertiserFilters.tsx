import { EApplicationStatus, EProgramStatus } from "@/services/type";
import { Form, Input, Select, Space } from "antd";

type Props = {
    programStatus: EProgramStatus;
    setProgramStatus: (status: EProgramStatus) => void
    name: string
    setName: (name: string) => void
}

export function AdvertiserFilters({ programStatus, setProgramStatus, name, setName }: Props) {
    return <Space>
        <Form.Item label="Program status">
            <Select value={programStatus} onChange={setProgramStatus} options={Object.values(EProgramStatus).map(status => ({
                label: status,
                value: status
            }))} />
        </Form.Item>
        <Form.Item label="Advertiser name">
            <Input placeholder="Advertiser name..." value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
    </Space>;
}
