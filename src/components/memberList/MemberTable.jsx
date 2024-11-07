import MemberRow from "./MemberRow";
import "./MemberTable.css";
import { useState, useEffect } from "react";
import { getMembers } from "../../services/memberService";

function MemberTable() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    (async () => setMembers(await getMembers()))();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12 mb-5">
          <div className="d-flex inline mb-2">
            <h2 className="col">Members</h2>
            <a
              className="btn-new-member btn btn-primary btn-lg"
              href="/register"
            >
              New Member
            </a>
          </div>
          <table className="table table-striped table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Employee</th>
                <th scope="col">Assignment</th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Document
                </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <MemberRow key={member.id} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MemberTable;
