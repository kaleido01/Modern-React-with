import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/";

class UserHeader extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.userId)
  }

  render() {
    // この記述はひとつのユーザを探すために毎度やるのは面倒などでmapに直接書く
    // const user=this.props.users.find(user=>{
    //   //一つ目の引数はstateで保持しているリストの中のidそれを順にたどり送られてきたidと一致するものを探す。
    //   return user.id===this.props.userId
    
    // })
    const {user}=this.props
    if(!user){
      return null
    }
    return <div>{user.name}</div>;
  }
}

//propsはコンポーネント内でしか使えないので第二引数に入れておく
const mapStateToProps=(state,ownProps)=>{
  return {users:state.users.find(user=>user.id===ownProps.userId)}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);
