import React, { Component} from "react"


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
            <div>
            <p>Random brewski: {this.state.random.name}</p>
            <img src={this.state.random.picture}/>
            </div>
         )
    }
}
 
export default Random;