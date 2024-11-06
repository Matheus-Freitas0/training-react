import Header from "../components/membersList/header"
import Alert from "../components/membersList/alert"
import MemberTable from "../components/membersList/MemberTable"

function MemberListPage() {    
    return (
        <div>
            <Header />
            <Alert />
            <MemberTable />
        </div>
    )
}

export default MemberListPage