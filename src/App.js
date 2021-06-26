import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [input, setInput] = useState([{
  //   name: '',
  //   phone:'',
  //   email:''
  // }])
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactList, setContactList] = useState([]);

  const handleAddContact = () => {
    const obj = {
      name,
      phone,
      email
    };
    setContactList([...contactList, ...[obj]]);
  };
  return (
    <div className="App">
      <h1>Add Contact</h1>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <hr />
      <input
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <hr />
      <input
        placeholder="Email Id"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <hr />
      <button onClick={handleAddContact}>Add</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {contactList.length > 0 && (
          <>
            {contactList.map((item) => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              </>
            ))}
          </>
        )}
      </table>
      {/* {contactList.length > 0 && 
      <>
      <ul>
        {contactList.map(item => (
          <>
          <li>{item.name}</li>
          <li>{item.phone}</li>
          <li>{item.email}</li>
          </>
        ))}
      </ul>
      </>
      } */}
    </div>
  );
}
