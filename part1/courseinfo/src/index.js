import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  const exercises = props.exercises

  var listItems = parts.map(parts => {
    return ( 
      <li> 
        {parts}: {exercises}
      </li>
    )
  })

  return(
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

const Total = (props) => {
    const exercises = props.exercises
    var total=0
    var i
    for(i=0;i<exercises.length;i++)total+=exercises[i]

    return(
      <div>
        Number of exercises: {total}
      </div>
    )
}

const App = () => {
  return (
    <div>
      <Header course='Half Stack application development' />
      <Content parts={['Fundamentals of React','Using props to pass data','State of a component']} exercises={[10,7,14]} />
      <Total exercises={[10,7,14]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))