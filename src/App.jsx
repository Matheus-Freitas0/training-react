import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberListPage from './pages/MemberListPage';
import MemberRegisterAndEditPage from './pages/MemberRegisterAndEditPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MemberListPage />} />
      <Route path="/register" element={<MemberRegisterAndEditPage />} />
      <Route path="/register/:id" element={<MemberRegisterAndEditPage />} />
    </Routes>
  </Router>
);

export default App;