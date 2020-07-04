import React from 'react'
import Part from './Part'

const Content = props => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

    return (
        <>
           <Part part1 = {course.parts[0].name} exercise1 ={course.parts[0].exercises}/>
           <Part part2 = {course.parts[1].name} exercise2 ={course.parts[0].exercises}/>
           <Part part3 = {course.parts[2].name} exercise3 ={course.parts[0].exercises}/> 
        </>
    )
}

export default Content

