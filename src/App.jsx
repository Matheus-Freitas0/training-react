import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MemberListPage from './pages/MemberListPage';
import MemberRegisterPage from './pages/MemberRegisterPage';

const App = () => (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<MemberListPage />} />
                <Route path="/register" element={<MemberRegisterPage />} />
            </Routes>
        </div>
    </Router>
);

export default App;
