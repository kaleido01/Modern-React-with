import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
  renderContent() {
    
    if(!this.state.error && !this.state.lat){
      return <Spinner message="Please accept location request"/>

    }
    if(!this.state.error){
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    else{
      return <div>error:{this.state.error}</div>
    }
  }

  render(){
    return (
      <div className="border red">
        {this.renderContent()}
      </div>

    )

  }

}


ReactDOM.render(

  <App />,
  document.querySelector("#root")

)