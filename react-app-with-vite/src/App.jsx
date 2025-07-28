import { useState, createContext, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link , createBrowserRouter , RouterProvider } from "react-router-dom";

import ControlledComponent from './Components/ControlledComponent';
import UnControlledComponent from './Components/UnControlledComponent';
import FormHandling from "./Components/FormHandling";
import FormHandlingWithValidations from "./Components/FormHandlingWithValidations";
import UniversityFormHandlingWithValidations from "./Components/UniversityFormHandlingWithValidations";
import NoMatch from "./Routing/NoMatch";
import Home from "./Components/Home";
import ProfileRouting from "./Routing/ProfileRouting";
import UseFetchCustomHook from "./Components/UseFetchCustomHook";
import AboutUs from "./Components/AboutUs";
import DashBoard from "./Routing/DashBoard";
import ParentComponent from "./Routing/ParentComponent";
import ChildComponent from "./Routing/ChildComponent";
import DummyLogin from "./Components/DummyLogin";
import FashionHomePage from "./Components/FashionHomePage";
import Fashion from "./Components/Fashion";
import MensFashion from "./Components/MensFashion";
import WomensFashion from "./Components/WomensFashion";
import KidsFashion from "./Components/KidsFashion";
import Electronics from "./Components/Electronics";
import HomeAppliances from "./Components/HomeAppliances";
import CommercialAppliances from "./Components/CommercialAppliances";
import AppHome from "./Components/AppHome";
import HomeComponent from "./Components/HomeComponent";
import ProfileComponent from "./Components/ProfileComponent";
import { RootLayout } from "./Routing/RootLayout";

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
// Optional Lazy Component (uncomment if needed)
const AboutUsLazyComponent = lazy(() =>
  import("./Routing/AboutUsLazyComponent")
);
const withSuspense=(Component)=>(
  
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
);


// ROUTER SETUP
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <FormHandling />,
      },
      {
        path: "controlled",
        element: <ControlledComponent />,
      },
      {
        path: "dummylogin",
        element: <DummyLogin />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutus/lazycomponent",
        element: withSuspense(AboutUsLazyComponent),
        // (
        //   <Suspense fallback={<p>Loading lazy component...</p>}>
        //     <AboutUsLazyComponent />
        //   </Suspense>
        // ),
      },
    ],
  },
]);

function App() {
  
  

  // const AboutUsLazyComponent = lazy(()=>import("./Routing/AboutUsLazyComponent"))
  // const LazyComponent = lazy(() => import("./Routing/LazyComponent"));


  // const fib = fibSeries(10);
  //  const [count, setCount] = useState(0);

  // const increment = useCallback(() => {
  //   console.log("Hello from callback");
  //   setCount(prev => prev + 1);
  // }, []);
  return (
    <> 
    <RouterProvider router={router}/>
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
      <UniversityFormHandlingWithValidatAions /> */}

     
      {/* <BrowserRouter>
        <div className="main-app-wrapper">
          
          <Suspense fallback={<h3>Loading.....</h3>}>
          <Routes> */}
            {/* <Route path="/" element={<Home />} />
          <Route path="/profileRouting" element={<ProfileRouting />}></Route>
          <Route
            path="/useFetchCustomHook"
            element={<UseFetchCustomHook />}
          ></Route> */}

            {/* <Route path="/formHandling" element={<FormHandling />} />
          <Route
            path="/universityForm"
            element={<UniversityFormHandlingWithValidations />}
          />
          <Route path="/about/:userName/:userId" element={<AboutUs />} />

          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="parent" element={<ParentComponent />} />
            <Route path="child" element={<ChildComponent />} />
          </Route> */}
            {/* <Route path="/" element={<AppHome />} /> */}
            {/* <Route path="/dummylogin" element={<DummyLogin />} />
            <Route path="/home" element={<Home />} />

            
            <Route path="/fashion/homepage" element={<FashionHomePage />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/fashion/men" element={<MensFashion />} />
            <Route path="/fashion/women" element={<WomensFashion />} />
            <Route path="/fashion/kids" element={<KidsFashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/electronics/home" element={<HomeAppliances />} />
            <Route
              path="/electronics/commercial"
              element={<CommercialAppliances />}

            /> */}
            {/* <Route path="lazycomponent" element={<LazyComponent/>}/> */}
            {/* <Route path="/homecomponent" element={<HomeComponent/>}/>
            <Route path = "/profilecomponent" element ={<ProfileComponent/>}/>
            <Route path="/aboutus/lazycomponent" element={<AboutUsLazyComponent/>}/> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
{/* 
          </Routes>
          </Suspense> */}

          {/* <Link to="/formHandling">FormHandling</Link>
        <br />
        <Link to="/universityForm">University Form Validations</Link>
        <br />
        <Link to="/profileRouting">Profile Routing</Link>
        <br />
        <Link to="/useFetchCustomHook">Custom Hook </Link>
        <br />
        <Link to="/about/himanshi/101">AboutUs</Link>
        <br />
        <Link to="/dashboard">DashBoard</Link> */}
        {/* <Link to="/lazycomponent">Lazy Component</Link> */}
        {/* <Link to ="/homecomponent">Home Component</Link><br/>
        <Link to ="/profilecomponent">Profile Component</Link><br/>
        <Link to ="/aboutus/lazycomponent">About Us Lazy Component</Link>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
