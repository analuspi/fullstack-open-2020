import React from 'react'
import Part from './Part'

const Content = props => {
const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
    return (
        <>
           <Part part1 = {part1} exercise1 ={exercises1}/>
           <Part part1 = {part2} exercise2 ={exercises2}/>
           <Part part3 = {part3} exercise3 ={exercises3}/> 
        </>
    )
}

export default Content

