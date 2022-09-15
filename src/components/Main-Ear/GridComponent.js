import PlayAudioComponent from "./playAudioComponent/playAudioComponent";

const GridComponent = (props) => {  

    // const notesToString = (arrNotes) => {
    //     const notesToStringArr = [];
    //     const mapeo = arrNotes.map( (note)=> {
    //         let inString = note.src.slice(35,37); //"http://localhost:3000/static/media/do.431142ab83945428dc62.mp3"
    //         notesToStringArr.push(inString); 
    //     })
    //     const excerciseStrings = notesToStringArr.join()
    //     console.log(excerciseStrings);
    // return excerciseStrings;
    // }
    const notesToString = (arrNotes) => {
        const notesToStringArr = [];
        const mapeo = arrNotes.map( (note)=> {
            let inString = note.src.slice(52,54); //"http://localhost:3000/static/media/do.431142ab83945428dc62.mp3"
            notesToStringArr.push(inString); 
        })
        const excerciseStrings = notesToStringArr.join(" ")
        console.log(excerciseStrings);
    return excerciseStrings;
    }
        //Harcoded:
        const exNameString1 = notesToString(props.first);
        const exNameString2 = notesToString(props.second);
        const exNameString3 = notesToString(props.third);
        const exNameString4 = notesToString(props.fourth);
        const exNameString5 = notesToString(props.fifth);
        const exNameString6 = notesToString(props.sixth);

return (
    <div className= "main-grid">
        <PlayAudioComponent notes={props.first} exNameString={exNameString1} />
        <PlayAudioComponent notes={props.second} exNameString={exNameString2} />
        <PlayAudioComponent notes={props.third} exNameString={exNameString3} />
        <PlayAudioComponent notes={props.fourth} exNameString={exNameString4} />
        <PlayAudioComponent notes={props.fifth} exNameString={exNameString5} />
        <PlayAudioComponent notes={props.sixth} exNameString={exNameString6} />
    </div>
    )
}
export default GridComponent