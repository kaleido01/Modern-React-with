import React from 'react';
import { connect } from 'react-redux';

import { signIn,signOut } from '../actions/index';


class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load("client:auth2",()=>{
      window.gapi.client.init({
        clientId:"878215324116-74b8h2jr61lkk5udacjeg2cf4flssbc0.apps.googleusercontent.com",
        scope:"email"
      }).then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange=(isSignedIn)=>{
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId())
    }else{
      this.props.signOut()
    }
  }


  onSignInClick=()=>{
    this.auth.signIn()
  }
  
  onSignOutClick=()=>{
    this.auth.signOut()
  }

  
  renderAuthButton(){

    if(this.props.isSignedIn===null){
      return null
    }else if(this.props.isSignedIn){
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon"></i>
        Sign Out
        </button>

      )
    }else{
      return (
        <button onClick={this.onSignInClick}className="ui red google button">
        <i className="google icon"></i>
        Sign In with Google
        </button>

      )
    }
  }

  render(){

    return <div>{this.renderAuthButton()}</div>
  }

}

const mapStatetoProps=(state)=>{
  return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStatetoProps,{signIn,signOut})(GoogleAuth)