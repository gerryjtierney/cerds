import React from 'react';
import { Draggable } from "react-beautiful-dnd";

function TaskCard(props) {

    const {name, description} = props

    return (
        <Draggable key={name} draggableId={name} index={name}>
            {(provided) => (
            <div className="card" ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                <div className="card-header bg-success h-25">
                    {name}
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
                )}
        </Draggable>
    );
}

export default TaskCard;
