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
            <button onClick={handleClick}>
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
        </>
    );
}

