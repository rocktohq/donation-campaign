import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

  const { title, category, category_bg, card_bg, text_button_bg, picture, link } = donation;

  return (
    <a href={link} target='_blank' rel="noreferrer">
      <div className="rounded-md cursor-pointer border" style={{ backgroundColor: card_bg }}>
        <figure className="w-full h-48">
          <img className="w-full h-full rounded-t-md" src={picture} alt="" />
        </figure>
        <div className="p-4">
          <span className="text-sm capitalize rounded-md px-2 py-1" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</span>
          <h2 className="text-xl font-semibold mt-2" style={{ color: text_button_bg }}>{title}</h2>
        </div>
      </div>
    </a>
  )
}

export default DonationCard

DonationCard.propTypes = {
  donation: PropTypes.object
}