import React, { useState, useEffect, useContext } from "react";
import { Chart } from "primereact/chart";
import { getUserCount } from "../../services/user";
import { getRoleCount } from "../../services/role";
import { getPermissionCount } from "../../services/permission";
import { getTaskCount } from "../../services/task";
import { getFlowCount } from "../../services/flow";
import { PermissionContext } from "../../context/PermissionContext";

const DashboardLayout = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { permissions } = useContext(PermissionContext);
  const canDashboardView = permissions.includes("dashboard.view");

  useEffect(() => {
    const fetchDataCounts = async () => {
      const usersCount = await getUserCount();
      const rolesCount = await getRoleCount();
      const permissionsCount = await getPermissionCount();
      const tasksCount = await getTaskCount();
      const flowsCount = await getFlowCount();

      const data = {
        labels: ["Users", "Roles", "Permissions", "Tasks", "Flows"],
        datasets: [
          {
            label: "Data Counts",
            data: [
              usersCount,
              rolesCount,
              permissionsCount,
              tasksCount,
              flowsCount,
            ],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    };

    fetchDataCounts();
  }, []);

  return (
    <div>
      {canDashboardView && (
        <Chart type="bar" data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default DashboardLayout;
