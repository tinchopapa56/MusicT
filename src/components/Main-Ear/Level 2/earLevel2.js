import "./earLevel2.css"
import {fullScale} from "../majorScale"
import PlayAudioComponent from "../playAudioComponent/playAudioComponent";
import GridComponent from "../GridComponent"


const EarLevel2 = () => {
    const {doo, re , mi, fa} = fullScale;
     const doNote = new Audio(doo);
     const reNote = new Audio(re);
     const miNote = new Audio(mi);
     const faNote = new Audio(fa);
    
    return (
        <main className="ear1-main-container"> 
        <PlayAudioComponent notes={[doNote]} exName="Root note: DO" />
            
            <h2 className="h2-subtitle"> Starting with Do </h2>
            <GridComponent first={[doNote,reNote,miNote,faNote]} 
                            second={[doNote,reNote,faNote,miNote]} 
                            third={[doNote,miNote,reNote,faNote]} 
                            fourth={[doNote,miNote,faNote,reNote]} 
                            fifth={[doNote,faNote,miNote,reNote]} 
                            sixth={[doNote,faNote,reNote,miNote]} 
            />
            <h2 className="h2-subtitle"> Starting with Re </h2>
            <GridComponent first={[reNote,doNote,miNote,faNote]} 
                            second={[reNote,doNote,faNote,miNote]} 
                            third={[reNote,miNote,doNote,faNote]} 
                            fourth={[reNote,miNote,doNote,faNote]} 
                            fifth={[reNote,faNote,miNote,doNote]} 
                            sixth={[reNote,faNote,doNote,miNote]} 
            />
            <h2 className="h2-subtitle"> Starting with Mi </h2>
            <GridComponent first={[miNote,reNote,doNote,faNote]} 
                            second={[miNote,reNote,faNote,doNote]} 
                            third={[miNote,doNote,reNote,faNote]} 
                            fourth={[miNote,doNote,reNote,faNote]} 
                            fifth={[miNote,faNote,doNote,reNote]} 
                            sixth={[miNote,faNote,reNote,doNote]} 
            />
            <h2 className="h2-subtitle"> Starting with Fa </h2>
            <GridComponent first={[faNote,reNote,miNote,doNote]}
                            second={[faNote,reNote,doNote,miNote]} 
                            third={[faNote,miNote,reNote,doNote]} 
                            fourth={[faNote,miNote,reNote,doNote]} 
                            fifth={[faNote,doNote,miNote,reNote]} 
                            sixth={[faNote,doNote,reNote,miNote]} 
            />
            {/* <h2 className="h2-subtitle"> Starting with Mi </h2>
            <div className= "main-grid">
                <PlayAudioComponent notes={[doNote,reNote,miNote,faNote]} exName="1)DO-re-mi-fa"/>
                <PlayAudioComponent notes={[doNote,reNote,faNote,miNote]} exName="2)DO-re-fa-mi"/>
                <PlayAudioComponent notes={[doNote,miNote,reNote,faNote]} exName="3)DO-mi-re-fa"/>
                <PlayAudioComponent notes={[doNote,miNote,reNote,faNote]} exName="4)DO-mi-fa-re"/>
                <PlayAudioComponent notes={[doNote,faNote,miNote,reNote]} exName="5)DO-fa-mi-re"/>
                <PlayAudioComponent notes={[doNote,faNote,reNote,miNote]} exName="6)DO-fa-re-mi"/> 
            </div>
                 <h2 className="h2-subtitle"> Starting with Mi </h2>
            <div className= "main-grid">
                <PlayAudioComponent notes={[reNote,doNote,miNote,faNote]} exName="1)RE-do-mi-fa"/>
                <PlayAudioComponent notes={[reNote,doNote,faNote,miNote]} exName="2)RE-do-fa-mi"/>
                <PlayAudioComponent notes={[reNote,miNote,doNote,faNote]} exName="3)RE-mi-do-fa"/>
                <PlayAudioComponent notes={[reNote,miNote,faNote,doNote]} exName="4)RE-mi-fa-do"/>
                <PlayAudioComponent notes={[reNote,faNote,miNote,doNote]} exName="5)RE-fa-mi-do"/>
                <PlayAudioComponent notes={[reNote,faNote,doNote,miNote]} exName="6)RE-fa-do-mi"/>
            </div>
            <h2 className="h2-subtitle"> Starting with Mi </h2>
            <div className= "main-grid">
                <PlayAudioComponent notes={[miNote,doNote,reNote,faNote]} exName="1)MI-do-re-fa"/>
                <PlayAudioComponent notes={[miNote,doNote,faNote,reNote]} exName="2)MI-do-fa-re"/>
                <PlayAudioComponent notes={[miNote,reNote,doNote,faNote]} exName="3)MI-re-do-fa"/>
                <PlayAudioComponent notes={[miNote,reNote,faNote,doNote]} exName="4)MI-re-fa-do"/>
                <PlayAudioComponent notes={[miNote,faNote,reNote,doNote]} exName="5)MI-fa-re-do"/>
                <PlayAudioComponent notes={[miNote,faNote,doNote,reNote]} exName="6)MI-fa-do-re"/>
            </div>
                <h2 className="h2-subtitle"> Starting with Fa </h2> 
            <div className= "main-grid">
                <PlayAudioComponent notes={[faNote,doNote,miNote,reNote]} exName="1)FA-do-mi-re"/>
                <PlayAudioComponent notes={[faNote,doNote,reNote,miNote]} exName="2)FA-do-re-mi"/>
                <PlayAudioComponent notes={[faNote,miNote,doNote,reNote]} exName="3)FA-mi-do-re"/>
                <PlayAudioComponent notes={[faNote,miNote,reNote,doNote]} exName="4)FA-mi-re-do"/>
                <PlayAudioComponent notes={[faNote,reNote,miNote,doNote]} exName="5)FA-re-mi-do"/>
                <PlayAudioComponent notes={[faNote,reNote,doNote,miNote]} exName="6)FA-re-do-mi"/>
            </div>
             */}
        </main>
    )
}
export default EarLevel2