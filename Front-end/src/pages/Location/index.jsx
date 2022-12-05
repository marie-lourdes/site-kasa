
import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import CarouselLocation from "../../components/CarouselLocation"

function Location() {
    const param = useParams()
    console.log("param", param)
    const { id } = param
    const [dataOneLocation, setDataOneLocation] = useState({})
    const dataPictures = dataOneLocation?.pictures

    const titreAlt = dataPictures && dataPictures.map((url) => (

        url.slice(-21, -4)


    ))

    console.log("titre alt", titreAlt)

    console.log("datapicture", dataPictures)
    console.log("dataonelocation", dataOneLocation)
    useEffect(() => {
        async function reqData() {
            try {
                const response = await fetch("http://localhost:8000/api-kasa/logements/" + id)
                console.log("response", response)
                const dataLocation = await response.json()
                console.log("datalocation", dataLocation)
                setDataOneLocation(dataLocation)
            } catch (err) {
                console.log(err)

            }
        }
        reqData();

    }, [id])



    return (
        <React.Fragment>
            <CarouselLocation >
                {dataPictures &&
                    dataPictures.map((url) => (

                        < img src={url} alt={titreAlt} />
                    ))}


            </CarouselLocation>
            <main>
                Location
            </main>
        </React.Fragment>
    )
}

export default Location