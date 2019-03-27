import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component{
  
  state={lat:null,error:null}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({lat:position.coords.latitude})
      },
      (err)=>{
        this.setState({error:err.message})
      }
    )
    
  }


  render(){
    if(!this.state.error && !this.state.lat){
      return <div>loading</div>

    }
    if(!this.state.error){
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    else{
      return <div>error:{this.state.error}</div>
    }
  }
}


ReactDOM.render(

  <App />,
  document.querySelector("#root")

)