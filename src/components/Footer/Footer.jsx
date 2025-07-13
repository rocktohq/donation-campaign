const Footer = () => {
  return (
    <div className="px-3 mx-3 py-10 text-center border-t border-slate-500">
      <p className="text-center">
        &copy; Copyright <span className="font-bold text-[#ff444a]">DonationCampaign&trade;</span> {new Date().getFullYear()} 
      </p>
    </div>
  );
};

export default Footer;
