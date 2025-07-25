import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import ControlledComponent from './Components/ControlledComponent';
// import UnControlledComponent from './Components/UnControlledComponent';
import FormHandling from "./Components/FormHandling";
import FormHandlingWithValidations from "./Components/FormHandlingWithValidations";
import UniversityFormHandlingWithValidations from "./Components/UniversityFormHandlingWithValidations";
import NoMatch from "./Routing/NoMatch";
import Home from "./Components/Home";
// import UseFetchCustomHook from './Components/UseFetchCustomHook';
// import Counter from './Components/counter';
// import HookUseEffect from './Components/HookUseEffect';
// // import UseContextChildComponent from './Components/useContextChildComponent';
// import UseContextGrandChild from './Components/useContextGrandChild';
// import UseRefHook from './Components/useRefHook';
// import ChangeText from './Components/ChangeText';
// import Fibonacci from './Components/Fibonacci';
// import ChildUseCallback from './Components/ChildUseCallback';
// import { useCallback } from 'react';

// export const FibonacciContext = createContext();

// const fibSeries = (n) => {
//   const series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series;
// };

function App() {
  // const fib = fibSeries(10);
  //  const [count, setCount] = useState(0);

  // const increment = useCallback(() => {
  //   console.log("Hello from callback");
  //   setCount(prev => prev + 1);
  // }, []);
  return (
    <>
      {/* <Counter /> */}
      {/* <HookUseEffect /> */}
      {/* <childComponentContext.Provider value="Hey">
        <UseContextChildComponent />
        <UseContextGrandChild />
      </childComponentContext.Provider> */}
      {/* <UseRefHook /> */}
      {/* <FibonacciContext.Provider value={fib}>
        <Fibonacci />
      </FibonacciContext.Provider>
      <ChangeText />
      <h2>count : {count}</h2>
      <ChildUseCallback onhandleClick= {increment}/> */}
      {/* <UseFetchCustomHook /> */}
      {/* <ControlledComponent/>
      <UnControlledComponent/> */}
      {/* <FormHandling/>
      <FormHandlingWithValidations />
      <UniversityFormHandlingWithValidations /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/formHandling" element={<FormHandling />} />
          <Route
            path="/universityForm"
            element={<UniversityFormHandlingWithValidations />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Link to="/formHandling">FormHandling</Link>
        <br />
        <Link to="/universityForm">University Form Validations</Link>
      </BrowserRouter>
    </>
  );
}

export default App;
