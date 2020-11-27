import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Grid } from '@material-ui/core';

const mapStyles = {
  width: '20%',
  height: '80%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    
     onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    };
   
  render() {

 
    return (
     <Grid>
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 39.9485971,
            lng: 32.6358043
            
          }
        }
      >
          
        <Marker
       onClick={this.onMarkerClick}
          name={'Gazi okçuluk spor kulübü'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCYe51yX3uNKnA75LxP091mhw8QHdZk07g'
})(MapContainer);