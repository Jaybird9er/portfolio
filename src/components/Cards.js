function Card({ id, title, blurb, image }) {    

    return (
        <>
            <p>
                {id}. {title}
            </p>
            <p>
                {blurb}
            </p>
            <img className='cardImg' src={require('../images/' + image + '.png')} alt="a pic" />
        </>
    );
}

const Cards = function({array}) {
    return (
        array.map(
            (item, index) => 
            <div className={index} key={index}>
                <Card 
                    id={item.id} 
                    title={item.title}
                    blurb={item.blurb}
                    image={item.image}
                /> 
            </div>
        )
    );
}

export default Cards;