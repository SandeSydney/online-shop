import './App.css';
import ContentDisplay from './Components/ContentDisplay/ContentDisplay';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <ContentDisplay />
      <Footer/>
    </div>
  );
}

export default App;
