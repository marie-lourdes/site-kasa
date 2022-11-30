
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
function ThumbLocation() {
    const [card, setCard] = useState([])
    useEffect(() => {

        fetch("http://localhost:8000/api-kasa/logements")
            .then(res => {
                return res.json()
            })
            .then(({ appartmentData }) => {
                setCard(appartmentData)
                console.log("appartementData", appartmentData)
            })
            .catch(error => error)

    }, [])
    const locationData = card
    console.log("LOCATIONcard", locationData)
    console.log("card", card)

    return (
        <React.Fragment>
            {
                locationData.map(({ id, title }) => (
                    <div Key={`${id}`}>
                        <li ><Link>{locationData && title}</Link></li>
                    </div>
                ))
            }

        </React.Fragment >

    )
}

export default ThumbLocation