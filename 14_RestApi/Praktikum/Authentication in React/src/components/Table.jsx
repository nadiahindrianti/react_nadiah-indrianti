import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Record from "./Record";
import { getProducts } from "../features/slice/productSlice";
import { deleteProduct } from "../features/slice/productSlice";

const DeleteButton = () => {
  const dispatch = useDispatch();

  const handleDeleteData = (e) => {
    dispatch(deleteProduct({ id: -1 }));
  };
  return (
    <div className="col-1 me-1">
      <button className="btn btn-primary mt-1" id="deleteButton" type="button" onClick={handleDeleteData}>
        Deletion
      </button>
    </div>
  );
};

const RandomButton = () => {
  return (
    <div className="col-1 p-0">
      <button className="btn btn-white mt-1 border-primary" id="searchButton" type="button" onClick={(e) => alert(Math.random() * 10)}>
        Random
      </button>
    </div>
  );
};

const Table = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [keywordSearch, setKeywordSearch] = useState("");

  let dataFiltered = datas.filter((data) => data.name.toLowerCase().includes(keywordSearch.toLowerCase()));

  return (
    <div className="container m-5 py-2">
      <h2 style={{ textAlign: "center" }}>List Product</h2>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="tbody-product">
            {keywordSearch.length > 1
              ? dataFiltered?.map((data, idx) => {
                  return <Record data={data} />;
                })
              : datas?.map((data, idx) => {
                  return <Record data={data} />;
                })}
          </tbody>
        </table>
        {/* Handle element for data if not found */}
        {datas.length < 1 ? (
          <div className="mb-3" id="alertSearch">
            No Data
          </div>
        ) : dataFiltered.length < 1 ? (
          <div class="alert alert-danger" role="alert">
            Data not found!
          </div>
        ) : (
          ""
        )}
      </div>
      <input type="text" className="form-control" id="searchInput" placeholder="Search by Product Name" style={{ width: "300px" }} onChange={({ target }) => setKeywordSearch(target.value)} />
      <div className="row d-flex">
        <DeleteButton />
        <RandomButton />
      </div>
    </div>
  );
};

export default Table;