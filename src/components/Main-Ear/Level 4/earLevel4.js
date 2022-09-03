import "./earLevel4.css"
import {fullScale} from "../majorScale"
import PlayAudioComponent from "../playAudioComponent/playAudioComponent";
import GridComponent from "../GridComponent"


const EarLevel4 = () => {
    const {doo, re , mi, fa, sol, la, si} = fullScale;
     const doNote = new Audio(doo);
     const reNote = new Audio(re);
     const miNote = new Audio(mi);
     const faNote = new Audio(fa);
     const solNote = new Audio(sol);
     const laNote = new Audio(la);
     const siNote = new Audio(si);
    
return (
  <main className="ear4-main-container"> 
        <h2 className="h2-comingsoon">Full version of this level coming soon!</h2>
        <PlayAudioComponent notes={[doNote]} exName="Root note: DO" />
       
        <h2 className="h2-subtitle"> Do re mi fa ...(sol la si) </h2>
            <GridComponent first={[doNote,reNote,miNote,faNote,solNote,laNote,siNote]} 
                           second={[doNote,reNote,miNote,faNote,solNote,siNote,laNote]} 
                           third={[doNote,reNote,miNote,faNote,laNote,solNote,siNote]} 
                           fourth={[doNote,reNote,miNote,faNote,laNote,siNote,solNote]} 
                           fifth={[doNote,reNote,miNote,faNote,siNote,solNote,laNote]} 
                           sixth={[doNote,reNote,miNote,faNote,siNote,laNote,solNote]} 
            />
        <h2 className="h2-subtitle"> Do re mi sol...</h2>
            <GridComponent first={[doNote,reNote,miNote,solNote,faNote,laNote,siNote]} 
                           second={[doNote,reNote,miNote,solNote,faNote,siNote,laNote]} 
                           third={[doNote,reNote,miNote,solNote,laNote,faNote,siNote]} 
                           fourth={[doNote,reNote,miNote,solNote,laNote,siNote,faNote]} 
                           fifth={[doNote,reNote,miNote,solNote,siNote,faNote,laNote]} 
                           sixth={[doNote,reNote,miNote,solNote,siNote,laNote,faNote]} 
            />
        <h2 className="h2-subtitle"> Do re mi la</h2>
            <GridComponent first={[doNote,reNote,miNote,laNote,solNote,faNote,siNote]} 
                           second={[doNote,reNote,miNote,laNote,solNote,siNote,faNote]} 
                           third={[doNote,reNote,miNote,laNote,faNote,solNote,siNote]} 
                           fourth={[doNote,reNote,miNote,laNote,faNote,siNote,solNote]} 
                           fifth={[doNote,reNote,miNote,laNote,siNote,solNote,faNote]} 
                           sixth={[doNote,reNote,miNote,laNote,siNote,faNote,solNote]} 
            />
        <h2 className="h2-subtitle"> Do re mi si...</h2>
        <GridComponent first={[doNote,reNote,miNote,siNote,solNote,laNote,faNote]} 
                       second={[doNote,reNote,miNote,siNote,solNote,faNote,laNote]} 
                       third={[doNote,reNote,miNote,siNote,laNote,solNote,faNote]} 
                       fourth={[doNote,reNote,miNote,siNote,laNote,faNote,solNote]} 
                       fifth={[doNote,reNote,miNote,siNote,faNote,solNote,laNote]} 
                       sixth={[doNote,reNote,miNote,siNote,faNote,laNote,solNote]} 
        />
  </main>
    )
}
export default EarLevel4