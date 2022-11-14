import { RiTwitterLine, RiMapPinLine, RiMailLine, RiPhoneLine  } from "react-icons/ri";
const Footer = () => {
    return ( 
        <div>
            <footer>
                <div id="socials">
                    <RiTwitterLine/>
                    <RiMapPinLine/>
                    <RiMailLine/>
                    <RiPhoneLine/>
                </div>
                <p>Copyright reserved</p>
            </footer>
        </div>
     );
}
 
export default Footer;