import "./MemberForm.css";

function MemberForm(id) {
  return (
    <main>
      <div class="container my-12">
        <h2 class="text-center mb-4" id="project-title">
          Project Registration
        </h2>
        <form id="registrationForm">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="project-name" class="form-label">
                Project Name
              </label>
              <input
                type="text"
                class="form-control"
                id="project-name"
                placeholder="Project name"
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="project-description" class="form-label">
                Project Description
              </label>
              <textarea
                class="form-control"
                id="project-description"
                rows="1"
                placeholder="Project description"
                required
              ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="project-manager" class="form-label">
                Project Manager
              </label>
              <select id="project-manager" class="form-select choices" required>
                <option value="" disabled selected>
                  Select a Project Manager
                </option>
                <option value="John Silva">John Silva</option>
                <option value="Maria Souza">Maria Souza</option>
                <option value="Gustavo Henrique">Gustavo Henrique</option>
                <option value="Ana Pereira">Ana Pereira</option>
                <option value="Lucas Oliveira">Lucas Oliveira</option>
                <option value="Fernanda Costa">Fernanda Costa</option>
                <option value="Carlos Santos">Carlos Santos</option>
                <option value="Clara Lima">Clara Lima</option>
                <option value="Ricardo Almeida">Ricardo Almeida</option>
                <option value="Juliana Martins">Juliana Martins</option>
              </select>
            </div>
          </div>
          <button type="submit" id="submitButton" class="btn btn-primary">
            Register Project
          </button>
        </form>
      </div>
    </main>
  );
}
export default MemberForm;
