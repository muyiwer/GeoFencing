import { PlusCircleFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { AddedLocations } from "./AddedLocations.js";
import { GoogleMap } from "./GoogleMap.js";

export const GeoFencing = () => {
    console.log(import.meta.env.VITE_APP_GOOGLE_MAP_KEY);
  return (
    <main className="bg-slate-100 p-4 flex flex-col min-h-[90vh]">
      <div className="flex justify-between items-center px-3">
        <h1 className="font-semibold text-[25px]">Geo Fencing</h1>
        <PlusCircleFilled className="text-green-600 text-[20px]"/>
      </div>
      <Divider className="mt-1"/>
      {/* <AddedLocations/> */}
      <GoogleMap/>
    </main>
  );
};
