function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="dark"
      header="Login in to your Bad Bank account"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  const [user, setUser] = React.useState('');
  const [name, setName] = React.useState('');
  return(<>
    <h5>Success! Welcome back {user.name}</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => props.setShow(true)}>
        Not you? Login in with a different account
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function handle(){
    console.log(email,password);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('Bad Bank Account Does Not Exist');
      return;      
    }
    else {
    console.log(user);
    props.setStatus('');      
    props.setShow(false);
  }
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter Password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-info" onClick={handle}>Login</button>
   
  </>);
}