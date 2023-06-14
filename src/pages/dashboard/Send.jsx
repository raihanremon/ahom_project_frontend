import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import {useState, useEffect} from "react";
import {URL} from '../../components/constants'
import Sidebar from "./Sidebar";

const Send = () => {
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('')
    useEffect(() => {
        const cookie = Cookies.get('JWT')
        console.log(cookie)
        const data = jwt_decode(cookie)
        console.log(data["iss"])
        setSender(data["iss"]);

    }, [setSender])
    const checkReceiverExists = async (receiverEmail) => {
        const response = await fetch(URL + "checkReceiver", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                receiverEmail
            })
        });
        const data = await response.json();
        return data.exists;
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const receiverExists = await checkReceiverExists(receiver);
        if (receiverExists) {
            await fetch(URL + "block", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sender, receiver, amount
                })
            });
        } else {
            alert("Receiver does not exist");
        }
    };


    return (<div>
        <Sidebar/>
        <section className="home">
            <div className="text">Send</div>
            <div className="p-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="sender" className="form-label">Sender</label>
                        <input type="email" className="form-control" id="sender" name="sender" value={sender} disabled/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="receiver" className="form-label">Receiver</label>
                        <input type="email" className="form-control" id="receiver" name="receiver"
                               onChange={(e) => setReceiver(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="amount" name="amount"
                               onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                </form>
            </div>
        </section>
    </div>);
}

export default Send;