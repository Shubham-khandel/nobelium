import './App.css';
import './ImageChange/ImageRandom.css'
import { SignIn } from './RegestrationForm/signIn';
import {SignUp} from './RegestrationForm/signUp'
import {useState} from 'react'
import { Counter } from './counter/chracterLimit100';
import { ImageChange } from './ImageChange/imageChangeOnClick';

function App() {
  const [currentForm, setCurrentForm] = useState('signIn');
  
  function toggleForm(formName){
    setCurrentForm(formName)
  }
  return (
    <>
    <div className='App'>
      {/* <Counter/> */}
      {currentForm === 'signIn' ? <SignIn formStatus={toggleForm}/> : <SignUp formStatus={toggleForm}/>}
    </div>

    
      {/* <ImageChange/> */}
      </>
    
  );
}

export default App;
