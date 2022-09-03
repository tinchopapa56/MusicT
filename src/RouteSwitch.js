import "./RouteSwitch.css"
import { Routes, Route, } from "react-router-dom"
import App from "./App"
import Contact from "./components/Contact/Contact"
import RhyLevelsHub from "./components/Main-Rhy/HUB/RhyLevelsHub"
import EarLevelsHub from "./components/Main-Ear/HUB/earLevelsHub";
import EarLevel1 from "./components/Main-Ear/Level 1/earLevel1";
import EarLevel2 from "./components/Main-Ear/Level 2/earLevel2";
import EarLevel3 from "./components/Main-Ear/Level 3/earLevel3";
import EarLevel4 from "./components/Main-Ear/Level 4/earLevel4";

export default function RouteSwitch(){
    return(
            <Routes> 
                <Route path="/" element={<App />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/RhyLevelsHub" element={<RhyLevelsHub />}/>
                <Route path="/EarLevelsHub" element={<EarLevelsHub />} />
                <Route path="/EarLevel1" element={<EarLevel1 />} />
                <Route path="/EarLevel2" element={<EarLevel2 />} />
                <Route path="/EarLevel3" element={<EarLevel3 />} />
                <Route path="/EarLevel4" element={<EarLevel4 />} />
                {/* <Route path="/EarLevel3" element={<EarLevel3 />} />
                <Route path="/EarLevel4" element={<EarLevel4 />} /> */}

            </Routes>
        
    )
}