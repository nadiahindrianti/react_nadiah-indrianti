const Select = () => {
    return (
      <div className="py-4">
        <label for="username" className="form-label">
          Product Category
        </label>
        <select className="form-select" id="productCategory">
          <option value="" hidden></option>
          <option>Electronic devices</option>
          <option>Fashion</option>
          <option>Food</option>
        </select>
        <div id="errorCategory"></div>
      </div>
    );
  };
  
  export default Select;