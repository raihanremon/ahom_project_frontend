import { useState } from "react";
import { ethers } from "ethers";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defualtAccount, setDefualtAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);


  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefualtAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      });
  };

  const chainChangedHander = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangeHandler);
  window.ethereum.on("chianChanged", chainChangedHander);

  return (
    <div className="walletcard text-center">
      <h4>Connection to Metamask</h4>
      <button onClick={connectWalletHandler} className="btn btn-primary mt-4">
        Connect Wallet
      </button>
      <div className="actionDisplay p-5">
        <h3>Address: {defualtAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};

export default WalletCard;
