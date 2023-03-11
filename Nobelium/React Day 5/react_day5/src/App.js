import './App.css';
import { IncDec } from './counter';
import { ChangeName } from './onClickChange';
import { CInput } from './inputTask';

function App() {
  return (
  
    <div className="App">
      <CInput/>
      <IncDec/>
      <ChangeName/>
    </div>
  );
}

export default App;
