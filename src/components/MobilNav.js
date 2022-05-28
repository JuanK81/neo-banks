import barsIcon from '../assets/barsIcon.png';
import compassIcon from '../assets/compassIcon.png';
import userIcon from '../assets/userIcon.png';

const MobilNav = () => {
  return (
    <div className="mobil">
      <nav className="mobil-nav">
        <div className="mobil-nav-buttons">
          <img className="mobil-nav-buttons-icon" src={barsIcon} alt="" />
          <img className="mobil-nav-buttons-icon" src={compassIcon} alt="" />
          <img className="mobil-nav-buttons-icon" src={userIcon} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default MobilNav;
