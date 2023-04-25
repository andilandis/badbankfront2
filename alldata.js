function AllData(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="dark"
        header="All Data in Store"
        title="Please log in to access All Data"
        status={status}
        body={show ? 
          <AllDataForm setShow={setShow} setStatus={setStatus}/> :
          <AllDataMessage setShow={setShow} setStatus={setStatus}/>}
      />
    )
}
function AllDataForm(props){
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
  
      <button type="submit" className="btn btn-info" onClick={handle}>Login to see All Data</button>
     
    </>);
}

 function AllDataMessage(){

  const ctx = React.useContext(UserContext);
  const data = ctx.users.map((user, key) => {
    return (
      <>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.password}</td>
    <td>{user.balance}</td>

    </>
    )
  });


  return (
    <Card
bgcolor="info"
txtcolor="dark"
header="All Data in Store"
body={
  <>
  <table>
    <thead>
    <tr>
  <th>Username</th>
  <th>Email</th>
  <th>Password</th>
  <th>Balance</th>
  </tr>
  </thead>
  <tbody>
    <tr key="user">
{data}
</tr>
  </tbody>
  </table>
  </>
} />

    )
}