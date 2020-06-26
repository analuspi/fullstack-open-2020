import React from 'react'

const Part = props => {
    return (
        <div>
            <p>
                {props.part1} {props.exercises1} 
                {props.part2} {props.exercises2}
                {props.part3} {props.exercises3}
            </p>
        
        </div>
    )
}

export default Part
