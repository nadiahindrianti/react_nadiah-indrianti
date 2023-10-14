import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../features/slice/productSlice";

const DeleteRecordButton = ({ no }) => {
  const dispatch = useDispatch();

  const handleDeleteRecord = (e) => {
    if (confirm("Are you sure want to delete this data?")) {
      // setStateData((prevData) => prevData.filter((data) => data.no != no));
      dispatch(deleteProduct({ id: no }));
    }
    e.stopPropagation();
  };

  return (
    <div className="col-auto p-0">
      <button className="btn btn-danger p-2" id="deleteRecord" type="button" onClick={handleDeleteRecord}>
        Delete
      </button>
    </div>
  );
};

const EditRecordButton = () => {
    return (
      <div className="col-auto me-1 p-0 ps-1">
        <button className="btn btn-info p-2" id="deleteRecord" type="button">
          Edit
        </button>
      </div>
    );
  };

const Record = ({ data }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate(`/createProduct/detail/${data.no}`, {
      state: { data },
    });
  };

  return (
    <>
      <tr key={data.id} onClick={action}>
        <th scope="row" className="w-25">
          {data.id}
        </th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.freshness}</td>
        <td>{data.price}</td>
        <td>
          <div className="container">
            <div className="row">
              <DeleteRecordButton no={data.id} />
              <EditRecordButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Record;