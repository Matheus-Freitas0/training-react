import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { getMemberById } from "../../services/memberGetBy";
import { memberUpdate } from "../../services/memberUpdate";
import { memberCreate } from "../../services/memberCreate";
import "./MemberForm.css";

function MemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({
    name: "",
    assignment: "",
    document: "",
    employee: false,
  });

  useEffect(() => {
    if (id) {
      getMemberById(id)
        .then((data) => setMember(data))
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      memberUpdate(member)
        .then(() => navigate('/', { state: { success: true } }))
        
    } else {
      memberCreate(member)
        .then(() => navigate('/', { state: { success: true } }))
    }
  };

  return (
    <div className="member-form-container">
      <div className="form-wrapper">
        <h2>{id ? "Edit Member" : "Member Registration"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="member-name">Member Name</label>
            <input
              type="text"
              id="member-name"
              value={member.name}
              onChange={e => setMember({ ...member, name: e.target.value })}
              placeholder="Enter member name"
              required
              disabled={id}  
            />
          </div>

          <div className="form-group">
            <label htmlFor="assignment">Assignment</label>
            <input
              type="text"
              id="assignment"
              value={member.assignment}
              onChange={e => setMember({ ...member, assignment: e.target.value })}
              placeholder="Enter assignment"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="document">Document</label>
            <InputMask
              mask="999.999.999-99"  
              type="text"
              id="document"
              value={member.document}
              onChange={e => setMember({ ...member, document: e.target.value })}
              placeholder="Enter document number"
              required
              disabled={id}  
            />
          </div>

          <div className="form-group">
            <label htmlFor="is-employee">
              <input
                type="checkbox"
                id="is-employee"
                checked={member.employee}
                onChange={e => setMember({ ...member, employee: e.target.checked })}
              />
              Employee
            </label>
          </div>

          <button type="submit">{id ? 'Update Member' : 'Register Member'}</button>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
