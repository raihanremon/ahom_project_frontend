import React from "react";


function ButtonWithBG(props){
    return <button className="button-withbg">{props.title}</button>
}

function ButtonTRBG(props){
    return <button className="button-withoutbg">{props.title}</button>
}

export default { ButtonWithBG, ButtonTRBG};