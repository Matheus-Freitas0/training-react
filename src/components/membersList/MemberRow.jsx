import axios from "axios";
import "./MemberTable.css";

function MemberRow({ member }) {

  function DeleteMember(id) {
    axios.delete('')
  }

  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.employee ? 'Yes' : 'No'}</td>
      <td>{member.assignment}</td>
      <td>{member.document}</td>
      <td className="btns">
        <button className="btn btn-primary" onClick={()=>DeleteMember(member.id)}>Edit</button>
      </td>
    </tr>
  );
}

export default MemberRow;