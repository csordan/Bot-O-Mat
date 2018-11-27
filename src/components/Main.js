import React, { Component } from 'react';
import Robot from "./Robot";
import { robotTasks } from "../assets/json/robotInfo";

class Main extends Component {
    constructor(props) {
        super(props);
        this.test = React.createRef();
        this.state = {
            robots: [],//EMPTY ARRAY FOR ROBOTS THAT IM GOING TO ADD TO AND MAP OUT
            randomTasks: [],//EMPTY ARRAY FOR TASKS THAT IM GOING TO ADD TO AND SEND TO THE ROBOTS AS PROPS

        }
    }

    robotSubmitHandler = (event) => {
        const {robotName, robotTypeSelector, robotError} = this.refs;
        event.preventDefault();
        const botName = robotName.value
        const botType = robotTypeSelector.value
        // When you use refs, you get the node rendered by this component, and you can re-use your component as much as you want.
        let errorMsg = robotError;
        if(botName.length === 0 && botType === 'default'){
            errorMsg.innerHTML = "PLEASE ENTER A VALID NAME AND SELECT A ROBOT TYPE";
        }
        else if(botName.length === 0 ){
           errorMsg.innerHTML = "PLEASE ENTER A VALID NAME"
        }else if(botType === 'default'){
            errorMsg.innerHTML= "PLEASE SELECT A ROBOT TYPE"
        }
        /* CHECKS IF A NAME AND TYPE IS EVEN ENTERED, IF SO CONTINUE AND ADDS BOT */
        else{
            errorMsg.innerHTML = "";
        let randomTasks = [];
        for (let x = 0; x < 5; x++) {
            const randomNumber = Math.floor(Math.random() * robotTasks.length);
            randomTasks.push(robotTasks[randomNumber])
        };
        const newBot = { botName, botType, randomTasks };
        /* REFS ALLOW YOU TO GRAB DOM NODES INSIDE THE RENDER METHOD */
        this.setState({ robots: [...this.state.robots, newBot] });
        /* SPREAD OPERATOR IS GRABBING A COPY OF STATE AND ALSO ADDING A NEW ARRAY */
    };
}

    render() {
        return (
            <main className="bot__main">
            <section className="bot__main__top">
                <h1 className="bot__main__header_primary textshadow--blue">Bot-O-Mat</h1>
                <form onSubmit={this.robotSubmitHandler} className="bot__form">
                <label htmlFor="robotName">Bot Name:</label>
                    <input type="text" name="robotName" ref="robotName"  id="robotName" className="bot__form__robotname boxshadow--white" placeholder="Bot Name"/>
                    <label htmlFor="robotName">Bot Type:</label>
                    {/* hiding labels for assesibility */}
                    <select name="robotTypeSelector" ref="robotTypeSelector" id="robotType" className="bot__form__robottype boxshadow--white">
                        <option value="default">Select a Robot Type:</option>
                        <option value="Unipedal" >Unipedal</option>
                        <option value="Bipedal">Bipedal</option>
                        <option value="Quadrupedal">Quadrupedal</option>
                        <option value="Arachnid">Arachnid</option>
                        <option value="Radial">Radial</option>
                        <option value="Aeronautical">Aeronautical</option>
                    </select>
                    <input type="submit" className="bot__form__submit" value="add bot"/>
                </form>
                <div className="bot__form__error" ref="robotError"></div>
                </section>
                <div className="robot__container">
                    {this.state.robots.map((bot, index) => {
                        /* .map() METHOD TAKES A ARRAY AND GENERATES A NEW ARRAY WITH PROPERTIES
                        IM RETURNING A NEW ARRAY THEN RETURNING A NEW COMPONENT THE PROPS EQUAL TO THE CONTENTS OF THE ARRAY
                        */
                        return (
                            <Robot
                                key={index}
                                robotName={bot.botName}
                                robotTypeSelector={bot.botType}
                                tasks={bot.randomTasks}
                            />
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default Main;