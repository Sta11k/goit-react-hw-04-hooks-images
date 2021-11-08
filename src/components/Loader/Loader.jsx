import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="Loader">
      <Spinner
        type="Grid"
        color="#00BFFF"
        height={60}
        width={1200}
        // timeout={5000} //3 secs
      />
    </div>
  );
};

export default Loader;
