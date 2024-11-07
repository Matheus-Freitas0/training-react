import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
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
    <main className="member-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">{id ? "Edit Member" : "Member Registration"}</h2>

        <form id="registrationForm" className="registration-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="member-name" className="form-label">
                Member Name
              </label>
              <input
                type="text"
                className="form-input"
                id="member-name"
                placeholder="Enter member name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="assignment" className="form-label">
                Assignment
              </label>
              <input
                type="text"
                className="form-input"
                id="assignment"
                placeholder="Enter assignment"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="document" className="form-label">
                Document
              </label>
              <InputMask
                mask="999.999.999-99"
                type="text"
                className="form-input"
                id="document"
                placeholder="Enter document number"
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                className="form-checkbox"
                id="is-employee"
              />
              <label htmlFor="is-employee" className="form-checkbox-label">
                Employee
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Register Member
          </button>
        </form>
      </div>
    </main>
  );
}

export default MemberForm;
