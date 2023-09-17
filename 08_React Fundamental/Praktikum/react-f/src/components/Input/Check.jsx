const Check = () => {
    return (
      <div className="py-4">
        <label for="product-freshness" className="form-label">
          Product Freshness
        </label>
        <div className="mt-1">
          <div className="form-check">
            <input id="brandNew" name="productFreshness" value="Brand New" type="radio" className="form-check-input" />
            <label className="form-check-label" for="brandNew">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input id="secondHand" name="productFreshness" type="radio" value="Second Hand" className="form-check-input" />
            <label className="form-check-label" for="secondHand">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input id="refurbished" name="productFreshness" type="radio" value="Refurbished" className="form-check-input" />
            <label className="form-check-label" for="refurbished">
              Refurbished
            </label>
          </div>
        </div>
        <div id="errorFreshness"></div>
      </div>
    );
  };
  
  export default Check;