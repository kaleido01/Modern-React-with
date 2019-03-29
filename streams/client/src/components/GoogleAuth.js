import React from 'react';

class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load("client:auth2",()=>{
      window.gapi.client.init({
        clientId:"878215324116-74b8h2jr61lkk5udacjeg2cf4flssbc0.apps.googleusercontent.com",
        scope:"email"
      })
    })
  }

  render(){
    return <div>GoogleAuth</div>
  }

}


export default GoogleAuth