import logo from '../assets/logo.png';
import gearIcon from '../assets/gearIcon.png';

const Header = () => {
  console.log('header');
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="" className="header-logo-image" />
        <h1 className="header-logo-text">banks</h1>
      </div>
      <div className="header-menu">
        <img src={gearIcon} alt="" className="header-menu-image" />
      </div>
    </header>
  );
};

export default Header;
