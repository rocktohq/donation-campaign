import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const MainLayout = () => {

  const navigation = useNavigation();
  const location = useLocation();

  location.pathname === "/" ? document.title = "Donation Campaign - HOME"
    : location.state ? document.title = location.state : document.title = `Donation Campaign - ${location.pathname.replace("/", "").toUpperCase()}`

  return (
    <>
      <Header></Header>
      {
        navigation.state === "loading"
          ? <Loader></Loader>
          : <Outlet></Outlet>
      }
    </>
  )
}

export default MainLayout;
