import Card from "./Card";

const Cards = function({array, props}) {
    return (
        array.map((item, index) => 
            <div className="card-container" key={index}>
                <Card 
                    id={item.id} 
                    title={item.title}
                    frontImage={item.frontImage}
                    blurb={item.blurb}
                    backImage={item.backImage}
                    tech={item.tech}
                >
                {/* comment this out to get the cards back */}
                {props.children}
                </Card>
            </div>
        )
    );
}

export default Cards;