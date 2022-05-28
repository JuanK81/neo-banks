const Key = (props) => {
  return (
    <div className="key">
      <div className={`key-color ${props.color}`}></div>
      <p className="key-text">{props.keyName}</p>
    </div>
  );
};

export default Key;
