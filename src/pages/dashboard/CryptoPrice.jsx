import { useEffect, useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiDogecoin } from "react-icons/si";

const CryptoPrice = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(0.0);
  const [ethereumPrice, setEthereumPrice] = useState(0.0);
  const [litecoinPrice, setLitecoinPrice] = useState(0.0);
  const [dogecoinPrice, setDogecoinPrice] = useState(0.0);

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin&vs_currencies=usd"
      );
      const data = await response.json();
      setBitcoinPrice(data.bitcoin.usd);
      setEthereumPrice(data.ethereum.usd);
      setLitecoinPrice(data.litecoin.usd);
      setDogecoinPrice(data.litecoin.usd);
    };
    fetchPrices();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
            <span ><FaBitcoin size={"2rem"} color={"#F99417"} /></span>
              <h6 className="card-title">Bitcoin</h6>
              <h2 className="card-text">${bitcoinPrice}</h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
            <span><FaEthereum size={"2rem"} /></span>
              <h6 className="card-title">Ethereum</h6>
              <h2 className="card-text">${ethereumPrice}</h2>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
            <span><SiLitecoin size={"2rem"} color={"#345E9D"} /></span>
              <h6 className="card-title">Litecoin</h6>
              <h2 className="card-text">${litecoinPrice}</h2>
            </div>
          </div>
        </div>


        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
            <span><SiDogecoin size={"2rem"} color={"#B9A032"} /></span>
              <h6 className="card-title">Dogecoin</h6>
              <h2 className="card-text">${dogecoinPrice}</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CryptoPrice;
