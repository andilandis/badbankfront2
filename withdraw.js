function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  

  return (
    <>
    <Card
      bgcolor="dark"
      header={(<img src="withdraw.jpg" className="img-fluid" alt="Bad Bank Logo"/>)}
      title="Welcome to the Withdraw screen. To make a withdraw, enter your email and withdraw amount." 
      status={status}
      body={show ?
        ( <SuccessfulWithdraw setShow={setShow} setStatus={setStatus} /> ) :
       ( <SubmitWithdraw setShow={setShow}/> ) }
    />
    </>
  )
}

function SubmitWithdraw(props) {
  return (<>
    <h4>Successful Withdraw!</h4>

    <button type="submit"
      className="btn btn-info"
      onClick={() => props.setShow(true)}>
      Make Another Withdraw
    </button>
  </>);
}

function SuccessfulWithdraw(props) {
  const [email, setEmail] = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);
 


  function handleSubmit() {
    console.log(email, withdraw);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('Bad Bank Account Does Not Exist')
      return;
    }
else {
    user.balance = user.balance - Number(withdraw);
    console.log(user);
    props.setStatus('');
    props.setShow(false);
  }
  }


  return (<>

    Bad Bank Username<br/>
    <input type="input"
      className="form-control"
      placeholder="Enter Email"
      value={email}
      onChange={e => setEmail(e.currentTarget.value)} /><br />

    Withdraw Amount<br/>
    <input type="number" min="1"
      className="form-control"
      placeholder="$0.00"
      value={withdraw}
      onChange={e => setWithdraw(e.currentTarget.value)} /><br />

    <button type="submit"
      disabled={!email || !withdraw}
      className="btn btn-info"
      onClick={handleSubmit}>
      Withdraw Funds
    </button>

  </>);
}