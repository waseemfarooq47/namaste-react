import { useRouteError } from "react-router-dom";
import ErrorImage from "../../logo/err.jpg";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <div className="error-displayer">
        <h1>Ooops!!!</h1>
        <h1>Something went wrong.</h1>
        <img src={ErrorImage} alt="not found" />
        <h3>{err.statusText}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
