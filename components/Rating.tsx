import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import Select from "react-select";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const Rating = () => {
    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
        />
    )
}

export default Rating