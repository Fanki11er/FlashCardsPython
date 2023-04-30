import { Route } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainTemplate from "../Templates/MainTemplate/MainTemplate";
import routes from "./routes";
import HeroPage from "../Views/HeroPage/HeroPage";
import LoginPage from "../Views/LoginPage/LoginPage";
import RegistrationPage from "../Views/RegistrationPage/RegistrationPage";
import RequireAuth from "../components/Molecules/RequireAuth/RequireAuth";
import MainPage from "../Views/MainPage/MainPage";
import MaintenancePage from "../Views/MaintenancePage/MaintenancePage";
import LearningPage from "../Views/LearningPage/LearningPage";
import SettingsPage from "../Views/SettingsPage/SettingsPage";

const { index, login, registration, main, maintenance, learn, settings } =
  routes;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={index} element={<MainTemplate />}>
      <Route index element={<HeroPage />} />
      <Route path={login} element={<LoginPage />} />
      <Route path={registration} element={<RegistrationPage />} />
      <Route element={<RequireAuth />}>
        <Route path={main} element={<MainPage />} />
        <Route path={maintenance} element={<MaintenancePage />} />
        <Route path={learn} element={<LearningPage />} />
        <Route path={settings} element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<HeroPage />} />
    </Route>
  )
);

export default router;
/*
 <Route element={<MainTemplate />}>
      <Route path={main} element={<Main />} />
      <Route path={views} element={<Views />} />
      <Route path="*" element={<NotFound />} />
    </Route>
*/
