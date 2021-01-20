import EightBall from './EightBall'
import {eightBallAnswers} from './eightBallAnswers'
import './App.css';

function App() {
  return (
    <div className="App">
      <EightBall answers={eightBallAnswers}/>
    </div>
  );
}

export default App;
