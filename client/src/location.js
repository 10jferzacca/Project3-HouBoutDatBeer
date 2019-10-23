import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            breweries: ''
        }
    }

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries?by_state=new_york')
          .then(res => {
            return res.json();
          })
          .then(breweries => {
            // console.log(breweries);
            this.setState({ breweries: breweries });
          });
      }
      

    
    render(){
        const mapStyles = {
            width: '100%',  
            height: '100%',
          };
          if(this.state.breweries.length >= 1){
              return(
                  
                  <div>
                      {console.log(this.state.breweries)}
                  <Map
                 google={this.props.google}
                 zoom={8}
                 style={mapStyles}
                 initialCenter={{ lat:  this.state.breweries[1].latitude, lng: this.state.breweries[1].longitude}}
                 >
               <Marker position={{ lat: this.state.breweries[1].latitude, lng: this.state.breweries[1].longitude}} />
               </Map>
                 </div>
              )
              }else{
                  return(
                    <div>hello</div>
                  )
              }
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCe0VY_DYBJhtnHlKbOVnIcY3ZUkP7ZQ_4'
  })(Location);