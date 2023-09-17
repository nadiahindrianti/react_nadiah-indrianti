const File = () => {
    return (
      <div className="d-flex flex-column mb-2">
        <label for="image-product" className="form-label">
          Image Product
        </label>
        <input type="file" className="form-control-file border border-primary rounded" id="productImage" style={{ width: "230px" }} />
        <div id="errorImage"></div>
      </div>
    );
  };
  
  export default File;