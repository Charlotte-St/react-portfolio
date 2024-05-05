import Skills from "../components/UI/Skills";
import { Link } from 'react-router-dom';

export default function ResumePage(){
    return (
        <div>
            <main>
                <h3>My Skills:</h3>
                <Skills />
                <br />
                <Link to="/src/assets/Basic Resume.pdf" target="_blank" download>Download Resume</Link>
            </main>
        </div>
    )
}