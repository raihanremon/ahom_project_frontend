import React from "react";
import MyButton from "../../com/button";


export default function HeroSection(){
    return(
        <section className="heroarea">
            <div className="container">
                <div className="heroarea-wrap">
                    <div className="heroarea-left">
                        <h2>The Best 3rd Gen Blockchain For Your Business</h2>
                        <p>
                            Experience smart, customized, low-cost payment solutions made for you.
                            <span>Even No Gas Fees.</span>
                        </p>
                        <MyButton.ButtonWithBG title="Get Started Now!" />
                    </div>
                    <div className="heroarea-right">
                        <img src="#" alt="Hearo image"/>
                    </div>
                </div>
            </div>
        </section>
    );
}