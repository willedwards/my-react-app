import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
     }

    return (
      <div className={classes.App}>
      <Cockpit showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
        {persons} 
      </div>

    );
  }
}

export default App;
