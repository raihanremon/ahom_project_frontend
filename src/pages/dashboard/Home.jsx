import { useEffect, useState } from "react";

import CryptoPrice from "./CryptoPrice";
import "./Dashboard.css"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const connectToMetaMask = async () => {
            try {
                if (window.ethereum) {
                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    const accounts = await window.ethereum.request({ method: "eth_accounts" });
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                    }
                } else {
                    console.error("MetaMask not detected.");
                }
            } catch (error) {
                console.error("Error connecting to MetaMask:", error);
            } finally {
                setIsLoading(false);
            }
        };

        connectToMetaMask();
    }, []);

    return (
        <section className="home">
            <div className="dashboard m-4 p-4">
                <span className="h1">Dashboard</span>
                {isLoading && <span>(Loading MetaMask...)</span>}
                {account && <span className="metamask-address">MetaMask Address: {account}</span>}
            </div>
            <div className="p-5">
                <CryptoPrice />
            </div>
        </section>
    );
};

export default Home;
