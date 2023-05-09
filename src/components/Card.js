import { useState } from "react";

export default function Card({ id, title, blurb, frontImage, backImage, tech }) {    

    const [showSide, setShowSide] = useState(false)

    function Button() {
        function handleClick() {
            const cardDiv = document.querySelector(".card");

            showSide === false ?
            cardDiv.setAttribute("class", `card ${id} flip`) :
            cardDiv.setAttribute("class", `card ${id}`);
            
            setShowSide(!showSide)
        }
    
        return (
            <button onClick={handleClick}>
                {showSide === true ? <>&or;</> : <>&and;</>}
            </button>
        )
    }

    return (
        <>
            <div className="card-container">
                <div className={"card " + id}>
                    <div className="card-front">
                        <Button />
                        <p className="title">{title}</p>
                        <img className="cardImg" src={require("../images/" + frontImage + ".png")} alt="a pic" />
                        <p className="blurb">{blurb}</p>
                    </div>
                    <div className="card-back">
                        <Button />
                        <p className="title">{title}</p>
                        <img className="cardImg" src={require("../images/" + backImage + ".png")} alt="a pic" />
                        <p className="description">{tech}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

