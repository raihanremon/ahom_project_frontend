import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { URL } from "../components/constants";
import "../Scanner.css";

const Scanner = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const hashParam = queryParams.get("hash");
    const [hash, setHash] = useState(hashParam || "");
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");
    const [timestamp, setTimestamp] = useState("");
    const [transHash, setTransHash] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await fetch(URL + "decode", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hash,
            }),
        })
            .then((res) => res.json())
            .then((trans) => {
                console.log(trans);
                setSender(trans.Sender);
                setReceiver(trans.Receiver);
                setAmount(trans.Amount);
                setTimestamp(trans.TimeStamp);
                setTransHash(trans.Hash);
            });

        setTimeout(() => {
            setIsLoading(false);
            setShowResult(true);
        }, 30000);
    };

    useEffect(() => {
        if (hashParam) {
            submitHandler().then((r) => console.log(r));
        }
    }, [hashParam]);

    return (
        <div className="container">
            <Header />
            <section className="newsletter my-5 py-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-12">
                        <div className="content">
                            <h2>SCAN YOUR HASH</h2>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your hash"
                                    onChange={(e) => setHash(e.target.value)}
                                    value={hash}
                                />
                                <span className="input-group-btn">
                  <Link
                      to={`/search?hash=${encodeURIComponent(hash)}`}
                      replace
                  ></Link>
                  <button
                      className="btn"
                      type="submit"
                      onClick={submitHandler}
                  >
                    SEARCH
                  </button>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isLoading ? (
                <div className="text-center mt-3">
                    <Spinner animation="border" role="status" />
                    <span className="ms-3">Searching......</span>
                </div>
            ) : showResult ? (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Receiver</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Timestamp</th>
                        <th scope="col">Hash</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{sender}</td>
                        <td>{receiver}</td>
                        <td>{amount} Ahom</td>
                        <td>{timestamp}</td>
                        <td>{transHash}</td>
                    </tr>
                    </tbody>
                </table>
            ) : (
                ""
            )}
            <div className="container fixed-bottom">
                <Footer />
            </div>
        </div>
    );
};

export default Scanner;
