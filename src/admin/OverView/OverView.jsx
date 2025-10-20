import React, { useState, useEffect } from "react";
import AdminNav from "../AdminNav";
import { API } from "../../Api/Constent";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from "recharts";

function OverView() {
  const [stats, setStats] = useState({
    guests: 0,
    courses: 0,
    admissions: 0,
    contacts: 0,
    users: 0
  });
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [recentData, setRecentData] = useState({
    guests: [],
    admissions: [],
    contacts: []
  });

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  const pieColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [guestsRes, coursesRes, admissionsRes, contactsRes, usersRes] = await Promise.all([
        axios.get(`${API}/guest`),
        axios.get(`${API}/course`),
        axios.get(`${API}/admission`),
        axios.get(`${API}/contact`),
        axios.get(`${API}/auth/get`)
      ]);

      const guestsData = guestsRes.data.data || guestsRes.data || [];
      const coursesData = coursesRes.data.data || coursesRes.data || [];
      const admissionsData = admissionsRes.data.data || admissionsRes.data || [];
      const contactsData = contactsRes.data.data || contactsRes.data || [];
      const usersData = usersRes.data.data || usersRes.data || [];

      setStats({
        guests: guestsData.length,
        courses: coursesData.length,
        admissions: admissionsData.length,
        contacts: contactsData.length,
        users: usersData.length
      });

      // Get recent data for charts (last 5 items)
      setRecentData({
        guests: guestsData.slice(-5),
        admissions: admissionsData.slice(-5),
        contacts: contactsData.slice(-5)
      });

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Chart data preparation
  const mainStatsData = [
    { name: 'Guests', value: stats.guests },
    { name: 'Courses', value: stats.courses },
    { name: 'Admissions', value: stats.admissions },
    { name: 'Contacts', value: stats.contacts },
    { name: 'Users', value: stats.users }
  ];

  const monthlyData = [
    { name: 'Jan', guests: 12, admissions: 8, contacts: 15 },
    { name: 'Feb', guests: 19, admissions: 12, contacts: 22 },
    { name: 'Mar', guests: 15, admissions: 9, contacts: 18 },
    { name: 'Apr', guests: 24, admissions: 16, contacts: 28 },
    { name: 'May', guests: 18, admissions: 11, contacts: 20 },
    { name: 'Jun', guests: 22, admissions: 14, contacts: 25 }
  ];

  // Stat Cards Component
  const StatCard = ({ title, value, icon, color, description }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: color + '20' }}>
          <span className="text-2xl" style={{ color }}>{icon}</span>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          <StatCard 
            title="Total Guests" 
            value={stats.guests} 
            icon="👥" 
            color="#3B82F6"
            description="Registered guests"
          />
          <StatCard 
            title="Courses" 
            value={stats.courses} 
            icon="📚" 
            color="#10B981"
            description="Available courses"
          />
          <StatCard 
            title="Admissions" 
            value={stats.admissions} 
            icon="🎓" 
            color="#F59E0B"
            description="Student admissions"
          />
          <StatCard 
            title="Contacts" 
            value={stats.contacts} 
            icon="📞" 
            color="#EF4444"
            description="Contact inquiries"
          />
          <StatCard 
            title="Users" 
            value={stats.users} 
            icon="👤" 
            color="#8B5CF6"
            description="System users"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart - Main Statistics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Overview Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mainStatsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Data Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mainStatsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mainStatsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart - Monthly Trend */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="guests" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="admissions" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="contacts" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart - Growth */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Growth Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="guests" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Area type="monotone" dataKey="admissions" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                <Area type="monotone" dataKey="contacts" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => window.location.href = '/admin/guests'}
              className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
            >
              <div className="text-2xl mb-2">👥</div>
              <span className="font-medium">Manage Guests</span>
            </button>
            <button 
              onClick={() => window.location.href = '/admin/courses'}
              className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center"
            >
              <div className="text-2xl mb-2">📚</div>
              <span className="font-medium">View Courses</span>
            </button>
            <button 
              onClick={() => window.location.href = '/admin/admission'}
              className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <span className="font-medium">Admissions</span>
            </button>
            <button 
              onClick={fetchData}
              className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🔄</div>
              <span className="font-medium">Refresh Data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;