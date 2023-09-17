import Error from "../../components/Error";

const TextArea = ({ setDescription, value, stateError }) => {
    return (
      <div className="mb-4">
        <label for="additional-desc" class="form-label">
          Additional Description
        </label>
        <textarea
        className={`form-control ${stateError && value.length < 1 ? "border border-danger" : ""}`}
        id="productDesc"
        rows="3"
        value={value}
        onChange={({ target }) => setDescription(target.value)}
      ></textarea>
      {stateError && value.length < 1 ? <Error id={"errorDesc"} message={`Description field cannot be Empty`} /> : ""}
      </div>
    );
  };
  
  export default TextArea;