import axios from "axios";
import "./MemberTable.css";

function MemberRow({ member }) {

  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.employee ? 'Yes' : 'No'}</td>
      <td>{member.assignment}</td>
      <td className="d-none d-sm-table-cell">{member.document}</td>
      <td className="btns">
        <button className="btn btn-primary">Edit</button>
      </td>
    </tr>
  );
}

export default MemberRow;