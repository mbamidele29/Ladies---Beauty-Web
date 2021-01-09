import '../css/nav.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

export default function Nav(){
    return (
        <>
        <div className="nav">
            <h2 className="Logo">Ladies</h2>

            <div className="nav-items">
                <form>
                    <input className="search" type="text" placeholder="Search" />
                </form>
                <Link title="Cart" to="#" className="icon-link cart"><FaShoppingCart /></Link>
                <Link title="Menu" to="#" className="icon-link menu"><FaBars /></Link>
            </div>
        </div>
        </>
    );
}