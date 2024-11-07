import "./MemberForm.css";

function MemberForm(id) {
  return (
    <main>
      <div class="container my-12">
        <h2 class="text-center mb-4" id="project-title">
          Member Registration
        </h2>
        <form id="registrationForm">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="project-name" class="form-label">
                Member Name
              </label>
              <input
                type="text"
                class="form-control"
                id="Member-name"
                placeholder="Member name"
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="project-name" class="form-label">
                Assignment
              </label>
              <input
                type="text"
                class="form-control"
                id="Assignment"
                placeholder="Assignment..."
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="project-name" class="form-label">
                Document
              </label>
              <input
                type="text"
                class="form-control"
                id="Document"
                placeholder="Document number..."
                required
              />
            </div>

            <div class="col-md-6 mb-3">
              <label for="is-employee" class="form-label">
                Employee
              </label>
              <input
                type="checkbox"
                class="form-check-input"
                id="is-employee"
              />
            </div>
          </div>
          <button type="submit" id="submitButton" class="btn btn-primary">
            Register Member
          </button>
        </form>
      </div>
    </main>
  );
}
export default MemberForm;
