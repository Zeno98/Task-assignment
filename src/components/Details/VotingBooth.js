import React from 'react'
import AllVotes from '../AllVotes/AllVotes';
import "./VotingBooth.css"

const VotingBooth = () => {
    const [name,setName]=React.useState("");
    const [point,setPoint]=React.useState("");
    const [movie,setMovie]=React.useState("");
    const [data,setData]=React.useState([]);
    const [btn,setBtn]=React.useState(false)

    const options=[ "The Office", "Trailer Park Boys", "Shrek", "Rick And Morty", "Brooklyn 99", "Parks and Recreation", "F.R.I.E.N.D.S", "Bojack Horseman"];

    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handlePoint=(e)=>{
        
        setPoint(e.target.value);
    }

    const handleOption=(e)=>{
        setMovie(e.target.value)

    }

    const handleSubmit=()=>{
        let today=new Date();
        let date =(today.getMonth()+1)+'/'+ today.getDate()+'/'+today.getFullYear();
        let time= today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()
        
        setData([...data,{
            name:name,
            point:point,
            movie:movie,
            date:date,
            time:time
        }])
        setBtn(true);

       

    }
  return (
    <div>
        <label htmlFor="name" id='names'>Your Name</label>
        <br />
        <input id='name' type="text" value={name} onChange={handleName} />
        <br />
        <br />

        <label htmlFor="points" id='point'>Points(1-100)</label>
        <br />
        <input id='points' type="number" max={100} min={1} value={point} onChange={handlePoint} />
        <br />
        <br />

        <label htmlFor="option" id='options'>Options</label>
        <br />
        <select name="movie" id="movie-name" onChange={handleOption}>
            {
                options.map((items,index)=>(
                    <option key={index} value={items} >
                        {items}
                    </option>
                ))

            }
        </select>
        <br />
        <br />
        <button id='btn' onClick={handleSubmit}>Give points!</button>

            {
                btn ? (
                <div className='allVote'>
                    <AllVotes votes={data}/>
                </div>
                    ) 
                    : ""
            }
        <br />
        <br />


    </div>
  )
}

export default VotingBooth;