import React from 'react';


class SearchBar extends React.Component{

  onInputChange(event){
    console.log(event.target.value)
  }

  render(){
    return (
      <div className="ui segment">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input onChange={this.onInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
        </form>

      </div>
      )
  }

}

export default SearchBar