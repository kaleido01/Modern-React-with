import React from 'react';
import{Field,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from "../../actions"


class StreamCreate extends React.Component{

  renderError({error,touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput=({input,label,meta})=>{
    const className=`field ${meta.error && meta.touched ? 'error':''}`
    return (
      <div className={className} >
      <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>

      </div>
    )
  }

  onSubmit=(formValues)=>{
    this.props.createStream(formValues)
  }


  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}className="ui form error">
      <Field name="title" component={this.renderInput} label="Enter title" />
      <Field name="description" component={this.renderInput} label="Enter description" />

      <button className="ui button primary">Submit</button>
      </form>
    )
  }

  
}

const validate=(formValues)=>{
  const errors={}
    if(!formValues.title){
      errors.title="you must enter a title"
    }
    if(!formValues.description){
      errors.description="you must enter a description"
    }

  return errors

}

//元の状態
// export default reduxForm({
//   form:'streamCreate',
//   validate
// })(StreamCreate)

// 変更後
// export default connect()(reduxForm({
//   form:'streamCreate',
//   validate
// })(StreamCreate))
// わかりやすくしたもの

const formWrapped= reduxForm({
  form:'streamCreate',
  validate
})(StreamCreate)

export default connect(null,{createStream})(formWrapped)