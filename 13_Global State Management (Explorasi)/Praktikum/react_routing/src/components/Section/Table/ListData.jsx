import DeleteDataButton from "../Button/DeleteDataButton";
import EditDataButton from "../Button/EditDataButton";
import { Link, useNavigate } from "react-router-dom";

const ListData = ({ data }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate(`/createProduct/detail/${data.no}`, {
      state: { data },
    });
  };

  return (
    <>
      <tr key={data.no} onClick={action}>
        <th scope="row" className="w-25">
          {data.no}
        </th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.freshness}</td>
        <td>{data.price}</td>
        <td>
          <div className="container">
            <div className="row">
              <DeleteDataButton no={data.no} />
              <EditDataButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ListData;