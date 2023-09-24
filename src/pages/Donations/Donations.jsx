import { useLoaderData, useParams } from "react-router-dom"
import swal from "sweetalert";

const Donations = () => {

  const { donationId } = useParams();
  const donations = useLoaderData();

  const donation = donations.find(donation => donation.id === parseInt(donationId));
  const { title, description, text_button_bg, picture, price } = donation;

  const handleDonate = () => {
    swal("Good job!", `Thank you for your $${price} donation.`, "success");
  }
  return (
    <div className="max-w-[1320px] mx-auto px-3 my-12">
      <figure className="rounded-md w-full mb-12">
        <img src={picture} alt={title} />
        <button onClick={handleDonate} className="btn text-white rounded" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
      </figure>
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

export default Donations
