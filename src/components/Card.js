import { useState } from "react";

export default function Card({ id, title, blurb, frontImage, backImage, tech }) {    

    const [showImg, setShowImg] = useState(false)

    function Button() {
        function handleClick() {
            showImg === true ? setShowImg(false) : setShowImg(true);
        }
    
        return (
            <button onClick={handleClick}>
                {showImg === true ? <>&or;</> : <>&and;</>}
            </button>
        )
    }

    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-front" hidden={showImg}>
                        <Button />
                        <p className="title">{title}</p>
                        <img className="cardImg" src={require("../images/" + frontImage + ".png")} alt="a pic" />
                        <p className="blurb">{blurb}</p>
                    </div>
                    <div className="card-front" hidden={!showImg}>
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

