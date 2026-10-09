import { useState } from "react";

function Userlist({ users, deleteuser, edituser }) {
  const [editid, setEdit] = useState(null);
  const [editname, setEditName] = useState("");
  const [editemail, setEditEmail] = useState("");
  return (
    <div>
      <h2>Userlist</h2>

      {users.length === 0 ? (
        <p>no user is available</p>
      ) : (
        users.map((data) => (
          <div key={data.id}>
            <li>Name : {data.name}</li>
            <li>Email : {data.email}</li>

            <button onClick={() => deleteuser(data.id)}>delete</button>
            <button
              onClick={() => {
                setEdit(data.id);
                setEditName(data.name);
                setEditEmail(data.email);
              }}
            >
              edit
            </button>

            {editid === data.id && (
              <div>
                <input
                  type="text"
                  placeholder="enter the name"
                  value={editname}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="enter email"
                  value={editemail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />

                <br />
                <button
                  onClick={() => {
                    edituser(editid, editname, editemail);
                    setEdit(null);
                    setEditName("");
                    setEditEmail("");
                  }}
                >
                  save
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
export default Userlist;
