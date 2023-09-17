import Error from "../../components/Error";

const File = ({ setFilePath, value, stateError }) => {
    return (
      <div className="d-flex flex-column mb-2">
        <label for="image-product" className="form-label">
          Image Product
        </label>
        <input
        type="file"
        value={value}
        onChange={({ target }) => setFilePath(target.value)}
        className={`form-control-file border rounded ${stateError && value.length < 1 ? "border-danger" : "border-primary"}`}
        style={{ width: "230px" }}
      />
      {stateError && value.length < 1 ? <Error id={"errorImage"} message={`Product image field cannot be Empty`} /> : ""}
      </div>
    );
  };
  
  export default File;