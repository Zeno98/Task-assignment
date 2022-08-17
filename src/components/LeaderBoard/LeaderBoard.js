import React from 'react'
import "./LeaderBoard.css"

const LeaderBoard = ({votes}) => {
  let sumOffice=0;
  // const[sumTrailer,setSumTrailer]=React.useState(0);
  // const[sumShrek,setSumShrek]=React.useState(0);
  // const[sumRicky,setSumRicky]=React.useState(0);
  // const[sumBrooklyn,setSumBrooklyn]=React.useState(0);
  // const[sumParks,setSumParks]=React.useState(0);
  // const[sumFriends,setSumFriends]=React.useState(0);
  // const[sumBojack,setSumBojack]=React.useState(0);
  React.useEffect(()=>{
    votes.map((items)=>{
      if(items.movie=="The Office"){
        console.log(parseInt(items.point)+sumOffice)
      }
    })
  })
  return (
    <div>
     <header className='header'>Leaderboard</header>

      {
        votes.map((items) => {
          if(items.movie=="The Office"){
            console.log(items.point+sumOffice)
          }
      })
        
      }

    </div>
  )
}

export default LeaderBoard