import { useNavigate } from "react-router-dom";
import "./MemberTable.css";
import React from "react";
import useFormattedCPF from "../../services/useFormattedCPF";

function MemberRow({ member }) {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/register/${member.id}`);
  };
  const formattedCPF = useFormattedCPF(member.document);

  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.employee ? "Yes" : "No"}</td>
      <td>{member.assignment}</td>
      <td className="d-none d-sm-table-cell">{formattedCPF}</td>
      <td className="text-center align-middle">
        <button
          className="btn btn-primary edit-btn"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default MemberRow;
