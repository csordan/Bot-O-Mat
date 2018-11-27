import React from 'react';
const Robot = (props) => {
    const { tasks, robotName, robotTypeSelector } = props;//DESTRUCTURING VALUES INSIDE PROPS OBJECT

    const convertToSeconds = (oldSec) => {
        const newSeconds = oldSec / 1000;//CONVERTING MILLISECONDS TO SECONDS
        if (oldSec === 1000) {
            return `${newSeconds} second`;
        } else {
            return `${newSeconds} seconds`;
        }
        /* CHECKS IF ITS ONE SECOND OR NOT BECAUSE IF IT DOES IT WILL ONLY SAY "SECOND" */
    };

    const timeoutHandler = (name, index, eta) => {
        const buttonProperties = `${name}-${index}`;//MAKING A SHORTCUT STRING FOR ID NAMES

        document.getElementById(`${buttonProperties}-button`).style.display = "none";
        document.getElementById(`${buttonProperties}-loading`).style.display = "block";//MAKING THE BUTTON DISSAPEAR AND MAKING THE LOADING SVG APPEAR UNTIL IT IS FINISHED

        setTimeout(() => {//DOING A setTimeout AFTER THE BUTTON IS CLICKED
            document.getElementById(`${buttonProperties}-loading`).style.display = "none";
            document.getElementById(`${buttonProperties}-completed`).style.display = "block";
            document.getElementById(`${buttonProperties}-list__item`).classList.add('removeTask');
        }, eta)//setTimeout runs a callback function (FIRST PARAMETER) after the time (SECOND PARAMETER) is completed
    };


    return (
        <div className="robot boxshadow--white">
            <h2 className="robot__name">{robotName}</h2>
            <p className="robot__type">Bot Type: {robotTypeSelector}</p>
            <div>
                <ul className="task__list">
                    {tasks.map((bot, botIndex) => {
                        const buttonInfo = `${robotName}-${botIndex}`;//MAKING A SHORTCUT STRING FOR THE LIST ITEMS ID's
                        return (
                            <li className="task__list__item" id={`${buttonInfo}-list__item`}>
                                <p className="task__list__description">{bot.description}</p>
                                <p className="task__list__time">ETA: {convertToSeconds(bot.eta)}</p>
                                <div className="task__list__timer">
                                    <button className="task__list__button"
                                        id={`${buttonInfo}-button`}
                                        onClick={() => timeoutHandler(robotName, botIndex, bot.eta)}>complete</button>
                                    <div className="task__list__loading" id={`${buttonInfo}-loading`}></div>
                                    <div className="task__list__completed" id={`${buttonInfo}-completed`}></div>
                                    {/* THREE ELEMENTS INSIDE ONE DIV THAT ARE BEING DISPLAY NONE/BLOCK WHEN NEEDED */}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Robot;