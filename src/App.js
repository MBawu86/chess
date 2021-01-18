import './App.css'
// useEffect allows defining of variables in function components (mutabel variables) 
import React, {useState, useEffect, useRef} from 'react'
import ChessBoard from 'chessboardjsx'
import Chess, { chess } from 'chess.js'

const container = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center'
}
function App() {
// set fen rules for chess pieces mvt
  const [fen, setFen] = useState
  ('start')

  let game = useRef(null)

    useEffect(() => {
      game.current = new Chess()
    },[])

    const onDrop = ({sourceSquare, targetSquare}) => {
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare
      }) 
        //checks for illegal moves
        if(move === null) return 

        // provides the fen string
        setFen(game.current.fen())
    }

    
  return (
    <>
    {
        // game over?
        // is game.current null? no --> continue
        // && game_over = true --> then
        game.current && game.current.game_over() ? 
        <div style = {{textAlign: 'center'}}>
          <h1> GAME OVER </h1>
          <button>New Game</button>         
        </div>:
        <span></span>
      }
    <div className="App" style = {container}>
      
{/* allows chess.js to place positionals in state */}
      <ChessBoard position = {fen}
      onDrop = {onDrop}/> 
        </div>
        </>
  );
}

export default App;
