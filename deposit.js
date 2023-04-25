function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 


  return (
    <Card
    bgcolor="dark"
    header={(<img src="deposit.jpg" className="img-fluid" alt="Bad Bank Logo"/>)}
    title="Welcome to the Deposit screen. To make a deposit, enter your email and deposit amount."
      status={status}
      body={show ? 
        <SubmitDeposit setShow={setShow} setStatus={setStatus}/> :
        <SuccessfulDeposit setShow={setShow}/>}
    />
  )
}

function SuccessfulDeposit(props){
  return (<>
    <h5>Successful Deposit!</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => props.setShow(true)}>
        Make Another Deposit
    </button>
  </>);
} 

function SubmitDeposit(props){
  const [email, setEmail]   = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext); 

   


  function handleSubmit(){
    console.log(email,deposit);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('Bad Bank Account Does Not Exist');
      return;      
    }
    else {
    user.balance = user.balance + Number(deposit);
    console.log(user);
    props.setStatus('');      
    props.setShow(false);
  }
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Deposit Amount<br/>
    <input type="number" min="1" 
      className="form-control" 
      placeholder="$0.00" 
      value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>

    <button type="submit" 
    disabled={!email || !deposit}
      className="btn btn-info" 
      onClick={handleSubmit}>Deposit Funds</button>

  </>);
}