import './css/Header.css'
const Header = () => {
    return (<>
        <nav className="navbar">
            <h1 className="logo">News Today</h1>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Politics</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Culture</a></li>
            </ul>
        </nav>
    </>
    );
};

export default Header;