import StyledCollapse from "./StyledCollapse"
import { useState } from "react"
function Collapse() {

    const [visibleA, setVisibleA] = useState(false)
    const [visibleB, setVisibleB] = useState(false)
    const [visibleC, setVisibleC] = useState(false)
    const [visibleD, setVisibleD] = useState(false)

    return (
        <div>
            <button onClick={() => setVisibleA(!visibleA)}>Fiabilité</button>
            <button onClick={() => setVisibleB(!visibleB)}>Respect</button>
            <button onClick={() => setVisibleC(!visibleC)}>Service</button>
            <button onClick={() => setVisibleD(!visibleD)}>Sécurité</button>

            <div>
                <div>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </div>
                <div>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
                <div>

                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question.
                </div>
                <div>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </div>













        </div>
    )

}
export default Collapse