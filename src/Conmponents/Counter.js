import React from 'react'

const Counter = ({value = 0 ,  plus , minus , reset}) =>
<div>
    <span>{value}</span>
    <button
    onClick={plus}> + </button>
    <button
    onClick={minus}> - </button>
    <button
    onClick={reset}> Reset </button>
</div>

export default Counter;

// () => {dispatch({type:'plus'})}'
// () =>{dispatch({type:'minus'})}