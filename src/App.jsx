import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MemberListPage from './pages/MemberListPage';
import MemberRegisterPage from './pages/MemberRegisterPage';

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Member List</Link></li>
                    <li><Link to="/register">Register Member</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<MemberListPage />} />
                <Route path="/register" element={<MemberRegisterPage />} />
            </Routes>
        </div>
    </Router>
);

export default App;
