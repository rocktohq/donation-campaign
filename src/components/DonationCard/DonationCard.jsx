import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {

  const { id, title, category, category_bg, card_bg, text_button_bg, picture } = donation;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/donations/${id}`);
  }

  return (
    <div onClick={handleOnClick} className={`card rounded-md p-5 bg-[${card_bg}] cursor-pointer border`}>
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className={`text-[${text_button_bg}] text-sm capitalize bg-[${category_bg}] rounded-md px-2 py-1`}>{category}</div>
      <h2 className={`text-xl font-semibold text-[${text_button_bg}]`}>{title}</h2>
    </div>
  )
}

export default DonationCard

DonationCard.propTypes = {
  donation: PropTypes.object
}