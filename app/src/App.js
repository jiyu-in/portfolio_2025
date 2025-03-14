import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Main from './page/Main';
import Cursor from './components/Cursor';
import Header from './components/Header';
import CircleComponent from "./components/CircleComponent";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AnimatePresence>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="App">
        <Cursor/>
        <Header/>
        <Main />
        <CircleComponent/>
    </div>
      )}
    </AnimatePresence>
    // <div className="App">
    // <Cursor/>
    // <Header/>
    // <Main />
    // <CircleComponent/>
// </div>
      
  );
}

export default App;

