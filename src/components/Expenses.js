import AreaImg from '../assets/Area_1.png'
import Container from './Container';

const Expenses = (props) => {
    return (
      <Container cssClass={`expenses ${props.item}`}>
        <div className="expenses-header">
          <h3 className="expenses-title">{props.title}</h3>
          <div className="expenses-menu">.....
          </div>
        </div>
        <div className="expenses-chart">
          <img className="expenses-chart_image" src={AreaImg} alt="" />
        </div>
      </Container>
    );
};

export default Expenses;