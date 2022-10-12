import React from 'react'
import './Cell.css'
import ladder from './ladder.png'
import snake from './snake.png'
import {snakePositions,ladderPositions} from './SnakeAndLadderPositions'

const Cell = (props) => {
  let isSnake = false
  snakePositions.forEach(snake =>{
    if(snake.currentPosition === props.value){
      isSnake = true
    }
  })
  ladderPositions.forEach(ladder =>{
    if(ladder.currentPosition === props.value){
      isLadder = true
    }
  })


  return (
    <div className="snake-ladder-cell">
      <div className='cell-value'> {props.value}</div>
      <div className='cell-desc'>
        { isSnake &&
        <div className='ladder-desc'>
          <img className='ladder-img' src={ladder} alt='ladder img'/>
          <p>2-27</p>
        </div> }
        {isLadder && 
        <div className='snake-desc'>
          <img className='snake-img' src={snake} alt='snake img'/>
          <p>2-27</p>
        </div>
        }
        <p>P1</p>
        <p>P2</p>
      </div>
    </div>
  )
}

export default Cell