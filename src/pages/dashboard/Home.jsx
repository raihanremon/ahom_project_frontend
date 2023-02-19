import CryptoPrice from "./CryptoPrice";

const Home = () => {
    return (
      <section className="home">
        <div className="text">Dashboard</div>
        <div className="p-5">
          <CryptoPrice />
        </div>
      </section>
     
    );
  }

  export default Home;