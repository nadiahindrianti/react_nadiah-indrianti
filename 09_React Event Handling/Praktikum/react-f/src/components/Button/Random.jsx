const Random = () => {
    return (
      <div className="col-1 p-0">
        <button className="btn btn-white mt-1 border-primary" id="search" type="button" onClick={(e) => alert(Math.random() * 10)}>
          Random
        </button>
      </div>
    );
  };
  
  export default Random;