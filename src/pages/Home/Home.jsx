import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import DonationCard from "../../components/DonationCard/DonationCard";

const Home = () => {

  const donations = useLoaderData();

  return (
    <main>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
          {
            donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>
    </main>
  )
}

export default Home
