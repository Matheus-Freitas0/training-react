import './MemberTable.css'

function MemberTable() {
  return (
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12 mb-5">
          <div class="d-flex inline mb-2">
            <h2 class="col">Members</h2>
            <a
              class="btn-new-member btn btn-primary btn-lg"
              href="/register"
            >
              New Member
            </a>
          </div>
          <table class="table table-striped table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Employee</th>
                <th scope="col">Assignment</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="member-list" class="lists"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MemberTable;
