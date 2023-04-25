function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Missing " + label);
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    return true;
  }

  function validateEmail() {
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailValidation)) {
      setStatus("Please enter valid email");
      setTimeout(() => setStatus(''), 6000);
      return false;
    }
    return true;
  }

  function validatePassword() {
    if (password.length < 8) {
      setStatus("Password must be at least 8 characters");
      setTimeout(() => setStatus(''), 6000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validateEmail(email, "email")) return;
    if (!validatePassword(password, "password")) return;
    ctx.users.push({name,email,password,balance:2000 });
    setShow(false);
}

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
    <Card
      bgcolor="dark"
      header="Create Bad Bank Account"
      title="Join Bad Bank today and take advantage of our new sign on bonus!"
      status={status}
      body={
        show ? (
          <>
            First & Last Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <br />
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              id="submit-button"
              disabled={!name || !email || !password}
              type="submit"
              className="btn btn-info"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Account Succefully Created!</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Create Another Account
            </button>
            <br />
          </>
        )
      }
    />
    </>
  );
}
