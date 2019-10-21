import React, { Component } from "react"

class User extends Component {
   render() {
       return(
           <div>
               <form method="post" action="/register">
                   Email Address: <br/>
                   <input type="text" name="email"/><br/>
                    Username:<br/>
                    <input type="text" name="username"/><br/>
                    Password:<br/>
                    <input type="password" name="password"/><br/>
                    <input type="submit" value="Register"/>
                </form>
             </div>
              
       )
   }
}

export default User;