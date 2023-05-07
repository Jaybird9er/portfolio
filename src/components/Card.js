import { useState } from "react";

export default function Card({ id, title, blurb, image }) {    

    const [showImg, setShowImg] = useState(true)

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
            <p>
                {id}. {title}
            </p>
            <p id="blurb">
                {blurb}
            </p>
            <Button />
            <img hidden={showImg} className="cardImg" src={require('../images/' + image + '.png')} alt="a pic" />
        </>
    );
}

