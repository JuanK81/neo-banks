

const Container = (props) => {
    return <div className={`container ${props.cssClass}`}>
      {props.children}
    </div>
};

export default Container;