import { useLoaderData, useParams } from "react-router-dom"
import swal from "sweetalert";
import { saveLocalData } from "../../utils/localStorage/localStorage";

const Donations = () => {

  const { donationId } = useParams();
  const donations = useLoaderData();

  const donation = donations.find(donation => donation.id === parseInt(donationId));
  const { id, title, description, text_button_bg, picture, price } = donation;

  const handleDonate = () => {
    const save = saveLocalData(id);
    save ? swal("Opps!", `You have donated before.`, "error") : swal("Good job!", `Thank you for your $${price} donation.`, "success");
  }
  return (
    <div className="max-w-[1320px] mx-auto px-3 my-12">
      <figure className="w-full mb-12 relative">
        <img className="w-full rounded-md" src={picture} alt={title} />
        <div className="bg-black bg-opacity-60 absolute left-0 bottom-0 p-2 md:p-5 lg:p-10 w-full rounded-b-md">
          <button onClick={handleDonate} className="btn text-white rounded border-0" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
        </div>
      </figure>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

export default Donations
