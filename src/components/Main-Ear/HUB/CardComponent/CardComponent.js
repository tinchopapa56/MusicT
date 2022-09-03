import "./CardComponent.css"
import { Link } from "react-router-dom"
// import imgA from "../../../../imgs/hero/pic (3).jpg"

export default function CardComponent(props){
   // where i uploaded the imgs : https://imgbox.com/gallery/edit/ha7L1jeWe8/mwP1l8PoLh7MRVjq?#
    const linkStyle = {
        margin: " 0",
        paddingTop: "1em",
        cursor: "pointer",
        textAlign: "center",
        textDecoration: "none",
        color: "black",
                        //#ADD7F6
        backgroundColor: "#3F8EFC",
        width: "15em",
        height: "3em",
        borderBottomLeftRadius: "13%",
        borderBottomRightRadius: "13%",
        opacity: 1,
      };
    const imgStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "21em",
        borderTopLeftRadius: "10%",
        borderTopRightRadius: "10%",
    }

    return(
        <article className="card-container"> 
            <div className="card-img-container" style={imgStyle}></div>
            <h4 className="card-h4-container">{props.level}</h4>
                <p className="card-text-container">{props.text}</p>
                {/* { (props.levelLink !== "null" ) ? (<Link style={linkStyle} to={props.levelLink}> GO </Link>)
                 :
                 (<Link style={linkStyle}> Coming Soon!</Link>)
                } */}
           <Link style={linkStyle} to={props.levelLink}> GO </Link>
        </article>
    )
}