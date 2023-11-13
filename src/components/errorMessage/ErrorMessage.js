import gif from "./Error.gif";
const ErrorMessage = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          width: "100px",
          height: "100px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={gif}
        alt="Error"
      />
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Error 404</h1>
    </div>
  );
};

export default ErrorMessage;
