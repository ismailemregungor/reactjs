import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {
  CarryOutOutlined,
  PieChartOutlined,
  SettingOutlined,
  SkinOutlined,
  SlidersOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DashboardPage from "../DashboardPage/DashboardPage";
import UserPage from "../UserPage/UserPage";
import RolePage from "../RolePage/RolePage";
import TaskPage from "../TaskPage/TaskPage";
import PermissionPage from "../PermissionPage/PermissionPage";
import FlowPage from "../FlowPage/FlowPage";
import SettingsPage from "../SettingsPage/SettingsPage";

const MainPage = ({ onChangeTheme }) => {

  const menu = [
    {
      key: "m1",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "m2",
      icon: <UserOutlined />,
      label: <Link to="/user">User</Link>,
    },
    {
      key: "m3",
      icon: <SkinOutlined />,
      label: <Link to="/role">Role</Link>,
    },
    {
      key: "m4",
      icon: <UnorderedListOutlined />,
      label: <Link to="/permission">Permission</Link>,
    },
    {
      key: "m5",
      icon: <SlidersOutlined />,
      label: <Link to="/tasks">Task</Link>,
    },
    {
      key: "m6",
      icon: <CarryOutOutlined />,
      label: <Link to="/flows">Flow</Link>,
    },
    {
      key: "m7",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <BrowserRouter>
      <MainLayout menu={menu} onChangeTheme={onChangeTheme}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/role" element={<RolePage />} />"
          <Route path="/permission" element={<PermissionPage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/flows" element={<FlowPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPage;
