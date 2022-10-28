import React from 'react';


function TaskCard(props) {

    const {name, description} = props

    return (
        <div className="card">
            <div className="card-header bg-success h-25">
                {name}
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default TaskCard;
