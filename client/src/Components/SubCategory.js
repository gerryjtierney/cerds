import React from 'react';
import TaskCard from "./TaskCard";




function SubCategory(props) {

    const { name, cards } = props;
    console.log(cards)

    const relevantCards = cards.filter(card => card.currentCategory === name)
    console.log(name, " relevantCards:", relevantCards)

    return (

        <div className="col text-bg-light border h-100">
            <p>{name}</p>
            {relevantCards.map((relevantCard) =>
                <TaskCard key={relevantCard.id} name={relevantCard.name} description={relevantCard.description}/>
            )}
        </div>
    );
}

export default SubCategory;