import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div className="container">
            <div className="cardBorder">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="book-img" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="book" />
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="end">
                                    <a className="btn btn-outline-info">{props.btn1}</a>
                                    <a className="btn btn-outline-secondary">{props.btn2}</a>
                                </div>
                                <h4>Title <span> - Author</span></h4>
                                <h6>Description</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;