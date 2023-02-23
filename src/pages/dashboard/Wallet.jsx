import WalletCard from "../../components/WalletCard"
import Sidebar from "./Sidebar"


const Wallet = () => {
  return (
    <div>
    <Sidebar />
    <section className="home">
        <div className="text">Wallet</div>
        <div className="p-5">
        <WalletCard />
        </div>
      </section>
      </div>
   
  )
}

export default Wallet