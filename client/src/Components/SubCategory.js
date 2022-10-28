import React from 'react';
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";



function SubCategory({name, cards}) {


    const relevantCards = cards.filter(card => card.currentCategory === name)


    return (
    <>
        <div className="col text-bg-light border h-100">{name}
            <Droppable droppableId={`${name} + 2`} >
                {(provided) => (

                <div ref={provided.innerRef} {...provided.droppableProps} className="h-100">

                    {relevantCards.map((relevantCard) =>
                        <TaskCard
                            key={relevantCard.id}
                            name={relevantCard.name}
                            description={relevantCard.description}
                            id={relevantCard.id}
                        />
                    )}
                </div>

                    )}
            </Droppable>
        </div>
    </>


    );
}

export default SubCategory;