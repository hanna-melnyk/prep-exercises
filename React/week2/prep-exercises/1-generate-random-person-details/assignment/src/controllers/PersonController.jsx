//React/week2/prep-exercises/1-generate-random-person-details/assignment/src/controllers/PersonController.jsx
import React, {useState, useEffect} from "react";
import {Person} from '../components/Person.jsx'

export const PersonController = () => {
    const [person, setPerson] = useState(null);

    const getPerson = async () => {

        try {
            const response = await fetch(`https://www.randomuser.me/api?results=1`);
            const data = await response.json();
            console.log(data);
            const fetchedPerson = data.results[0];

            const personData = {
                first_name: fetchedPerson.name.first,
                last_name: fetchedPerson.name.last,
                email: fetchedPerson.email
            };

            setPerson(personData);
        } catch (error) {
                console.error(`Error while fetching: `, error);
        }

        useEffect(() => {
            getPerson();
        }, []);

        return <Person person={person} />;

    };
}