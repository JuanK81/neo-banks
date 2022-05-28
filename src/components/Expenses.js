// import areaImg from '../assets/Area_1.png';
import scaleImg from '../assets/graphScale.png';
import calendarIcon from '../assets/calendarIcon.png';
import arrowUp from '../assets/arrowUp.png';
import arrowDown from '../assets/arrowDown.png';
import Container from './Container';

const Expenses = (props) => {
//   const graphImg = {
//     width: '100%',
//     height: '20vw',
//     backgroundImage: `url(${areaImg})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//   };
  const graphScale = {
    // width: '95%',
    height: '30vw',
    backgroundImage: `url(${scaleImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <Container cssClass={`expenses ${props.item}`}>
      <div className="expenses-header">
        <h3 className="expenses-title">{props.title}</h3>
        <div className="expenses-menu">
          <div className="expenses-menu-calendar">
            <p className="expenses-menu-calendar-range">{`${props.start} - ${props.end}`}</p>{' '}
            <p className="expenses-menu-calendar-range">{props.year}</p>
            <img
              className="expenses-menu-calendar-image"
              src={calendarIcon}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="expenses-graph">
        <div className="expenses-graph_scale" style={graphScale}>
          {/* <div className="expenses-graph_image" style={graphImg}></div> */}
        </div>
      </div>
      <div className="expenses-total">
        <p className="expenses-total_text">Total Revenue</p>
        <h3 className="expenses-total_amount">{props.total}</h3>
        <div className="expenses-total_growth">
          <img
            className="expenses-total_growth--sign"
            src={props.isPositive ? arrowUp : arrowDown}
            alt=""
          />
          <p
            className={`expenses-total_growth--amount ${
              props.isPositive ? 'green' : 'red'
            }`}
          >
            {' '}
            {props.growth} %
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Expenses;
