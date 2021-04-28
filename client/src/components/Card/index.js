import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="container">
            <div className="cardBorder">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <img className="book-img" src={props.image} alt={props.title} />
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="end">
                                    <button className="btn btn-outline-info" onClick={() => window.open(props.link, "_blank")} >{props.btn1}</button>
                                    {props.btn2}
                                    {/* <button className="btn btn-outline-info" onClick={() => props.handleBookSave(props)}>{props.btn2}</button> */}
                                    {/* <button className="btn btn-outline-info" onClick={() => props.handleBookDelete(props)}>{props.btn3}</button> */}
                                </div>
                                <h4>{props.title}</h4>
                                <h5>{props.authors}</h5>
                                <h6 className="overflow">{props.description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;