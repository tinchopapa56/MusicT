import React from "react";
import "./earLevelsHub.css"
import CardComponent from "./CardComponent/CardComponent";

export default function EarLevelsHub(){
    const imgA = "https://images2.imgbox.com/01/74/2ZLVx9UQ_o.jpg"
    const imgB = "https://www.concierto.cl/wp-content/uploads/2021/09/B.B.-King-768x432.jpeg"
    const imgC = "https://images2.imgbox.com/fd/40/uGnRP2Ig_o.jpg"
    const imgD = "https://images2.imgbox.com/b2/b8/pEkvTWJm_o.jpg" //CLAPTONA CUARELA
    return(
        <div className="mainEar-container"> 
        {/* <header className="mainEar-description">  */}
            <h3>The method for both types of training is the same: </h3>
        {/* </header> */}

         <section className="mainEar-grid"> 
            <CardComponent level="Level 1 (3 notes)" levelLink="/EarLevel1" img={imgC}           text="You journey begins"/>
            <CardComponent level="Level 2 (4 notes)" levelLink="/EarLevel2" img={imgB}           text="Playing around with the 4th"/>
            <CardComponent level="Level 3 (Major Pentatonic)" levelLink="/EarLevel3" img={imgA} text="The blues sound"/>
            <CardComponent level="Level 4 (Full major scale)" levelLink="/EarLevel4" img={imgD} text="The pop sound"/>
            <CardComponent level="Level 5 (Lydian scale)" levelLink="/RhyLevelsHub" img={imgC} text="Modal sound 1"/>
            <CardComponent level="Level 6 (Dorian scale)" levelLink="/RhyLevelsHub" img={imgB} text="Modal sound 2"/>
         </section>
        </div>
    )
}