import { GlobalOutlined, EditOutlined } from "@ant-design/icons";

export const AddedLocations = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-4 px-3">
      <div className="bg-white rounded-md flex flex-col">
        <div className="flex justify-between p-3">
          <span>Lagos location</span>
          <div className="flex gap-2 items-center">
            <EditOutlined />
            <GlobalOutlined />
          </div>
        </div>
        <div className="bg-slate-100 h-[200px]">
            d
        </div>
        <div className="bg-white p-3 rounded-md">d</div>
      </div>
      <div>2</div>
    </div>
  );
};
