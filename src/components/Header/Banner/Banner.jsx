import PropTypes from 'prop-types';

const Banner = ({ setSearch }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText)
  }
  return (
    <>
      <div className="hero md:h-96 2xl:h-[460px] bg-cyan-400">
        <div className="bg-white bg-opacity-90 hero-overlay"></div>
        <div className="hero-content text-center text-gray-900">
          <div className="py-16">
            <h1 className="mb-10 text-2xl md:text-4xl lg:text-5xl font-bold">Find High Paying Jobs</h1>
            <div className="form-control">
              <form onSubmit={handleSubmit}>
                <div className="input-group flex justify-center">
                  <input type="text" name="search" placeholder="Search here..." className="input input-bordered focus:outline-none w-48 md:w-auto dark:text-white" />
                  <button className="btn btn-error bg-[#ff444a] text-white">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner

Banner.propTypes = {
  setSearch: PropTypes.func
}