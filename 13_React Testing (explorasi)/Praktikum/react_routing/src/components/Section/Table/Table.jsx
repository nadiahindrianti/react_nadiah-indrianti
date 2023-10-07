import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteButton from "../Button/DeleteButton";
import RandomButton from "../Button/RandomButton";
import ListData from "./ListData";

const Table = () => {
  const datas = useSelector((state) => state.products);

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
                  return <ListData data={data} />;
                })
              : datas?.map((data, idx) => {
                  return <ListData data={data} />;
                })}
          </tbody>
        </table>
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