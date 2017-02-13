let PLAYERS = [
{
  name: "AJ Twiss",
  score: 31,
  id: 1
},{
  name: "Arthur Twiss",
  score: 19,
  id: 2
},{
  name: "James Twiss",
  score: 41,
  id: 3
},
]


function Header(props){
  return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
};
//component for counter 

let Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return{
      score: this.props.initialScore
    }
  },
  incrementScore: function(e){
    console.log('increment', e);
    this.setState({
      score: (this.state.score + 1)
    })
  },
    deincrementScore: function(e){
    console.log('increment', e);
    this.setState({
      score: (this.state.score - 1)
    })
  },
  render: function(){
     return(
                <div className="counter">
                    <button className="counter-action decrement" onClick={this.deincrementScore}>-</button>
                    <div className="conter-score">{this.state.score}</div>
                    <button className="counter-action increment" onClick={this.incrementScore}>+</button>
                </div>
    )}
  });

function Player(props){
  return(
   
        <div className="player">

            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <div>
                    <Counter  Score={props.score}/>
                    
                </div>
            </div>
        </div>
    );
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
   score: React.PropTypes.number.isRequired
}
function Application(props) {
  return (
   <div className="scoreboard">
    <Header title={props.title}></Header>
        <div className="players">
                {props.players.map(function(player){
            return <Player name={player.name} score={player.score} key={player.id}/>;
          })}
        </div>
    </div>
  );
}
Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
}
Application.defaultProps ={
  title : "Scoreboard"
}
ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));