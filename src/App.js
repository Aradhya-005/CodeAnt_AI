import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Repositories from "./pages/Repositories";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="repo" element={<Repositories />} />
          {/* <Route path="ai-review" element={<AiReview />} />
          <Route path="cloud-security" element={<CloudSecurity />} />
          <Route path="how-to-use" element={<HowToUse />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
