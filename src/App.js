import React, { Component } from 'react';
import './App.css';
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

    this.setState({ persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }


  render() {

   

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((p,index) => {
            return <Person key={p.id}
                    name={p.name} 
                    age={p.age} 
                     click={() => this.deletePersonHandler(index)}
                     changed={(event) => this.nameChangedHandler(event,p.id)} 
                    />
          })}
      </div> 
      );
    }


    return (
      <div className="App">
        <button 
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
            {persons} 
      
      </div>
    );
  }
}

export default App;