import "./MemberForm.css";

function MemberForm(id) {
  return (
    <main>
      <div className="container my-12">
        <h2 className="text-center mb-4" id="project-title">
          Member Registration
        </h2>
        <form id="registrationForm">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="member-name" className="form-label">
                Member Name
              </label>
              <input
                type="text"
                className="form-control"
                id="member-name"
                placeholder="Member name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="assignment" className="form-label">
                Assignment
              </label>
              <input
                type="text"
                className="form-control"
                id="assignment"
                placeholder="Assignment..."
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="document" className="form-label">
                Document
              </label>
              <input
                type="text"
                className="form-control"
                id="document"
                placeholder="Document number..."
                required
              />
            </div>

            <div className="checkbox col-md-6 mb-3">
              <label htmlFor="is-employee" className="form-label">
                Employee
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="is-employee"
              />
            </div>
          </div>
          <button type="submit" id="submitButton" className="btn btn-primary">
            Register Member
          </button>
        </form>
      </div>
    </main>
  );
}

export default MemberForm;
