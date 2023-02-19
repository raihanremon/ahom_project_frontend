import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../Scanner.css";

const Scanner = () => {
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
                />
                <span className="input-group-btn">
                  <button className="btn" type="submit">
                    SEARCH
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Scanner;
