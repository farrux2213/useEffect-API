import { Card, Skeleton, Switch } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
const { Meta } = Card;

const items = [
  {
    label: <a href="https://www.antgroup.com">Delete</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: "cancel",
    key: "3",
  },
];

const Dawn = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  // const deleteEdit = () => {
  //   <Dawn></Dawn>;
  // };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onDelete = (id) => {
    setData(data.filter((value) => value.id != id));
  };

  return (
    <div className="flex items-center justify-center flex-col gap-[50px]">
      <Switch checked={!loading} onChange={onChange} />
      {data.map((value) => {
        return (
          <>
            <Dawn></Dawn>
            <Skeleton
              style={{
                width: "300px",
              }}
              loading={loading}
              avatar
              active
            >
              <Card
                key={value.id}
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined
                    key="ellipsis"
                    menu={{
                      items,
                    }}
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <DownOutlined />
                      </Space>
                    </a>
                  </EllipsisOutlined>,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Skeleton>
          </>
        );
      })}
    </div>
  );
};

export default App;
