import './App.scss';
import Header from './components/Header'
import Tabs from './components/Tabs'
import RecipeLists from './components/RecipeLists'
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists/>
      <Footer />
    </div>
  );
}

export default App;
