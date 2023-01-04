import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const url ='https://jsonplaceholder.typicode.com/users';
  const [users,setUsers] = useState([]);

  useEffect( ()=>{
      getUsers();
  },[]);


  const getUsers = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setUsers(response.data);
  }

  return (
    <div className="App">
      <div>
        <table id='userTable'>
          <thead>
            <tr><th>#</th><th>name</th><th>username</th><th>email</th></tr>
          </thead>
          <tbody>
              { users.map( (user,id)=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
