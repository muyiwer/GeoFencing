import { Menu, MenuProps } from "antd";
import logo from "../assets/logo.svg";
import { AppstoreAddOutlined } from "@ant-design/icons";

export const AppMenu = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuProps["items"] = [
    getItem("Advance Services", "sub4", <AppstoreAddOutlined />, [
      getItem("Geo-fencing", "9"),
    ]),
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <aside className="max-md:hidden py-5 px-3">
      <div className="flex justify-center items-center gap-1">
        <img src={logo} alt="" className="w-[40px]" />
        <span className="text-[40px] text-green-600 font-extrabold">TMS</span>
      </div>
      <div>
        <Menu
          onClick={onClick}
          style={{ width: 250 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </aside>
  );
};
