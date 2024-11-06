import "./MemberTable.css";

function MemberRow({ member }) {
  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.employee}</td>
      <td>{member.assignment}</td>
      <td>{member.document}</td>
      <td className='btns'>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default MemberRow;
