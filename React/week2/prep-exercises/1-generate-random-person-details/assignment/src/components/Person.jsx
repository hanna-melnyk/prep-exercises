//React/week2/prep-exercises/1-generate-random-person-details/assignment/src/components/Person.jsx
import React from 'react';

export const Person = ({person}) => {
    if (!person) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            <li>First Name: {person.first_name}</li>
            <li>Last Name: {person.last_name}</li>
            <li>Email: {person.email}</li>
        </ul>
    )
}