function Card({ id, body }) {    
    return (
        <>
            <p>
                {id}. {body}
            </p>
        </>
    );
}

const Cards = function({array}) {
    return (
        array.map((x, index) => <div key={index}><Card id={x.id} body={x.body}/> </div>)
    );
}

export default Cards;