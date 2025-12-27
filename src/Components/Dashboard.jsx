import { 
  FiUsers, FiMail, FiCalendar, FiTrendingUp, FiTrendingDown,
  FiClock, FiCheckCircle, FiAlertCircle, FiActivity 
} from 'react-icons/fi';

export default function Dashboard({ stats, recentActivity }) {
  const cards = [
    {
      title: 'Total Requests Today',
      value: stats?.today || 0,
      change: '+12%',
      trend: 'up',
      icon: FiActivity,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Pending Requests',
      value: stats?.pending || 0,
      change: '-5%',
      trend: 'down',
      icon: FiAlertCircle,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Confirmed Meetings',
      value: stats?.confirmed || 0,
      change: '+8%',
      trend: 'up',
      icon: FiCheckCircle,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Newsletter Subscribers',
      value: stats?.newsletters || 0,
      change: '+15%',
      trend: 'up',
      icon: FiMail,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`${card.textColor} text-xl`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                card.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.trend === 'up' ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
                {card.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{card.value}</h3>
              <p className="text-gray-600 text-sm">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all group">
            <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
              <FiCalendar className="text-white" size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Review Requests</p>
              <p className="text-sm text-gray-600">{stats?.pending || 0} pending</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all group">
            <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
              <FiClock className="text-white" size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Create Slots</p>
              <p className="text-sm text-gray-600">Add availability</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all group">
            <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform">
              <FiUsers className="text-white" size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">View Analytics</p>
              <p className="text-sm text-gray-600">Detailed reports</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Meeting Requests</h3>
          <div className="space-y-3">
            {recentActivity?.slice(0, 5).map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'confirmed' ? 'bg-green-500' :
                  activity.status === 'cancelled' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.name}</p>
                  <p className="text-sm text-gray-600">{activity.email} • {activity.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  activity.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            )) || (
              <p className="text-gray-500 text-center py-4">No recent activity</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Database</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Connected</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email Service</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Last Backup</span>
              <span className="text-sm text-gray-600">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}