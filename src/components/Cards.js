import Card from "./Card";

const Cards = function({array}) {
    return (
        array.map((item, index) => 
            <div className={index} key={index}>
                <Card 
                    id={item.id} 
                    title={item.title}
                    frontImage={item.frontImage}
                    blurb={item.blurb}
                    backImage={item.backImage}
                    tech={item.tech}
                /> 
            </div>
        )
    );
}

export default Cards;