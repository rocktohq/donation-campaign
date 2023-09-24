const Banner = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: 'url(/banner-bg.jpeg)' }}>
        <div className="bg-white bg-opacity-90 hero-overlay"></div>
        <div className="hero-content text-center text-gray-900">
          <div className="py-16">
            <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="form-control">
              <form>
                <div className="input-group flex justify-center">
                  <input type="text" placeholder="Search here..." className="input input-bordered focus:outline-none" />
                  <button className="btn btn-error text-white">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
