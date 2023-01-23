import Footer from "./Footer";
import Navbar from "./Navbar";

const LayOut = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
