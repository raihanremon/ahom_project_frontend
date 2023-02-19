import React from "react";
import { FaShieldAlt, FaDiceD6, FaBitcoin } from "react-icons/fa";
import {TbApi} from "react-icons/tb"
import {MdSupportAgent} from "react-icons/md";

const Card = ({ title, text }) => {
    function iconCheck(){
        if (title === "Security"){
            return  <FaShieldAlt size={"2.5rem"} color={"#6472DA"}/>
        }
        else if (title === "Decentralized"){
            return  <FaDiceD6 size={"2.5rem"}  color={"#6472DA"}/>
        }
        else if (title === "API Support"){
            return  <TbApi size={"2.5rem"}  color={"#6472DA"} />
        }
        else if (title === "24/7 Support"){
            return <MdSupportAgent size={"2.5rem"}  color={"#6472DA"} />;
        }
        else if (title === "Bitcoin"){
          return <FaBitcoin size={"2.5rem"} color={"#F99417"} />
        }
    }
  return (
    <div className="container p-2 align-self-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="text-center mt-2">
         {iconCheck()}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
