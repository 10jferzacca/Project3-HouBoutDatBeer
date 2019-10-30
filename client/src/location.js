import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker, withScriptjs} from 'google-maps-react';


export class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            breweries: '',
            beer:''
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
          function showMap(position) {
            // Show a map centered at (position.coords.latitude, position.coords.longitude).
            console.log(position.coords.latitude);
            console.log(position.coords.longitude); 
          }
          // One-shot position request.
          navigator.geolocation.getCurrentPosition(showMap);

      }
      

    
    render(){
        const mapStyles = {
            width: '50%',  
            height: '50%',
          };
          

          if(this.state.breweries.length >= 1){
              return(
                  
                  <div>
                  <Map
                 google={this.props.google}
                 zoom={4}
                 style={mapStyles}
                 initialCenter={{ lat: 39.828175 , lng: -98.5795}}
                 >
               <Marker position={{ lat: this.state.breweries[1].latitude, lng: this.state.breweries[1].longitude}} />
               <Marker position={{lat:38.4276714, lng:-121.4246785}}/>


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