import Error from "../../components/Error";

const Select = ({ setCategory, value, stateError }) => {
    return (
      <div className="py-4">
        <label htmlFor="username" className="form-label">
          Product Category
        </label>
        <select className={`form-select ${stateError && value.length < 1 ? "border border-danger" : ""}`} id="productCategory" value={value} onChange={({ target }) => setCategory(target.value)}>
          <option value="" hidden></option>
          <option>Electronic devices</option>
          <option>Fashion</option>
          <option>Food</option>
        </select>
        {stateError && value.length < 1 ? <Error id={"errorCategory"} message={`Category field cannot be Empty`} /> : ""}
      </div>
    );
  };
  
  export default Select;