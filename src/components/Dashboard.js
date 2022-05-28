import colorBarsIcon from '../assets/colorBarsIcon.png';

const Dashboard = (props) => {
  return (
    <>
      {props.pcMenu && (
        <section className="dashboard">
          <div className="dashboard-links">
            <p>Dashboard</p>
          </div>
        </section>
      )}
      {!props.pcMenu && (
        <section className="dashboard">
          <h3>Transaction history</h3>
          <div className="dashboard-subtitle">
            <p>These are your monthly and daily actions.</p>
            <img
              className="dashboard-subtitle-bars"
              src={colorBarsIcon}
              alt=""
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
