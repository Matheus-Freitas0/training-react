import { useNavigate } from 'react-router-dom';
import "./MemberTable.css";

function MemberRow({ member }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/register/${member.id}`); 
  };

  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.employee ? 'Yes' : 'No'}</td>
      <td>{member.assignment}</td>
      <td className="d-none d-sm-table-cell">{member.document}</td>
      <td className="btns">
        <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
      </td>
    </tr>
  );
}

export default MemberRow;