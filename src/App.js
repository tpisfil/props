import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastname="Doe" firstname="Jane" age={45} hair="black"/>
      <PersonCard lastname="Smith" firstname="John" age={88} hair="brown"/>
      <PersonCard lastname="Fillmore" firstname="Millard" age={50} hair="brown"/>
      <PersonCard lastname="Smith" firstname="Maria" age={62} hair="brown"/>
    </div>
  );
}

export default App;
