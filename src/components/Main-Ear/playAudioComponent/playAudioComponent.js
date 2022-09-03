import React from "react";
import "./playAudioComponent.css"
// import {BsFillPlayCircleFill} from "react-icons/bs"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Checkbox from '@mui/material/Checkbox';

const PlayAudioComponent = (props) => {
    const audioPlay = (arr)=> {
        const [first,second,third,fourth,fifth,sixth,seventh] = arr;
        // console.log(first.src,second.src,third.src);
        if(first){ playNote(first) } 
        if(second){ setTimeout(playNote,800, second) }
        if(third){ setTimeout(playNote,1200, third) }
        if(fourth){ setTimeout(playNote,1600, fourth) }
        if(fifth){ setTimeout(playNote,2000, fifth) }
        if(sixth){ setTimeout(playNote,2400, sixth) }
        if(seventh){ setTimeout(playNote,3000, seventh) }
        stopNote();
    }
    const playNote = (note)=> {note.play()}
    const stopNote = (note) =>{ if(note) {note.pause()}}

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

    return (
    <section className="excercise-page"> 
        <h3 className="exercise-h3"> {props.exName ? `${props.exName}`:`${props.exNameString}`} </h3>
            <article className="exercise-content"> 
                {/* <div onClick={() => audioPlay (props.notes)} className="exercise-button-container"> <BsFillPlayCircleFill id="button" /> </div> */}
                <div onClick={() => audioPlay (props.notes)} className="exercise-button-container"> <PlayCircleIcon id="button" /> </div>
                <p className="excercise-p">Check the answer</p>
                <Checkbox {...label} />   
            </article>     
    </section>
    )
}
export default PlayAudioComponent;