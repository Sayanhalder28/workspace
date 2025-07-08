import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayOut from "./layout";
import TicketsServicesPage from "./pages/TcketsServices";
import NotificationsPage from "./pages/Notifications";
import _404NF from "./pages/_404NF";
import Overview from "./pages/Overview";
import Deployments from "./pages/Deployments";
import Warnings from "./pages/Warnings";
import AuditLogs from "./pages/AuditLogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/app/home" replace />} />
          <Route path="/app" element={<LayOut />}>
            <Route path="home">
              <Route index element={<Overview />} />
              <Route path="deployments" element={<Deployments />} />
              <Route path="warnings" element={<Warnings />} />
              <Route path="audit_logs" element={<AuditLogs />} />
              <Route
                path="reports_analytics"
                element={<div>Reports & Analytics</div>}
              />
              <Route path="help_support" element={<div>help & Support</div>} />
              <Route path="settings" element={<div>Settings</div>} />
            </Route>

            <Route path="tickets_&_services">
              <Route index element={<TicketsServicesPage />} />
              <Route path="services" element={<div>services</div>} />
            </Route>

            <Route path="notifications">
              <Route index element={<NotificationsPage />} />
              <Route path="system" element={<div>services</div>} />
              <Route path="server" element={<div>services</div>} />
            </Route>
          </Route>

          <Route path="*" element={<_404NF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
