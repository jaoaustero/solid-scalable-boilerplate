import BaseNavbarStyle from './style';

function BaseNavbar(props) {
    return (
        <nav className={BaseNavbarStyle}>
            { props.children }
        </nav>
    );
};

export default BaseNavbar;
