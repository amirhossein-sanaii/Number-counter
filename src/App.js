import { Component, useState } from 'react';

import Counter from './Component/Counter';
import './App.css';


const App = ()=>{
    const [state , setState] = useState(12)

    const upState = ()=>{
        setState(state+1)
    }

    const downState = ()=>{
        setState(state-1)
    }

    const resetState = ()=>{
        setState(state == 0)
    }


    return(
        <div className="App">
            <h1>شمارنده من</h1>
            <hr/>
            <Counter 
            count={state}
            up={upState}
            down={downState}
            reset={resetState}
            />
        </div>
    )
}


// class App extends Component {
//     state={
//         count : 0
//     }

//     ChangeState = ()=>{
//         let i = 0;
//         this.setState(
//             this.state={count: 71}
//         )
//     }
//     render(){
//         return(
//             <div className="App">
//                 <h1>شمارنده من</h1>
//                 <button onClick={this.ChangeState}  className='btn-up'>UP</button>
//                 <hr/>
//                 <Counter count={this.state.count}/>
//             </div>
//     )
//     }
// }

export default App;