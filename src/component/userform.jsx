import { useState } from "react";

function Userform({ adduser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      setError("please enter name and email");
      return;
    }
    setError("");
    adduser(name, email);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h1>Userform</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>

        <input
          type="text"
          value={name}
          placeholder="enter the name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button>Add user</button>
      </form>
    </div>
  );
}

export default Userform;
