import { BellOutlined, UserOutlined } from "@ant-design/icons";

export const AppHeader = () => {
  return (
    <header className="flex justify-between p-3">
      <div></div>
      <div className="flex justify-between items-center gap-4">
        <BellOutlined className="text-[20px]" />
        <div className="flex items-center gap-2">
          <div className="border-[1px] border-green-600 p-1 rounded-[100%] flex items-center justify-center">
            {" "}
            <UserOutlined className="text-[20px]" />
          </div>
          <span>Xpress Admin</span>
        </div>
      </div>
    </header>
  );
};
