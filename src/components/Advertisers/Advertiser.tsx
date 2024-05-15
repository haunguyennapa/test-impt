import { TAdvertiser } from "@/services/type";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  advertiser: TAdvertiser;
};

const Advertiser: FC<Props> = ({ advertiser }) => {
  return (
    <Link
      href={advertiser.deeplinkURL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card
        hoverable
        style={{ width: 240 }}
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
          description={advertiser.description}
        />
      </Card>
    </Link>
  );
};

export default Advertiser;
