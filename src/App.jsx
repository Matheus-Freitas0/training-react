import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MemberListPage from './pages/MemberListPage';
import MemberRegisterAndEditPage from './pages/MemberRegisterAndEditPage';

const App = () => (
    <Router>
            <Routes>
                <Route path="/" element={<MemberListPage />} />
                <Route path="/register" element={<MemberRegisterAndEditPage />} />
            </Routes>
    </Router>
);

export default App;
