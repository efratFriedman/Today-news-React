import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar/>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
