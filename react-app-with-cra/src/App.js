import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Component/Welcome";
import Greeting from "./Component/Greeting";
import PropsUsage from "./Component/PropsUsage";
import CheckPalindrome from "./Component/CheckPalindrome";
import Profile from "./Component/Profile";
import EventHandlerComponent from "./Component/EventHandlerComponent";
import ParentComponent from "./Component/ParentComponent";
import ParentArmstrong from "./Component/ParentArmstrong";
import ClassComponent from "./Component/ClassComponent";

function App() {
   const user1 = {
    name: "Himanshi Dafouty",
    age: 20,
    email: "himanshi@example.com",
    address: {
      city: "Delhi",
      state: "Delhi"
    },
    description: "GET at Qvantel"
  }
  const user2 = null;
   const user3 = {
    name: "Rishi",
    age: 20,
    email: "rishi@example.com",
    address: {
      city: "Dehradun",
      state: "Dehradun"
    },
 
  }
  // const empName = "Nancy";
  return <div className="App">
    {/* <h1>Welcome , {empName}</h1> */}
    {/* <Welcome name = {empName}/> */}
    {/* <Greeting isLoggedIn={true}/> */}
    {/* <PropsUsage name="Himanshi" course= "React"/> */}
    {/* <CheckPalindrome number = {1215} /> */}
    <Profile user={user1}/>
    <Profile user={user2}/>
    <Profile user= {user3}/>
    // {/* <EventHandlerComponent /> */}
    {/* <ParentComponent />
     */}
     {/* <ParentArmstrong /> */}
     {/* <ClassComponent /> */}
  </div>;
  
}

export default App;
