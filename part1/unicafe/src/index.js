import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text })  => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = props => {
  const { good, bad, neutral, allClicks } = props
  const positive = good / allClicks.length
  if (allClicks.length === 0) {
    return <div>No feedback given</div>
  } else { return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={allClicks.length} />
        <Statistic
          text="average"
          value={allClicks.reduce((a, b) => a + b, 0) / allClicks.length}
        />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  )}
}




const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll ] = useState([])
  const positive = good/allClicks.length*100
   
  const handleGood = () => {
    setGood(good + 1)
    setAll(allClicks.concat(1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(0))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(-1))
  }

 

  return (
    <div>
      <h1>give feedback</h1>
      <Button text= "good"  handleClick={handleGood}/>
      <Button text= "neutral" handleClick={handleNeutral}/>
      <Button text= "bad" handleClick={handleBad}/>
      <h1>statistics</h1>
      <Statistics 
      neutral={neutral}
      good={good}
      bad={bad}
      allClicks={allClicks}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)