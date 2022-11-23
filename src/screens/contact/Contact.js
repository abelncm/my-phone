import axios from "axios";
import { useEffect, useState } from "react";
import AddContact from './AddContact';
import ContactList from './ContactList';

export default function Contact() {

    const [contacts, setContacts] = useState([]);
    const pathUrl = '/persons';

    useEffect(() => {
        getPersons();
    }, []);

    function getPersons() {
        axios.get(pathUrl)
            .then(response => {
                // handle success
                console.log(response);
                setContacts(response.data);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    function onCreate(newPerson) {
        contacts.push(newPerson);
        setContacts([...contacts]);
    }

    return <>
        <ContactList 
            contacts={contacts}
            setContacts={setContacts}/>
        <AddContact
            contactsState={[contacts, setContacts]} // option 1
            onCreation={onCreate} // option 2
        />
    </>
}