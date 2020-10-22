import React, { useState } from 'react';
import './style/App.css';

function App() {
  // users array
  const [users, setUsers] = useState([]);
  // person data
  const [person, setPerson] = useState({ name: '', lastName: '', email: '' });

  // we use 'e' to access the data in the input and dynamic obejct keys to push the info in the person object
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  /*   first we prevent the page to update in the submit, then we check if the inputs are filled up. 
  We create a new object with an id, we set the user wit the new person and we reset the person to blank */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.lastName && person.email) {
      const newPerson = { id: new Date().getTime(), ...person };
      setUsers([...users, newPerson]);
      setPerson({ name: '', lastName: '', email: '' });
    }
  }

  // return of the rendered object
  return (
    <section>
      <div className="container">
        <div className="app">
          <div className="form-display">
            <form onSubmit={handleSubmit}>
              <h1>Add a new user</h1>
              <div className="form-controler">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={person.name} onChange={handleChange} />
              </div>
              <div className="form-controler">
                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" value={person.lastName} onChange={handleChange} />
              </div>
              <div className="form-controler">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={person.email} onChange={handleChange} />
              </div>
              <button type="submit">Add user</button>
            </form>
          </div>
          <div className="table-display">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>last name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {/* iteration of the array users */}
                {
                  users.map((user) => {
                    const { id, name, lastName, email } = user;
                    return (
                      <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
