import React from 'react';
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";



function SubCategory(props) {

    const { name, cards } = props;
    console.log(cards)

    const relevantCards = cards.filter(card => card.currentCategory === name)
    console.log(name, " relevantCards:", relevantCards)

    return (
    <>
        <div className="col text-bg-light border h-100">{name}
            <Droppable droppableId={`${name} + 2`} >
                {(provided) => (

                <div ref={provided.innerRef} {...provided.droppableProps} className="h-100">

                    {relevantCards.map((relevantCard) =>
                        <TaskCard key={relevantCard.id} name={relevantCard.name} description={relevantCard.description}/>
                    )}
                </div>

                    )}
            </Droppable>
        </div>
    </>


    );
}

export default SubCategory;