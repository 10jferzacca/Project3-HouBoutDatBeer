import React, { Component } from "react"
import Location from './location'

class Showbeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.match.params.name,
            beers: {}
        }
    }
componentDidMount() {
    // beers brewed after 11/2010
    fetch('https://api.punkapi.com/v2/beers?beer_name=' + this.state.name)
    .then(res => {
        return res.json()
    })
    .then(beers => {
        this.setState({
            beers: beers[0]
        })
    }
    )
    
}
    render()  {
       let beer = this.state.beers;
       console.log(beer)
        return(
         
       <div>
           <h1>Beer Name: {beer.name}</h1>
           <img src={beer.image_url}/>
           <p>Beer tagline: {beer.tagline}</p>
           <p>Description: {beer.description}</p>
           <Location/>
       </div>
                )
            }
        }
      
        
export default Showbeer;