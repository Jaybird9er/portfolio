import { useState } from "react";

export default function Card(props) {
    let id = props.id;
    let title = props.title;
    let blurb = props.blurb; 
    let frontImage = props.frontImage; 
    let backImage = props.backImage;
    let tech = props.tech;

    const [showSide, setShowSide] = useState(false);

    function handleClick() { 
        const cardDiv = document.querySelector(`.card${props.id}`);

        showSide === false ?
        cardDiv.setAttribute("class", `card${props.id} flip`) :
        cardDiv.setAttribute("class", `card${props.id}`);
        
        setShowSide(!showSide);
    }

    function Button() {    
        return (
            <button onClick={handleClick} className="card-button">
                {showSide === true ? <>&or;</> : <>&and;</>}
            </button>
        )
    }

    function testAlert() {
        console.log(`${props.id}`);
    }

    function TestButton() {
        return (
        <button onClick={testAlert}>
            Test
            {console.log("test button")}
        </button>
        );
    }

    return (
        <>
                <div className={`card${id}`}>
                    <div className="card-front">
                        {/* <TestButton /> */}
                        <h3 className="title">{title}</h3>
                        <span className="line-break"></span>
                        <img className="cardImg" src={require("../images/" + frontImage + ".png")} alt="a pic" />
                        <span className="line-break"></span>
                        <div className="detail-grid">
                            <p className="blurb">{blurb}</p>
                            <Button />
                        </div>
                    </div>
                    <div className="card-back">
                        <h3 className="title">{title}</h3>
                        <span className="line-break"></span>
                        <img className="cardImg" src={require("../images/" + backImage + ".png")} alt="a pic" />
                        <span className="line-break"></span>
                        <div className="detail-grid">
                            <p className="description">{tech}</p>
                            <Button />
                        </div>
                    </div>
                </div>
        </>
    );
}

