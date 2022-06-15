import { Component } from 'react'
import { PropTypes } from 'prop-types'
import style from './Counter.module.css'




const Counter = (props)=>{
        return (
            <div>
                <p style={{color: "red"}} className={style.counter}>شمارنده : {props.count}</p>
                <button onClick={props.up} className={style.btn}>UP</button>
                <button onClick={props.down} className={style.btn}>Down</button>
                <button onClick={props.reset} className={style.btn}>Reset</button>
            </div>
        )
}

Counter.propTypes={
    up:PropTypes.func,
    down:PropTypes.func,
    reset:PropTypes.func,
}

// class Counter extends Component {

//     render(){

//         return (
//             <div>
//                 <p className="counter">شمارنده : {this.props.count}</p>
//                 <button className='btn'>UP</button>
//                 <button className='btn'>Down</button>
//                 <button className='btn'>Reset</button>
//             </div>
//         )
//     }
// }

Counter.defaultProps = {
    count:'0'
  }

export default Counter