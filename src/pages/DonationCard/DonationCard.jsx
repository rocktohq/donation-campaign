import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
  const { id, title, category, category_bg, card_bg, text_button_bg, picture, price } = donation;

  return (
    <div className="rounded-md flex flex-col md:flex-row md:items-center" style={{ backgroundColor: card_bg }}>
      <figure className="md:w-60 h-full">
        <img className="w-full h-full rounded-t-md md:rounded-l-md md:rounded-tr-none" src={picture} alt={title} />
      </figure>
      <div className="p-5">
        <span className="text-sm capitalize rounded-md px-2 py-1" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</span>
        <h2 className="text-xl md:text-2xl font-semibold my-3">{title}</h2>
        <p className="font-semibold" style={{ color: text_button_bg }}>${price}</p>
        <Link to={`/donations/${id}`} state={title}><button className="btn text-white mt-5" style={{ backgroundColor: text_button_bg }}>View Details</button></Link>
      </div>
    </div>
  )
}

export default DonationCard

DonationCard.propTypes = {
  donation: PropTypes.object
}