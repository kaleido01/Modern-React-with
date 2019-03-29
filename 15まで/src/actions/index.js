import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
  
  //データを取得するまで先へ進まない
  await dispatch(fetchPosts())


  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value()

}


export const fetchPosts= () =>{
 
  return async function (dispatch,getState){
    const response=await jsonPlaceholder.get("/posts")
    dispatch({
      type:'FETCH_POSTS',
      payload:response.data}
      )  
  }
}

// export const fetchUser=id=>dispatch=>{
//   _fetchUser(id,dispatch)
  
// }

// const _fetchUser=_.memoize(
//   async  (id,dispatch)=>{
//     const response=await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({type:"FETCH_USER",payload:response.data})
// }
// )

//投稿文ユーザーフェッチを行う
export const fetchUser=(id)=>{
  
  return async function (dispatch,getstate){
    const response=await jsonPlaceholder.get(`/users/${id}`)

    dispatch({type:"FETCH_USER",payload:response.data})
}
}
