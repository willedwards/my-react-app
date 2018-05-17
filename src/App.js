import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id:'we', name: 'Max', age: 28 },
      { id:'as', name: 'Manu', age: 29 },
      { id:'2w', name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    
    this.setState({
      persons: this.state.persons.filter((p,index) => index !== personIndex) 
    
    });
  }


  render() {

    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
     
    };
   

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((p,index) => {
            return <Person key={p.id}
                    name={p.name} 
                    age={p.age} 
                     onClick={() => this.deletePersonHandler(index)}
                     changed={(event) => this.nameChangedHandler(event,p.id)} 
                    />
          })}
      </div> 
      );

      style.backgroundColor = 'red';
    
    }

    const assignedClasses =[]; //red bold 
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold); //classes = ['red','bold']
    }

    var combo = assignedClasses.join(' ');

    return (

      <div className={classes.App}>
      <h1> Hi, I'm a react app</h1>
      <p className={combo}> This is really working!</p>
        <button style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
            
            {persons} 
      
      </div>

    );
  }
}

export default App;
