import axios from "axios";
import { Fragment, useState } from "react";

function App() {

  const [users, setUsers] = useState([])

  console.log(users, "usersusers")

  const getUserData = async () => {
    await axios.get('http://localhost:3003/users').then((response) => {
      const { data } = response;
      setUsers(data);
    })
  }

  const deleteUser = async () => {
    let id = Math.floor(Math.random() * users.length);
    console.log(id)
    try {
      await axios.delete(`http://localhost:3003/users/${id}`).then((response) => {
        console.log(response, "response")
        getUserData();
      })
    } catch (error) {
      console.log(error, "wetrwetruywteruyt")
    }
  }
  const addUserData = async () => {
    let data = {
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478"
        }
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
      }
    }
    try {
      await axios.post('http://localhost:3003/users', data).then((response) => {
        console.log(response, "responseresponse")
        getUserData();
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Fragment>
      <button onClick={getUserData}>Get Data</button>
      <button onClick={addUserData}>Add Data</button>
      <button disabled={users.length === 0} onClick={deleteUser}>Delete Data</button>
    </Fragment>
  );
}

export default App;
