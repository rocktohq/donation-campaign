import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const MainLayout = () => {

  const navigation = useNavigation();

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
