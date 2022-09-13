import './App.scss';
import MainPage from './components/mainPage/mainPage';
import TopBar from './components/topBar/topbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
