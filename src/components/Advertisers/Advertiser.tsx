import { TAdvertiser } from "@/services/type";
import { Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  advertiser: TAdvertiser;
};

const Advertiser: FC<Props> = ({ advertiser }) => {
  return (
    <Link
      className={!advertiser.deeplinkURL ? "pointer-events-none" : ""}
      href={advertiser.deeplinkURL ?? ""}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card
        hoverable
        cover={
          <Image
            alt={advertiser.name}
            src={advertiser.imageUrl}
            width={"100"}
            height="100"
          />
        }
      >
        <Card.Meta
          title={advertiser.name}
          description={<Typography.Paragraph ellipsis={{ rows: 6 }}>{advertiser.description}</Typography.Paragraph>}
        />
      </Card>
    </Link>
  );
};

export default Advertiser;
