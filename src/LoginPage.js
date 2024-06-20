import React from 'react';
import './LoginPage.css'


function TriggerLoginForm(){
  const loginform = document.querySelector('.login-container');
  const starterQuery = document.querySelector('.starterQuery');
  loginform.style.display = 'block';
  starterQuery.style.display = 'none';
}

<style>

</style>

function StarterQuery(){
  return(
    <div className="starterQuery">
      <h1>What's Your Gender</h1>
      <div className="GenderButtons">
      <button type="button" onClick={TriggerLoginForm}>Male</button>
      <button type="button" onClick={TriggerLoginForm}>Female</button>
      </div>
    </div>
  )
}

function LoginPage() {
  return (
    <div className="login-container" style={{display: 'none'}}>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username:
            <input type="text" name="username"></input>
            </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" name="password"/>
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export { StarterQuery, LoginPage };