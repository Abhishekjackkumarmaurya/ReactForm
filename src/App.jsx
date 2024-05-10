import { useState } from "react";

const App=()=>{
  const [username,updateUsername]=useState("");
  const [useremail,updateEmail]=useState("");
    
  const submitHandler=(event)=>{
    event.preventDefault();
    

    console.log(event.target.username.value)
    console.log(event.target.useremail.value)


    console.log(username)
    console.log(useremail)
  }



  return(
    <div>
       <h1> React form</h1>
       <form onSubmit={submitHandler}>
       <input onChange={(e)=>{updateUsername(e.target.value)}} name="username" value={username} type="text" placeholder="enter username" />
       <br />
        <br />

       <input onChange={(e)=>{updateEmail(e.target.value)}} name="useremail" value={useremail} type="email" placeholder="enter email" />
       <br />
       <br />
       <button>submit</button>
       
       </form>
    </div>
  )


}

export default App;
