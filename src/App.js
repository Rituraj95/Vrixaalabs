import Navbar from './components/Navbar'
import Maincontent1 from './components/Maincontent1';
import Maincontent3 from './components/Maincontent3';
import Maincontent2 from './components/Maincontent2/Maincontent2';


import Page3 from './components/Page3';
import Footer from './components/Footer'



import './App.css'



function App() {
  return (
    <>
 
    <div className="App">
      <Navbar></Navbar>
      
      <Maincontent1></Maincontent1>
      <Maincontent2></Maincontent2>
      <Page3></Page3>
     <Maincontent3></Maincontent3>
     <Footer></Footer>
   
    
      
      
      
    </div>

       </>
  );
}

export default App;
