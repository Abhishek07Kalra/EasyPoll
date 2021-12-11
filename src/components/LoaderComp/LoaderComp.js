import Loader from "react-loader-spinner";
import "./Loader.css";
const LoaderComp = () => {
  return (
    <center>
      <div id="loader">
        <Loader
          type="TailSpin"
          color="lightcoral"
          height={70}
          width={70}
        />
      </div>
    </center>
  );
};
export default LoaderComp;