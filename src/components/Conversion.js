import Container from './Container';
import Key from './Key';
import menuDots from '../assets/menuDots.png';
import circleChart from '../assets/circleChart.png';

const Conversion = (props) => {
  return (
    <Container cssClass={`conversion ${props.item}`}>
      <div className="conversion-header">
        <h3 className="conversion-title">Conversions</h3>
        <div className="conversion-menu">
          <img className="conversion-menu_image" src={menuDots} alt="" />
        </div>
      </div>
      <div className="conversion-chart">
        <img className="conversion-chart_image" src={circleChart} alt="" />

        <div className="conversion-chart_keys">
          <Key keyName="Screens" color="blue" />
          <Key keyName="PCs" color="orange" />
          <Key keyName="Phones" color="purple" />
        </div>
      </div>
    </Container>
  );
};

export default Conversion;
