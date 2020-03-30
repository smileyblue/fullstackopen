import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  var parts=props.parts.parts
  var listItems

  var listItems = parts.map(parts => {
    return(
      <li>
        {parts.name}: {parts.exercises}
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
  var parts=props.parts.parts
  var total=0

  var i=0
  for(i=0;i<parts.length;i++)total+=parts[i].exercises

  return(
    <div>
      Number of exercises: {total}
    </div>
  )
}

const App = () => {
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
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))