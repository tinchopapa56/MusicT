import React from "react"
import "./main-home.css"
import Hero from "../hero/hero"
import Berklee from "../../../imgs/berklee.jpg"
import Clapton from "../../../imgs/clapton2.jpg"
import { Footer } from "../../Footer/footer"

export default function MainHome(){
    return(
        <main className="main-container"> 
            <Hero />
            <section className="main-article">
                <img className="main-img" src={Berklee} alt="berklee"/>
                <div className="main-article-text_container"> 
                    <h2> The difference between the intermediate and the expert players? </h2>
                    <p>In Berklee ear training and rhythm are practised daily.</p> 
                    <p>Instead of paying 50k a year use our app to become a well rounded musicianshipo training</p>
                </div>
            </section>

            <section className="main-article">
                <div className="main-article-text_container">
                    <h2> "If you can't sight read music you are not a real musician"</h2>
                    <p>Well; Clapton, EVH, Hendrix, JM didn´t.</p>
                    <p>Instead of wasting years understand drawings, learn by feel, develop different grooves from phrases and real-life music</p>
                </div>
                <img className="main-img" src={Clapton} alt="ear training"/>
            </section>
            <Footer />
        </main>
    )
}