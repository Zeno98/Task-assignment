import React from 'react'
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import "./AllVotes.css"

const AllVotes = ({
    votes
}) => {
    return (
        <div className='allvotes'>
            <div>
                <header className='heading'>All Votes</header>
                <div className='row'>
                <div className='column'>
                        <h2>Date</h2>
                        {
                            votes.map((items) => {
                                return (
                                    <>

                                        <p>{items.date},{items.time}</p>

                                    </>
                                )
                            })

                        }

                    </div>
                    <div className='column'>
                        <h2>Voter</h2>
                        {
                            votes.map((items) => {
                                return (
                                    <>

                                        <p>{items.name}</p>

                                    </>
                                )
                            })

                        }

                    </div>
                    <div className='column'>
                        <h2>Option</h2>
                        {
                            votes.map((items) => {
                                return (
                                    <>

                                     
                                        <p>{items.movie}</p>
                                        

                                    </>
                                )
                            })

                        }

                    </div>
                    <div className='column'>
                        <h2>points</h2>
                        {
                            votes.map((items) => {
                                return (
                                    <>

                                       
                                        <p>{items.point}</p>
                                      

                                    </>
                                )
                            })

                        }

                    </div>

                </div>
            </div>
            <LeaderBoard votes={votes} />
        </div>
    )
}

export default AllVotes;