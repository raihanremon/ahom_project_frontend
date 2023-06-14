import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import {useState, useEffect} from "react";
import {URL} from '../../components/constants'
import Sidebar from "./Sidebar";
import {Modal, Button, Spinner, Toast} from "react-bootstrap";

const Send = () => {
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('')
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        const cookie = Cookies.get('JWT')
        console.log(cookie)
        const data = jwt_decode(cookie)
        console.log(data["iss"])
        setSender(data["iss"]);

    }, [setSender])

    const handleConfirmation = () => {
        setShowConfirmation(false);
        setShowLoading(true);
        setTimeout(()=>{
            setShowLoading(false);
            setShowToast(true);
            // Redirect to "/blocks" page here
            window.location.href = "/blocks";
        }, 30000)

    };
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
            setShowConfirmation(true)
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
        <Modal show={showConfirmation} onHide={()=> setShowConfirmation(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to proceed with the transactions?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=> setShowConfirmation(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirmation}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showLoading} centered backdrop="static" keyboard={false}>
            <Modal.Body>

                <Spinner animation="border" role="status" />
                <span className="ms-2">Validating Transaction and Adding to the chain...</span>
            </Modal.Body>
        </Modal>
        <Toast show={showToast} onClose={()=> setShowToast(false)} delay={3000} style={{ position: "fixed", top: 20, right: 20 }}>
            <Toast.Header>
                <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>Transaction added to the block</Toast.Body>
        </Toast>
    </div>);
}

export default Send;