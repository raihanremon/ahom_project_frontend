import React from "react";
import { Link } from "react-router-dom";


function ButtonWithBG(props){
    return <Link to={props.link} className="button-withbg">{props.title}</Link>
}

function ButtonTRBG(props){
    return <Link to={props.link} className="button-withoutbg">{props.title}</Link>
}

export default { ButtonWithBG, ButtonTRBG};