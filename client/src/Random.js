import React, { Component} from "react"
import Location from './location'


class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            random: []
         }
    }
    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers/random').then(response => {
            return response.json()
        }).then(res => {
            console.log(res)
           this.setState({
            random: res[0]
           }) 
        })
        .catch(err => console.error(err))
    }
    render() { 
        return ( 
            <div className="random">
                {console.log('hello')}
            <p className="here">Here's a cold one..</p> <p>{this.state.random.name}</p>
            <img src={this.state.random.image_url}/>
            <Location/>
            </div>
         )
    }
}
 
export default Random;