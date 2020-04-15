export default (props) => {
  console.log(props.username ? true : false, props.msg ? true : false);
  return (
    <div className="card">
      {props.username ? (
        <React.Fragment>
          <img src={props.img} alt="avatar" className="avatar" />
          <a href={props.url} target="_blank">
            {props.username}
          </a>
        </React.Fragment>
      ) : (
        <small>{props.msg || "Search to show"}</small>
      )}
    </div>
  );
};
