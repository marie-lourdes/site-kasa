import React from 'react'
import arrowUp from "../../assets/arrowUp.png"
import arrowLeft from "../../assets/arrowLeftCarousel.png"
import arrowRight from "../../assets/arrowRightCarousel.png"
import {
    StyledIconsArrowCarousel,
    StyledIconsArrowUp,
    StyledRateStar,
} from './StyledIcons.js'

function ArrowUp() {
    return (
        <StyledIconsArrowUp><img src={arrowUp} alt="icon-arrow-up" /></StyledIconsArrowUp>
    )
}

function ArrowLeft() {
    return (
        <StyledIconsArrowCarousel $arrowLeft><img src={arrowLeft} alt="icon-arrow-left" /></StyledIconsArrowCarousel>
    )
}

function ArrowRight() {
    return (
        <StyledIconsArrowCarousel $arrowRight><img src={arrowRight} alt="icon-arrow-right" /></StyledIconsArrowCarousel>
    )
}

function RateStar({ rating }) {
    const rate = parseInt(rating)
    return (
        <React.Fragment>
            <StyledRateStar
                value={1}
                rating={rate}
                key={1}
            ></StyledRateStar>

            <StyledRateStar
                value={2}
                rating={rate}
                key={2}
            ></StyledRateStar>

            <StyledRateStar
                value={3}
                rating={rate}
                key={3}
            ></StyledRateStar>

            <StyledRateStar
                value={4}
                rating={rate}
                key={4}
            ></StyledRateStar>

            <StyledRateStar
                value={5}
                rating={rate}
                key={5}
            ></StyledRateStar>
        </React.Fragment>
    )
}

export { ArrowUp, ArrowLeft, ArrowRight, RateStar }
