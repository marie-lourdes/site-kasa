import React from "react"
import { StyledIconsArrowCarouselFontAwesome, StyledIconsArrowUpFontAwesome, StyledRateStar } from "./StyledIconsFontAwesome.js"

function ArrowUp() {
    return (
        <StyledIconsArrowUpFontAwesome className="fa-solid fa-angle-up"></StyledIconsArrowUpFontAwesome>
    )
}

function ArrowLeft() {
    return (
        <StyledIconsArrowCarouselFontAwesome className="fa-solid fa-angle-left"></StyledIconsArrowCarouselFontAwesome>
    )
}

function ArrowRight() {
    return (
        <StyledIconsArrowCarouselFontAwesome className="fa-solid fa-angle-right"></StyledIconsArrowCarouselFontAwesome>
    )
}

function RateStar({ rating }) {
    const rate = parseInt(rating)
    return (
        <React.Fragment>
            <StyledRateStar value={1} rating={rate} key={1} className="fa-sharp fa-solid fa-star"></StyledRateStar>
            <StyledRateStar value={2} rating={rate} key={2} className="fa-sharp fa-solid fa-star"></StyledRateStar>
            <StyledRateStar value={3} rating={rate} key={3} className="fa-sharp fa-solid fa-star"></StyledRateStar>
            <StyledRateStar value={4} rating={rate} key={4} className="fa-sharp fa-solid fa-star"></StyledRateStar>
            <StyledRateStar value={5} rating={rate} key={5} className="fa-sharp fa-solid fa-star"></StyledRateStar>
        </React.Fragment>
    )
}

export { ArrowUp, ArrowLeft, ArrowRight, RateStar }