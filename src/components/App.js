import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar';
class App extends React.Component{

  state={images:[]}

   onSearchSubmit=async (term)=>{

    const response=await unsplash.get("/search/photos",
    {
      params:{query:term},


    })
    //非同期処理、promise
    // .then(response=>{
    //   console.log(response.data.results)
    // })
   
    
  this.setState({images:response.data.results}) 

  }

  render(){
  return (
    
  <div className="container mt-5">
    <SearchBar onSubmit={this.onSearchSubmit}/>
    Found:{this.state.images.length} images
  </div>
  
  )
}
}


export default App