import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthIcon from '@mui/icons-material/North';

export const Footer = () => {

    // return (
    //     <footer className="disclaimer">
    //         <div>
    //             <label>© Tincho Develops.</label>
    //             <div className ="social">
    //                     <a target="_blank" href='https://www.instagram.com/martin_labastie/'>{<InstagramIcon/>}</a>
    //                     <a target="_blank" href='https://twitter.com/tinchopapa55'>{<TwitterIcon/>}</a>
    //                     <a target="_blank" href='https://www.linkedin.com/in/martin-labastie/'>{<LinkedInIcon/>}</a>
    //                     <a target="_blank" href='https://github.com/tinchopapa56'>{<GitHubIcon/>}</a>
    //             </div>
    //             <div>
    //                 <span>Made in 2022</span>
    //             </div>
    //         </div>
    //     </footer>
    // )
    return (
            <footer className="disclaimer">
                <label>© Tincho Develops.</label>
                <div className ="social">
                    <a target="_blank" href='https://www.instagram.com/martin_labastie/'>{<InstagramIcon/>}</a>
                    <a target="_blank" href='https://twitter.com/tinchopapa55'>{<TwitterIcon/>}</a>
                    <a target="_blank" href='https://www.linkedin.com/in/martin-labastie/'>{<LinkedInIcon/>}</a>
                    <a target="_blank" href='https://github.com/tinchopapa56'>{<GitHubIcon/>}</a>
                </div>
                <span>Made in 2022</span>
            </footer>
        )
}
