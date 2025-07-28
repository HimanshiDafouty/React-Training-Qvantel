const initialState={value:""}
const nameReducer=(state=initialState,action)=>{
switch(action.type)
{
    case "LOGIN":
        return {value:"Successfull Login"}
   
    default:
        return state


}
}
export default nameReducer