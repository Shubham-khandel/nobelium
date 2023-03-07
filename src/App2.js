import './App2.css'
import { Btn, Heading, Input } from './Challenge2';

const headingtext = "Register here ..."
const btnText = "Submit"

function App2(){
    return(
        <div className='Box2'>
            <div className='App2'>
            <Heading hText = {headingtext}/>
            <Input/>
            <Btn bText = {btnText}/>
        </div>
        </div>
        
        
    );
}

export default App2