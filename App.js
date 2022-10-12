import './App.css';
import Cell from './Cell';

function App() {
  const cellValues = new Array(100)
  for(let i=100;i>0;i--){
    cellValues.push(i)
  }

  return (
    <div>
        <h1 className='game-title'>Snake and Ladder Game</h1>
        <div className='snake-ladder-grid'>
          { cellValues.map(num => 
            <Cell value = {num}/>
          )}
        </div>
    </div>
  );
}

export default App;
