import { useLocation } from "react-router-dom";
import Header from "../components/memberList/header";
import MemberTable from "../components/memberList/MemberTable";
import Alert from "../components/memberList/Alert"; 

function MemberListPage() {
  const location = useLocation();
  const successMessage = location.state?.success; 

  return (
    <div>
      <Header />
      {successMessage && <Alert />} 
      <MemberTable />
    </div>
  );
}

export default MemberListPage;
