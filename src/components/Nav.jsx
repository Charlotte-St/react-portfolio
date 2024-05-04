import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    const currentPage = useLocation().pathname;
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-teriary fixed-top">
            <div className="container-fluid">
                <h1>Charlotte Stowe</h1>
                <Navbar
                links={[
                    <Link key={1} className={ currentPage === '/'? "nav-link active":"nav-link"} to="/">
                        About Me
                    </Link>,
                    <Link key={2} className={ currentPage === '/Contact'? "nav-link active":"nav-link"} to="/Contact">
                        Contact
                    </Link>,
                    <Link key={3} className={ currentPage === '/Portfolio'? "nav-link active":"nav-link"} to="/Portfolio">
                        Portfolio
                    </Link>,
                    <Link key={4} className={ currentPage === '/Resume'? "nav-link active":"nav-link"} to="/Resume">
                        Resume
                    </Link>
                 ]}
             ></Navbar>
            </div>
        </nav>
        </>
    )
}