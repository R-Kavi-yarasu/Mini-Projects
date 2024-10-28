import React, { useReducer } from 'react'

export default function UseReducerHook() {

  const initialData = {
    Name:"",
    Email:"",
    Phone:""
  }

  function reducer(state,action){
    if(action.type === "text"){
      return{
        ...state,
        [action.field]:action.payload
      }
    }
    else{
      return state;
    }
  }


  const [state,dispatch] = useReducer(reducer,initialData)

  function handleChangeText(e){
    const {name,value} = e.target

    dispatch({
      type:'text',
      field:name,
      payload:value
    })
  }
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name="Name" value={state.Name} onChange={handleChangeText} id="" />
      <label htmlFor="">Email</label>
      <input type="text" name="Email" value={state.Email} onChange={handleChangeText} id="" />
      <label htmlFor="">Phone</label>
      <input type="text" name="Phone" value={state.Phone} onChange={handleChangeText} id="" />

      <h1>
        Name : {state.Name} <br /> <br />
        Email : {state.Email} <br /> <br />
        Phone : {state.Phone} <br /> <br />
      </h1>
    </div>
  )
}
