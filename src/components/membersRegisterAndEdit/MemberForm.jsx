import "./MemberForm.css";
import InputMask from 'react-input-mask';

function MemberForm(id) {
  return (
    <main className="member-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Member Registration</h2>

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
