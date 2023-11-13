import ErrorMessage from "../errorMessage/ErrorMessage";
import error from "./errors.png";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <img src={error} alt="error" style={{ alignItems: "center" , "margin" : "auto"}} />
      <p style={{ display: "block", textAlign: "center" }}>Error 404</p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
        }}
        to="/"
      >
        Come Back
      </Link>
    </div>
  );
};

export default Page404;
