import { useDispatch } from "react-redux";
import { deleteProduct } from "../../features/slice/productSlice";

const DeleteDataButton = ({ no }) => {
  const dispatch = useDispatch();

  const handleDeleteData = (e) => {
    if (confirm("Are you sure want to delete this data?")) {
      dispatch(deleteProduct({ id: no }));
    }
    e.stopPropagation();
  };

  return (
    <div className="col-auto p-0">
      <button className="btn btn-danger p-2" id="deleteData" type="button" onClick={handleDeleteData}> Delete </button>
    </div>
  );
};

export default DeleteDataButton;