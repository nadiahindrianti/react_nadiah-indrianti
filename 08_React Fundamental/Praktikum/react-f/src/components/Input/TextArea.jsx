const TextArea = () => {
    return (
      <div className="mb-4">
        <label for="additional-desc" class="form-label">
          Additional Description
        </label>
        <textarea class="form-control" id="productDesc" rows="3"></textarea>
        <div id="errorDesc"></div>
      </div>
    );
  };
  
  export default TextArea;