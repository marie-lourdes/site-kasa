import StyledIconsFontAwesome from "./StyledIconsFontAwesome"
function ArrowUp() {
    return (
        <i className="fa-solid fa-angle-up"></i>
    )
}
function ArrowLeft() {
    return (
        <StyledIconsFontAwesome className="fa-solid fa-angle-left"></StyledIconsFontAwesome>
    )
}
function ArrowRight() {
    return (
        <StyledIconsFontAwesome className="fa-solid fa-angle-right"></StyledIconsFontAwesome>

    )
}
function RateStar() {
    const starNumber = [1, 2, 3, 4, 5]
    return (
        starNumber.map((star) => < i class="fa-sharp fa-solid fa-star" ></i >)


    )
}


export { ArrowUp, ArrowLeft, ArrowRight, RateStar }