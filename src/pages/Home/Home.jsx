import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import DonationCard from "../../components/DonationCard/DonationCard";
import { useState } from "react";

const Home = () => {

  let allDonations = [];
  const donations = useLoaderData();
  const [search, setSearch] = useState(null);
  // console.log(search)

  search
    ? (allDonations = donations.filter(donation => donation.category.toLowerCase().includes(search.toLowerCase())))
    : (allDonations = [...donations])

  return (
    <main>
      <Banner setSearch={setSearch}></Banner>
      <div className="max-w-[1320px] mx-auto px-3">

        {
          allDonations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
              {
                allDonations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
              }
            </div>
          )
            : <div className="text-center my-10 text-3xl font-bold">No Data Found!</div>
        }

      </div>
    </main>
  )
}

export default Home
