import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return(
  <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
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

const Total = ({parts}) => {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))