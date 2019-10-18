import React, { Component } from "react"
import "./App.css"
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
                <h2>Beers</h2>
                {this.state.beers.map(beer => {
                    return(
                        <div>
                        <h4>{beer.name}: {beer.tagline}</h4>
                        <img src={beer.image_url} />
                        <p>{beer.description}</p>
                        <p>Food Pairing: {beer.food_pairing[0]}</p>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Beers;