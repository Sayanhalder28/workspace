import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout";
import HomePage from "./pages/Home";
import TicketsServicesPage from "./pages/TcketsServices";
import NotificationsPage from "./pages/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route
              path="tickets_&_services"
              element={<TicketsServicesPage />}
            />
            <Route path="notifications" element={<NotificationsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
