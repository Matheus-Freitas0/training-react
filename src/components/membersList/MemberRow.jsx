import "./MemberTable.css";

function MemberRow() {
  return (
    <tr>
      <td>Name</td>
      <td>Employee</td>
      <td>Assignment</td>
      <td>Document</td>
      <td className='btns'>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default MemberRow;
