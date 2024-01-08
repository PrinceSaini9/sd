import React from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import { MyProvider } from './Context/Context';


const App = () => {
  

  return (
    <MyProvider >
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;
