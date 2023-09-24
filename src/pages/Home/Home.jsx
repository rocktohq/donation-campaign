import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

  const data = useLoaderData();
  console.log(data)

  return (
    <main>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto px-3 md:px-0">

      </div>
    </main>
  )
}

export default Home
