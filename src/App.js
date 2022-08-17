import './App.css';
import VotingBooth from './components/Details/VotingBooth';


function App() {
  return (
    <>
    <div className="App">
      <nav className='navbar'>
        <span className='left-side'>Task | Oyelabs</span>
        <span className='right-side'>
        <span>Info</span>
        <span>Task</span>
        </span>
      </nav>
      <div className='votingBooth'>
        <header id='voteHead'>Voting Booth</header>
      <VotingBooth/>
      </div>
      {/* <VotingBooth/> */}
    </div>

    </>
  );
}

export default App;
