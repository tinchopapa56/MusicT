import "./earLevel1.css"
import {fullScale} from "../majorScale"
import PlayAudioComponent from "../playAudioComponent/playAudioComponent";


const EarLevel1 = () => {
    const {doo, re , mi} = fullScale;
     const doNote = new Audio(doo);
     const reNote = new Audio(re);
     const miNote = new Audio(mi);
    
    return (
        <main className="ear1-main-container"> 
        <PlayAudioComponent notes={[doNote]} exName="Here you have the Root note: DO" />
            <div className= "main-grid"> 
                <PlayAudioComponent notes={[doNote,reNote,miNote]} exName="1)DO-re-mi"/>
                <PlayAudioComponent notes={[doNote,miNote,reNote]} exName="2)DO-mi-re"/>
                <PlayAudioComponent notes={[reNote,doNote,miNote]} exName="3)RE-do-mi"/>
                <PlayAudioComponent notes={[reNote,miNote,doNote]} exName="4)RE-mi-do"/>
                <PlayAudioComponent notes={[miNote,reNote,doNote]} exName="5)MI-re-do"/>
                <PlayAudioComponent notes={[miNote,doNote,reNote]} exName="6)MI-do-re"/>
            </div>
        </main>
    )
}
export default EarLevel1