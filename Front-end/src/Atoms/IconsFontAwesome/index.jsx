import React from "react"
import { StyledIconsCarouselFontAwesome, StyledRateStar } from "./StyledIconsFontAwesome"
import { useState } from "react"

function ArrowUp() {
    return (
        <i className="fa-solid fa-angle-up"></i>
    )
}

function ArrowLeft() {
    return (
        <StyledIconsCarouselFontAwesome className="fa-solid fa-angle-left"></StyledIconsCarouselFontAwesome>
    )
}

function ArrowRight() {
    return (
        <StyledIconsCarouselFontAwesome className="fa-solid fa-angle-right"></StyledIconsCarouselFontAwesome>
    )
}

function RateStar({ rating }) {
    const rate = parseInt(rating)

    return (
        <React.Fragment>
            < StyledRateStar value={1} rating={rate} key={1} className="fa-sharp fa-solid fa-star" ></StyledRateStar >
            < StyledRateStar value={2} rating={rate} key={2} className="fa-sharp fa-solid fa-star" ></StyledRateStar >
            < StyledRateStar value={3} rating={rate} key={3} className="fa-sharp fa-solid fa-star" ></StyledRateStar >
            < StyledRateStar value={4} rating={rate} key={4} className="fa-sharp fa-solid fa-star" ></StyledRateStar >
            < StyledRateStar value={5} rating={rate} key={5} className="fa-sharp fa-solid fa-star" ></StyledRateStar >
        </React.Fragment>


    )




}


export { ArrowUp, ArrowLeft, ArrowRight, RateStar }