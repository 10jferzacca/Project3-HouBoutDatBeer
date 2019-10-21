import React, { Component } from "react"
import {Link} from "react-router-dom"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          breweries: []
        };
      }
      componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries?by_state=new_york')
          .then(res => {
            return res.json();
          })
          .then(breweries => {
            console.log(breweries);
            this.setState({ breweries: breweries });
          });
      }
    render() { 
        return ( 
            <div>
                <h1>Posts</h1>
                {this.state.breweries.map(brewery => {
                    return(
                  
                     
                        
                        <h3>{brewery.name}, ({brewery.brewery_type})</h3>
                 
                    )
                })
                }
            </div>
           
            
         );
    }
}
 
export default Home;
