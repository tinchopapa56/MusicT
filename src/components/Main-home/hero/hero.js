import React from "react"
import "./hero.css"
import Clapton from"./clapton.jpg"

export default function Hero() {
    return (
        <main className="hero-container"> 
        <h1 className="hero-h1"> Build the real foundations of Music</h1>

        <article className="hero-2sections">
            <section className="hero-2sections-section1"> 
               <ul className="hero-list-ul">
                   <li className="hero-list-li">Forget sight-reading</li>
                   <li className="hero-list-li">Train like in Berklee</li>
                   <h2 className="hero-list-h2">Ear Training and Rhythm</h2>
                   <li className="hero-list-li">Improvise better</li>
                   <li className="hero-list-li">Make better melodies</li>
               </ul>
            </section>
            <section className="hero-2sections-section2"> 
                {/* <img src={Clapton} alt="clapton"className="hero-section2-img" /> */}
                <div className="hero-section2-img"></div>
            </section> 
        </article>


            {/* <section className="hero-goTo">
                <div className="hero-goTo-content"> 
                    <h2> Internalize the modern rhythm figures</h2>
                    <button className="hero-goTo-content-button">GO!</button>  
                </div>
                 <div className="hero-goTo-content"> 
                    <h2> Internalize the most used scales </h2>
                    <button className="hero-goTo-content-button">GO!</button>  
                </div>
            </section>     */}
        </main>
    )

}