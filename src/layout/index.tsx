import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function LayOut() {
  return (
    <>
      <TopBar />
      <SideBar />
      <Outlet />
    </>
  );
}

export default LayOut;
