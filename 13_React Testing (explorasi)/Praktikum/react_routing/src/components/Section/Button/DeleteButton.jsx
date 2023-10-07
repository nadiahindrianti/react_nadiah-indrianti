import { useDispatch } from "react-redux";
import { deleteProduct } from "../../features/slice/productSlice";

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

export default DeleteButton;