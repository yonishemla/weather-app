import React from 'react';


import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "c9e3102e23a32b7b1e3c2fdd54a03259";

class App extends React.Component{
state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  humid: undefined,
  description: undefined,
  error: undefined
}
getWeather = async (e) =>{

 e.preventDefault();
 const city = e.target.elements.city.value;
 const country = e.target.elements.country.value;
 const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
 const data = await api_call.json();

 if (city && country){
 console.log(data);

this.setState({
  temp: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humid: data.main.humidity,
  description: data.weather[0].description,
  error:""
})
 } else {
   this.setState({
  temp: undefined,
  city: undefined,
  country: undefined,
  humid: undefined,
  description: undefined,
  error: "Please enter values"
  });
 }
}

render(){
  return (
    <div>
    <section class="titles" id="titles">
    <Titles />
    </section>
     
 <section class="form" id="form">
       <Form getWeather={this.getWeather}/>
      

       <Weather temp={this.state.temp}
         city={this.state.city}
         country={this.state.country}
         humid={this.state.humid}
         description={this.state.description}
         error={this.state.error}/>
     </section>
    </div>
  );
}
};




export default App;