import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 md:px-0">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout;
