import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const PopularAnecdote = ({popular, anecdotes}) => {
  if(popular===-1) return <div>no votes have been made yet</div>
  else return (
    <div>{anecdotes[popular]}</div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [popular, setPopular] = useState(-1)

  const selectRandomAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)

    var max = 0
    var i
    for(i=0;i<copy.length;i+=1)
    {
      if(copy[i]>copy[max])max=i
    }

    setPopular(max)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={voteForAnecdote} votes={votes}>vote</button>
        <button onClick={selectRandomAnecdote}>next anecdote</button>
      </p>
      <PopularAnecdote popular={popular} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)