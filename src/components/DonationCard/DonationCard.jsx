import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Edu1 from "/Food.png";

const DonationCard = ({ donation }) => {

  const { id, title, category, category_bg, card_bg, text_button_bg, picture } = donation;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/donations/${id}`);
  }

  return (
    <div onClick={handleOnClick} className="rounded-md cursor-pointer border" style={{ backgroundColor: card_bg }}>
      <figure className="w-full">
        <img className="w-full rounded-t-md" src={Edu1} alt="" />
      </figure>
      <div className="p-4">
        <span className="text-sm capitalize rounded-md px-2 py-1" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</span>
        <h2 className="text-xl font-semibold mt-2" style={{ color: text_button_bg }}>{title}</h2>
      </div>
    </div>
  )
}

export default DonationCard

DonationCard.propTypes = {
  donation: PropTypes.object
}