import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import CarouselLocation from "../../components/CarouselLocation"

function Location() {
    const param = useParams()
    console.log("param", param)
    const { id } = param
    useEffect(() => {
        async function reqData() {
            try {
                const response = await fetch("http://localhost:8000/api-kasa/logements/" + id)
                console.log("response", response)
                const dataLocation = await response.json()
                console.log("datalocation", dataLocation)

            } catch (err) {
                console.log(err)

            }
        }
        reqData();
    }, [])
    return (
        <React.Fragment>
            <CarouselLocation >
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="titrealt" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg" alt="titrealt" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg" alt="titrealt" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg" alt="titrealt" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg" alt="titrealt" />
            </CarouselLocation>
            <main>
                Location
            </main>
        </React.Fragment>
    )
}

export default Location