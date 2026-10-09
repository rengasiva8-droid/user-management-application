import { useEffect, useState } from "react";
import Userform from "./component/userform";
import Userlist from "./component/userlist";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const adduser = (name, email) => {
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setUser([...users, newUser]);
  };

  const deleteuser = (id) => {
    const updateuser = users.filter((user) => user.id !== id);
    setUser(updateuser);
  };

  const edituser = (id, name, email) => {
    const updateuser = users.map((user) =>
      user.id === id ? { ...user, name: name, email: email } : user,
    );

    setUser(updateuser);
  };

  return (
    <div>
      <Userform adduser={adduser} />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <Userlist users={users} deleteuser={deleteuser} edituser={edituser} />
      )}
    </div>
  );
}
export default App;
