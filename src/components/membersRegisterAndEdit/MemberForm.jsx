import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MemberForm.css";
import axios from "axios";

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
      axios
        .get(`http://192.168.15.12:8080/members/api/${id}`)
        .then((response) => {
          setMember(response.data);
        })
        .catch((error) => {
          console.error("Error fetching member data:", error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios.put('http://192.168.15.12:8080/members/api', {
        id: member.id, 
        employee: member.employee, 
        assignment: member.assignment 
      })
      .then(response => {
        console.log("Member updated:", response.data);
        navigate('/'); 
      })
      .catch(error => {
        console.error("Error updating member:", error);
      });
    } else {
      axios.post('http://192.168.15.12:8080/members/api/create', {
        name: member.name, 
        employee: member.employee,
        assignment: member.assignment, 
        document: member.document, 
      })
      .then(response => {
        console.log("New member created:", response.data);
        navigate('/'); 
      })
      .catch(error => {
        console.error("Error creating member:", error);
      });
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
            <input
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
