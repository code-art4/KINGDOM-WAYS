import react, {useState} from "react";
import styles from "./index.style";
const  SimpleCardInfo = (props) => {
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className={props.className} style={{...styles.container}}>
            <div>
                <img 
                    src={props.img ?? "/assets/images/pexels-element-digital.png"} 
                    className={""} 
                    style={{...styles.img, ...props?.style}} />
            </div>
            <div className={"font-bold"} style={{...styles.title}}>
                {props.title ? props.title : "Build Church School"}
            </div>
            <div style={{...styles.description}}>
                {props.description ? props.description : "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat."}
            
            </div>
            <div className="purple-border mt-3 bg-black text-white rounded homepage-footer-send-icon">
                Send
            </div>
        </div>
    );
}

export default SimpleCardInfo;