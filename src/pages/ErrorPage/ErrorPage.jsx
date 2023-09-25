import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-3">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Error: 404 Not Found!</h1>
      <p className="mt-5">The page you are looking for, could not be found!</p>
      <Link to="/"><button className="btn btn-error rounded text-white mt-10">Go to Home Page</button></Link>
    </div>
  )
}

export default ErrorPage
