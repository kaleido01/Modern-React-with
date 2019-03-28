import React from 'react';


class SearchBar extends React.Component{


  render(){
    return (
      <div className="ui segment">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input onChange={(e)=> console.log(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
        </form>

      </div>
      )
  }

}

export default SearchBar