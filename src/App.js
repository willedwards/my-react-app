import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validator from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    persons: [
      { id:'we', name: 'Max', age: 28 },
      { id:'as', name: 'Manu', age: 29 },
      { id:'2w', name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value',
    charComps :[],
    showPersons: false,
    textLen: 0,
    charKey: null
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
 
  keyPressListener = (event) => {
    const text = event.target.value;
    var txtStr = text.split('');
    var len = txtStr.length;
    var char = txtStr[len-1];


    const charComps = [...this.state.charComps];
 
    this.setState({
      charComps: charComps,
      textLen: len,
      charKey: char
    });
    console.log(char);
  }

  render() {

    let textWidget = null;
    let persons = null;
    let charcomps = null;
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
    }

    textWidget = (
        <div>
               <input name="textInput" onChange={this.keyPressListener} />
               <p>{this.state.textLen}</p>
               <Validator textLength={this.state.textLen}  />
          </div>
      );
    
      charcomps = (
        <div>
          {this.state.charComps.map((c,index) => {
           return <CharComponent key={c.id} 
                                 char={this.state.charKey}          
                                 />
          })}
        </div>
      )

    return (
      <div className="App">
          {textWidget}
          
          {charcomps}

        <button 
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
            {persons}       
      
        
      </div>
    );
  }
}

export default App;
