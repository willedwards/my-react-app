import React from 'react';
import Person from './Person/Person';

//default ES6 for a one liner
const persons = (props) => props.persons.map( (p,index) => 
        <Person 
                key={p.id}
                name={p.name} 
                age={p.age} 
                onClick={() => props.clicked(index)}
                changed={(event) => props.changed(event,p.id)} />
     );

export default  persons;