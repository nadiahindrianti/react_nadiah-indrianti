import Error from "../../components/Error";

const Input = ({ title, idError, setStateItem, value, stateError }) => {
    const handleOnChange = (e) => {
      setStateItem(e.target.value);
    };
  
    return (
      <div className="mb-3">
        <label className="form-label">{title}</label>
        <input type="text" className={`form-control ${stateError && value.length < 1 ? "border border-danger" : ""}`} value={value} placeholder="" onChange={handleOnChange} />
        {stateError && value.length < 1 ? <Error id={idError} message={`${title} field cannot be Empty`} /> : ""}
        {value.length > 10 && title === "Product Name" ? <Error id={idError} message={"Product Name tidak boleh melebihi 10 karakter"} /> : ""}
        {isNaN(Number(value)) && title === "Product Price" ? <Error id={idError} message={"Please enter a valid Product price"} /> : ""}
      </div>
    );
  };
  
  export default Input;