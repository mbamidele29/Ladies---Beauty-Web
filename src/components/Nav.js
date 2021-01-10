import '../css/nav.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaGem } from 'react-icons/fa';

export default function Nav(){
    return (
        <>
        <div className="nav">
            <div className="logo">
                <h2>Ladies</h2>
                <FaGem />
            </div>

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