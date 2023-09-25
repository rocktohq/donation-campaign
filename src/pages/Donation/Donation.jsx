import { useLoaderData } from "react-router-dom";
import { getLocalData } from "../../utils/localStorage/localStorage"
import DonationCard from "../DonationCard/DonationCard";
import { useState } from "react";

const Donation = () => {

  const [seeDonations, setSeeDonations] = useState(4)
  const donationsData = useLoaderData();
  const localDonations = getLocalData();

  const donations = donationsData.filter(donation => localDonations.includes(donation.id));

  return (
    <div className="max-w-[1320px] mx-auto my-12 p-3">
      {
        donations.length > 0
          ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                  donations.slice(0, seeDonations).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
              </div>
              <div className={`text-center mt-10 ${seeDonations >= donations.length && "hidden"}`}>
                <button onClick={() => setSeeDonations(donations.length)} className="btn btn-success text-white bg-[#009444] rounded">See All</button>
              </div>
            </>
          )
          : (<div className="text-center my-10 text-3xl font-bold">No Data Found!</div>)
      }
    </div>
  )
}

export default Donation
