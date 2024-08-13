import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center mt-20">
      <h3>Ooops! Something went wrong</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
      <button className="bg-pink-200 p-1 m-1 border-black border-2 rounded-lg font-mono">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default Error;
