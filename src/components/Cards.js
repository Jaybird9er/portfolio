import Card from "./Card";

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