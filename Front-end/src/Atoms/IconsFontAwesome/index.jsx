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


export { ArrowUp, ArrowLeft, ArrowRight }