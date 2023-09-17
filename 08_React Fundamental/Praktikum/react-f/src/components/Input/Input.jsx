const Input = ({ id, title, idError }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{title}</label>
        <input type="text" className="form-control" id={id} placeholder="" />
        <div id={idError}></div>
      </div>
    );
  };
  
  export default Input;