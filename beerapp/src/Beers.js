import React, { Component } from "react"
import "./App.css"
import { Link } from "react-router-dom"
class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            beers: []
         }
    }
    componentDidMount() {
        // beers brewed after 11/2010
        fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2010&abv_gt=6')
        .then(res => {
            return res.json()
        })
        .then(beers => {
            this.setState({
                beers: beers
            })
        }
        )
        
    }
    
    render() { 
        return ( 
            <div>
            <div>
                <h2>Beers</h2>
            </div>

            <div className="wrapper">
               
                {this.state.beers.map((beer, index) => {
                    return(
                        <div className="box" key={index}>
                        <h4>{beer.name} ({beer.abv}%)</h4>
                        <p>{beer.tagline}</p>
                        <img src={beer.image_url} />
                        {/* add description below {beer.description} */}
                              
                        {/* <p>{beer.description}</p> */}
                        <p>Recommended Food Pairing: {beer.food_pairing[0]}</p>
                        <Link to={"/showbeer/" + beer.name}><button>Read More</button> </Link> 
                        </div>
                    )
                })}
            </div>
            </div>
         )
    }
}
 
export default Beers;