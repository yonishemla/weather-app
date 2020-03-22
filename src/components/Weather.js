import React from 'react';

class Weather extends React.Component{
render(){
  return (
    <div className="weather__info">
    {
    this.props.city && this.props.country && <p className="weather__key">Location: 
    <span> {this.props.city}, {this.props.country}</span>
     </p>
    }
    {
    this.props.temp && <p className="weather__key">Temperature: 
    <span> {this.props.temp} (C)</span>
    </p>
    }
    {
    this.props.humid && <p className="weather__key">Humidity: 
    <span> {this.props.humid} (%)</span>
    </p>
    }
    {
    this.props.description && <p className="weather__key">Description: 
    <span> {this.props.description}</span>
    </p>
    }
    {
    this.props.error && <p className="weather__key">
    {this.props.error}
    </p>
    }
    </div>
  );
}
};

export default Weather;