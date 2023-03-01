import { useState } from "react";
import contactsAll from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsAll.slice(0, 5));

  const addRandomContacts = () => {
    const randomContact = Math.floor(Math.random() * contactsAll.length);
    const newContact = contactsAll[randomContact];
    setContacts([newContact,...contacts]);
  }
  const sortPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts)

  }
  const sortName = () => {
    const sortedName = [...contacts].sort((b, a) => b.name.localeCompare(a.name))
    setContacts(sortedName)

  }
  const deleteName = (idContact) => {
    const deletedContacts = contacts.filter((contact) => contact.id !== idContact);
    setContacts(deletedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button type="button" onClick={addRandomContacts}>
        Add Random Contacts
      </button>
      <button type="button" onClick={sortPopularity}>
        Sort by Popularity
      </button>
      <button type="button" onClick={sortName}>
        Sort by Name
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img
                  className="image"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
              <td><button type="button" onClick={() => deleteName(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
