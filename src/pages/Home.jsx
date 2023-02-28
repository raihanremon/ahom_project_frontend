
import Header from "../components/Header";
import BuildingImage from "../assetes/images/building.jpg";
import ManImage from "../assetes/images/man.jpg";
import "../Home.css";
import Card from "../components/Card";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="d-flex flex-column d-lg-flex flex-lg-row my-5 text-center">
          <div className="align-self-center order-1 order-lg-0 order-md-1 order-sm-1 pt-sm-3 pt-md-3 pt-3 ">
            <h1 className=" fs-1 text-uppercase mx-5">
              The Best 3rd Gen Blockchain For Your Business
            </h1>
            {/* <p className=" px-3"> */}
            <p className="mx-5 px-3 text-black">
              Experience smart, customized, low-cost payment solutions made for
              you. <span className="fw-bold">Even No Gas Fees.</span>
            </p>
            <a href="/" className="btn btn-primary">
              Get Started Now!
            </a>
          </div>
          <div className="order-lg-1 order-md-0 order-sm-0">
            {/* <img src={BuildingImage} alt="Building"  className="min-vw-50" /> */}
            <img src={BuildingImage} alt="Building"  className="w-100" />
          </div>
        </div>
        <div className="border-bottom px-5 mx-5"></div>

        <div className="d-flex flex-column d-lg-flex flex-lg-row my-5 text-center">
          <div>
            <img
              src={ManImage}
              alt="programmer"
              className="object-fit-cover w-100 man-image"
            />
          </div>
          <div className="container">
            <h2 className="fw-bold text-center">About Us</h2>
            <h3 className="fw-light fs-4 px-2 mx-2">
              We are expericend Since 2021. Contact us and we can help you to
              build your next decentralized, secure and profitable product.{" "}
            </h3>
            <div className="d-flex flex-column d-lg-flex flex-lg-row  d-md-flex d-sm-flex px-2 ">
              <Card title={"Security"} text={"Our 3rd Gen Blockchain is impossible to hack."}/>
              <Card title={"Decentralized"} text={"We have million of nodes all around the world."}/>
            </div>
            <div className="d-flex flex-column d-lg-flex flex-lg-row px-2 d-md-flex d-sm-flex">
              <Card title={"API Support"} text={"Our API can be integrated to any websites/app."}/>
              <Card title={"24/7 Support"} text={"We are happy to help you 24/7. We have dedicated support team."}/>
            </div>
          </div>
        </div>

       <Footer />
      </div>
    </div>
  );
};

export default Home;
