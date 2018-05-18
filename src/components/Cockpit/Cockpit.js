import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses =[]; //red bold 
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold); //classes = ['red','bold']
    }

    var combo = assignedClasses.join(' ');

    let btnStyleClass ='';
    if(props.showPersons){
        btnStyleClass = classes.Red;
    }

    return (
        <div>
        <h1> Hi, I'm a react app</h1>
        <p className={combo}> This is really working!</p>
          <button 
            className = {btnStyleClass}
            onClick={props.clicked} >Toggle Persons</button>
        </div>
    );
};

export default cockpit;