import React from "react";

import { FaCarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

const data = [
  {
    SNo: 1,
    Name: "John Doe",
    Email: "john.doe@example.com",
    PhoneNo: "123-456-7890",
  },
  {
    SNo: 2,
    Name: "Jane Smith",
    Email: "jane.smith@email.com",
    PhoneNo: "234-567-8901",
  },
  {
    SNo: 3,
    Name: "Bob Brown",
    Email: "bob.brown@mail.com",
    PhoneNo: "345-678-9012",
  },
  {
    SNo: 4,
    Name: "Alice Lee",
    Email: "alice.lee@domain.com",
    PhoneNo: "456-789-0123",
  },
];
// Pie Chart Data (Order Details)
const pieData = {
  labels: ["Completed Orders", "Pending Orders", "Canceled Orders"],
  datasets: [
    {
      label: "Order Status",
      data: [50, 30, 20], // Example data
      backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
      hoverOffset: 4,
    },
  ],
};

// Bar Chart Data (Visitors)
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly Visitors",
      data: [500, 700, 800, 600, 900, 750], // Example data
      backgroundColor: "#3498db",
      borderColor: "#2980b9",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.raw} units`,
      },
    },
  },
};
const Dashboard = () => {
  return (
    <div className="p-6">
      <div className=" w-full">
        <div className="text-2xl font-bold p-3 bg-white box-shadow w-full">
          Welcome to the Dashboard
        </div>
      </div>

      <div className=" grid grid-cols-3  gap-4 mt-4">
        <div className="grid-cols-1">
          <div className="p-3 bg-white flex justify-between box-shadow h-[150px] items-center">
            <FaCarAlt
              size={50}
              className="bg-[#E5F0FF] text-[#1273EB] rounded-full p-3"
            />
            <div className="count">
              <h5 className=" text-[#1273EB] text-4xl">25</h5>
              <p>Count</p>
            </div>
            <img src="src/assets/growth.png" className="w-[200px]" srcset="" />
          </div>
        </div>
        <div className="grid-cols-1">
          <div className="p-3 bg-white flex justify-between box-shadow h-[150px] items-center">
            <FaCarAlt
              size={50}
              className="bg-[#E5F0FF] text-[#1273EB] rounded-full p-3"
            />
            <div className="count">
              <h5 className=" text-[#1273EB] text-4xl">25</h5>
              <p>Vehicles</p>
            </div>
            <img src="src/assets/growth.png" className="w-[200px]" srcset="" />
          </div>
        </div>
        <div className="grid-cols-1">
          <div className="p-3 bg-white flex justify-between box-shadow h-[150px] items-center">
            <FaRegUser
              size={50}
              className="bg-[#E5F0FF] text-[#1273EB] rounded-full p-3"
            />
            <div className="count">
              <h5 className=" text-[#1273EB] text-4xl">25</h5>
              <p>User</p>
            </div>
            <img src="src/assets/growth.png" className="w-[200px]" srcset="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2   gap-4 mt-4">
        <div className="grid-cols-2  align-middle bg-white box-shadow p-5  mt-4">
          <div className="mb-8 h-[400px]">
            <h3 className="text-xl font-semibold mb-4">
              Order Status Distribution
            </h3>
            <Pie data={pieData} options={options} height={null} width={null} />
          </div>
        </div>
        <div className="grid-cols-2    bg-white box-shadow p-5  mt-4">
          <div className="mb-8 h-[400px] flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4">Monthly Visitors</h3>
            <Bar data={barData} options={options} height={null} width={null} />
          </div>
        </div>
      </div>

      <div className="w-full bg-white box-shadow p-5  mt-4">
        <h2 className="text-2xl font-bold p-3">User Data Table</h2>
        <table className="min-w-full table-auto overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">SNo</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone No</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.SNo} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{user.SNo}</td>
                <td className="py-3 px-4">{user.Name}</td>
                <td className="py-3 px-4">{user.Email}</td>
                <td className="py-3 px-4">{user.PhoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
