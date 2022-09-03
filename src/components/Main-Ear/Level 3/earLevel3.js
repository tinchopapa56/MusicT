import {useState} from "react";
import "./earLevel3.css"
import {fullScale} from "../majorScale"
import PlayAudioComponent from "../playAudioComponent/playAudioComponent";
import GridComponent from "../GridComponent";
import React from "react";


const EarLevel3 = () => {
    const {doo, re , mi, sol, la} = fullScale;
     const doNote = new Audio(doo);
     const reNote = new Audio(re);
     const miNote = new Audio(mi);
     const solNote = new Audio(sol);
     const laNote = new Audio(la);
    
    const doPage = 
        <div> 
        <h2 className="h2-subtitle"> Do-re ...(mi,fa,sol,la) </h2>
            <GridComponent first={[doNote,reNote,miNote,solNote,laNote]} 
                            second={[doNote,reNote,miNote,laNote, solNote]} 
                            third={[doNote,reNote,solNote,miNote,laNote]} 
                            fourth={[doNote,reNote,solNote,laNote,miNote]} 
                            fifth={[doNote,reNote,laNote,solNote,miNote]} 
                            sixth={[doNote,reNote,laNote,miNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Do-mi ...</h2>
            <GridComponent first={[doNote,miNote,reNote,solNote,laNote]} 
                            second={[doNote,miNote,reNote,laNote, solNote]} 
                            third={[doNote,miNote,solNote,reNote,laNote]} 
                            fourth={[doNote,miNote,solNote,laNote,reNote]} 
                            fifth={[doNote,miNote,laNote,solNote,reNote]} 
                            sixth={[doNote,miNote,laNote,reNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Do-sol </h2>
            <GridComponent first={[doNote,solNote,miNote,reNote,laNote]} 
                            second={[doNote,solNote,miNote,laNote,reNote]} 
                            third={[doNote,solNote,reNote,miNote,laNote]} 
                            fourth={[doNote,solNote,reNote,laNote,miNote]} 
                            fifth={[doNote,solNote,laNote,reNote,miNote]} 
                            sixth={[doNote,solNote,laNote,miNote,reNote]} 
            />
            <h2 className="h2-subtitle"> Do-la </h2>
            <GridComponent first={[doNote,laNote,miNote,solNote,reNote]} 
                            second={[doNote,laNote,miNote,reNote, solNote]} 
                            third={[doNote,laNote,solNote,miNote,reNote]} 
                            fourth={[doNote,laNote,solNote,reNote,miNote]} 
                            fifth={[doNote,laNote,reNote,solNote,miNote]} 
                            sixth={[doNote,laNote,reNote,miNote,solNote]} 
            />
        </div>

    const rePage = 
        <div> 
            <h2 className="h2-subtitle"> Re-do ...(mi,fa,sol,la) </h2>
            <GridComponent first={[reNote,doNote,miNote,solNote,laNote]} 
                            second={[reNote,doNote,miNote,laNote, solNote]} 
                            third={[reNote,doNote,solNote,miNote,laNote]} 
                            fourth={[reNote,doNote,solNote,laNote,miNote]} 
                            fifth={[reNote,doNote,laNote,solNote,miNote]} 
                            sixth={[reNote,doNote,laNote,miNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Re-mi ...</h2>
            <GridComponent first={[reNote,miNote,doNote,solNote,laNote]} 
                            second={[reNote,miNote,doNote,laNote, solNote]} 
                            third={[reNote,miNote,solNote,doNote,laNote]} 
                            fourth={[reNote,miNote,solNote,laNote,doNote]} 
                            fifth={[reNote,miNote,laNote,solNote,doNote]} 
                            sixth={[reNote,miNote,laNote,doNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Re-sol </h2>
            <GridComponent first={[reNote,solNote,miNote,doNote,laNote]} 
                            second={[reNote,solNote,miNote,laNote,doNote]} 
                            third={[reNote,solNote,doNote,miNote,laNote]} 
                            fourth={[reNote,solNote,doNote,laNote,miNote]} 
                            fifth={[reNote,solNote,laNote,doNote,miNote]} 
                            sixth={[reNote,solNote,laNote,miNote,doNote]} 
            />
            <h2 className="h2-subtitle"> Re-la </h2>
            <GridComponent first={[reNote,laNote,miNote,solNote,doNote]} 
                            second={[reNote,laNote,miNote,doNote,solNote]} 
                            third={[reNote,laNote,solNote,miNote,doNote]} 
                            fourth={[reNote,laNote,solNote,doNote,miNote]} 
                            fifth={[reNote,laNote,doNote,solNote,miNote]} 
                            sixth={[reNote,laNote,doNote,miNote,solNote]} 
            />
        </div>
    
    const miPage = 
        <div> 
        <h2 className="h2-subtitle"> Mi-do ...(mi,fa,sol,la) </h2>
            <GridComponent first={[miNote,doNote,reNote,solNote,laNote]} 
                            second={[miNote,doNote,reNote,laNote, solNote]} 
                            third={[miNote,doNote,solNote,reNote,laNote]} 
                            fourth={[miNote,doNote,solNote,laNote,reNote]} 
                            fifth={[miNote,doNote,laNote,solNote,reNote]} 
                            sixth={[miNote,doNote,laNote,reNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Mi-re ...</h2>
            <GridComponent first={[miNote,reNote,doNote,solNote,laNote]} 
                            second={[miNote,reNote,doNote,laNote, solNote]} 
                            third={[miNote,reNote,solNote,doNote,laNote]} 
                            fourth={[miNote,reNote,solNote,laNote,doNote]} 
                            fifth={[miNote,reNote,laNote,solNote,doNote]} 
                            sixth={[miNote,reNote,laNote,doNote,solNote]} 
            />
            <h2 className="h2-subtitle"> Mi-sol </h2>
            <GridComponent first={[miNote,solNote,reNote,doNote,laNote]} 
                            second={[miNote,solNote,reNote,laNote,doNote]} 
                            third={[miNote,solNote,doNote,reNote,laNote]} 
                            fourth={[miNote,solNote,doNote,laNote,reNote]} 
                            fifth={[miNote,solNote,laNote,doNote,reNote]} 
                            sixth={[miNote,solNote,laNote,reNote,doNote]} 
            />
            <h2 className="h2-subtitle"> Mi-la </h2>
            <GridComponent first={[miNote,laNote,reNote,solNote,doNote]} 
                            second={[miNote,laNote,reNote,doNote,solNote]} 
                            third={[miNote,laNote,solNote,reNote,doNote]} 
                            fourth={[miNote,laNote,solNote,doNote,reNote]} 
                            fifth={[miNote,laNote,doNote,solNote,reNote]} 
                            sixth={[miNote,laNote,doNote,reNote,solNote]} 
            />
        </div>

    const solPage = 
        <div> 
        <h2 className="h2-subtitle"> sol-do ...(mi,fa,sol,la) </h2>
            <GridComponent first={[solNote,doNote,miNote,reNote,laNote]} 
                            second={[solNote,doNote,miNote,laNote, reNote]} 
                            third={[solNote,doNote,reNote,miNote,laNote]} 
                            fourth={[solNote,doNote,reNote,laNote,miNote]} 
                            fifth={[solNote,doNote,laNote,reNote,miNote]} 
                            sixth={[solNote,doNote,laNote,miNote,reNote]} 
            />
            <h2 className="h2-subtitle"> sol-do ...</h2>
            <GridComponent first={[solNote,miNote,doNote,reNote,laNote]} 
                            second={[solNote,miNote,doNote,laNote, reNote]} 
                            third={[solNote,miNote,reNote,doNote,laNote]} 
                            fourth={[solNote,miNote,reNote,laNote,doNote]} 
                            fifth={[solNote,miNote,laNote,reNote,doNote]} 
                            sixth={[solNote,miNote,laNote,doNote,reNote]} 
            />
            <h2 className="h2-subtitle"> sol-sol </h2>
            <GridComponent first={[solNote,reNote,miNote,doNote,laNote]} 
                            second={[solNote,reNote,miNote,laNote,doNote]} 
                            third={[solNote,reNote,doNote,miNote,laNote]} 
                            fourth={[solNote,reNote,doNote,laNote,miNote]} 
                            fifth={[solNote,reNote,laNote,doNote,miNote]} 
                            sixth={[solNote,reNote,laNote,miNote,doNote]} 
            />
            <h2 className="h2-subtitle"> sol-la </h2>
            <GridComponent first={[solNote,laNote,miNote,reNote,doNote]} 
                            second={[solNote,laNote,miNote,doNote,reNote]} 
                            third={[solNote,laNote,reNote,miNote,doNote]} 
                            fourth={[solNote,laNote,reNote,doNote,miNote]} 
                            fifth={[solNote,laNote,doNote,reNote,miNote]} 
                            sixth={[solNote,laNote,doNote,miNote,reNote]} 
            />
        </div>

    const laPage = 
        <div> 
        <h2 className="h2-subtitle"> la-do ...(mi,fa,sol,re) </h2>
            <GridComponent first={[laNote,doNote,miNote,solNote,reNote]} 
                            second={[laNote,doNote,miNote,reNote,solNote]} 
                            third={[laNote,doNote,solNote,miNote,reNote]} 
                            fourth={[laNote,doNote,solNote,reNote,miNote]} 
                            fifth={[laNote,doNote,reNote,solNote,miNote]} 
                            sixth={[laNote,doNote,reNote,miNote,solNote]} 
            />
            <h2 className="h2-subtitle"> la-mi ...</h2>
            <GridComponent first={[laNote,miNote,doNote,solNote,reNote]} 
                            second={[laNote,miNote,doNote,reNote, solNote]} 
                            third={[laNote,miNote,solNote,doNote,reNote]} 
                            fourth={[laNote,miNote,solNote,reNote,doNote]} 
                            fifth={[laNote,miNote,reNote,solNote,doNote]} 
                            sixth={[laNote,miNote,reNote,doNote,solNote]} 
            />
            <h2 className="h2-subtitle"> la-sol </h2>
            <GridComponent first={[laNote,solNote,miNote,doNote,reNote]} 
                            second={[laNote,solNote,miNote,reNote,doNote]} 
                            third={[laNote,solNote,doNote,miNote,reNote]} 
                            fourth={[laNote,solNote,doNote,reNote,miNote]} 
                            fifth={[laNote,solNote,reNote,doNote,miNote]} 
                            sixth={[laNote,solNote,reNote,miNote,doNote]} 
            />
            <h2 className="h2-subtitle"> La-re </h2>
            <GridComponent first={[laNote,reNote,miNote,solNote,doNote]} 
                            second={[laNote,reNote,miNote,doNote,solNote]} 
                            third={[laNote,reNote,solNote,miNote,doNote]} 
                            fourth={[laNote,reNote,solNote,doNote,miNote]} 
                            fifth={[laNote,reNote,doNote,solNote,miNote]} 
                            sixth={[laNote,reNote,doNote,miNote,solNote]} 
            />
        </div>
    
    const [page,setPage] = useState(doPage);
     
    const handlePage = (e) =>{
        const pageNumber = parseInt(e.target.innerText);
        const pages = [doPage,rePage,miPage,solPage,laPage]
        setPage(pages[pageNumber])
    }
    return ( 
        <main className="ear3-main-container">
            <nav className="ear3-main-nav"> 
                <h1> Major Pentatonic</h1>
                <ul className="ear3-ul"> 
                    <li onClick={handlePage} className="ear3-li">0</li>
                    <li onClick={handlePage} className="ear3-li">1</li>
                    <li onClick={handlePage} className="ear3-li">2</li>
                    <li onClick={handlePage} className="ear3-li">3</li>
                    <li onClick={handlePage} className="ear3-li">4</li>
                </ul>   
            </nav>
        <PlayAudioComponent notes={[doNote]} exName="Root note: DO" />
            {page}
        </main>
    )
}
export default EarLevel3