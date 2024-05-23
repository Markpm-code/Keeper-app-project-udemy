// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />
      <h1 className='App'>My Contacts</h1>
      <Card name="Beyonce" img="https://hips.hearstapps.com/hmg-prod/images/beyonc-c3-a9-performs-onstage-during-the-opening-night-of-the-news-photo-1683746348.jpg?crop=1xw:1xh;center,top&resize=980:*" tel="123456" email="beyonce@gmail.com"/>
      <Card name="Bens" img= "./chicken-fried -rice.png" tel="0874303993" email="tito@gmail.com"/>
      <Card name="Manny Pacquaio" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cIAfCeR0w9Ws7VtIOKF6CCU1hFN3w_gSNSXRHte6gw&s" tel="0876719439" email="pac@gmail.com"/>
      <Footer />
    </div>
  );
}

export default App;
