import logo from './logo.svg';
import './App.css';
import CustomButton from './components/Button/CustomButton';
import '../src/components/Button/Styles.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton message="Click mee !" className="btn-style"/>
      </header>
    </div>
  );
}

export default App;
