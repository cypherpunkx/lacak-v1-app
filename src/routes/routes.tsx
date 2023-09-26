import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CekResi from "../pages/CekResi";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="cekresi" element={<CekResi />} />
    </Route>
  )
);

export default router;
