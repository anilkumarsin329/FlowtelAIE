import { useState, useEffect, useRef } from 'react';
import {
  FiEdit2,
  FiTrash2,
  FiSave,
  FiX,
  FiSearch,
  FiFilter,
  FiSettings
} from 'react-icons/fi';

export default function DemoRequestsPage({
  demoRequests,
  updateDemoRequest,
  deleteDemoRequest
}) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRooms, setFilterRooms] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // 🔧 ONLY ADDITION
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const dropdownRef = useRef(null);

  const filteredRequests = demoRequests.filter(request => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.hotel.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRooms =
      filterRooms === 'all' || request.rooms.toString() === filterRooms;

    return matchesSearch && matchesRooms;
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEdit = request => {
    setEditingId(request._id);
    setEditData({
      name: request.name,
      email: request.email,
      hotel: request.hotel,
      rooms: request.rooms,
      phone: request.phone
    });
  };

  const handleSave = () => {
    updateDemoRequest(editingId, editData);
    setEditingId(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleDelete = id => {
    if (confirm('Are you sure you want to delete this demo request?')) {
      deleteDemoRequest(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center gap-2 flex-1 w-full sm:w-auto">
            <FiSearch size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or hotel..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <FiFilter size={18} className="text-gray-400" />
            <select
              value={filterRooms}
              onChange={e => setFilterRooms(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Rooms</option>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4 Rooms</option>
              <option value="5">5+ Rooms</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Demo Requests ({filteredRequests.length})
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Hotel</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Rooms</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map(request => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {editingId === request._id ? (
                      <input
                        value={editData.name}
                        onChange={e =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      request.name
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {editingId === request._id ? (
                      <input
                        value={editData.email}
                        onChange={e =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      request.email
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {editingId === request._id ? (
                      <input
                        value={editData.hotel}
                        onChange={e =>
                          setEditData({ ...editData, hotel: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      request.hotel
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {editingId === request._id ? (
                      <input
                        type="number"
                        value={editData.rooms}
                        onChange={e =>
                          setEditData({ ...editData, rooms: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      request.rooms
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {editingId === request._id ? (
                      <input
                        value={editData.phone}
                        onChange={e =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      request.phone
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {editingId === request._id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                        >
                          <FiSave size={12} /> Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 text-white px-3 py-1 rounded text-xs"
                        >
                          <FiX size={12} /> Cancel
                        </button>
                      </div>
                    ) : (
                      <div
                        className="relative"
                        ref={dropdownOpen === request._id ? dropdownRef : null}
                      >
                        <button
                          onClick={e => {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            setDropdownPos({
                              top: rect.bottom + 6,
                              left: rect.right - 140
                            });
                            setDropdownOpen(
                              dropdownOpen === request._id
                                ? null
                                : request._id
                            );
                          }}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-xs"
                        >
                          <FiSettings size={14} />
                        </button>

                        {dropdownOpen === request._id && (
                          <div
                            className="fixed w-32 bg-white rounded-lg shadow-lg border z-[9999]"
                            style={{
                              top: dropdownPos.top,
                              left: dropdownPos.left
                            }}
                          >
                            <button
                              onClick={() => {
                                handleEdit(request);
                                setDropdownOpen(null);
                              }}
                              className="w-full flex gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              <FiEdit2 size={12} /> Edit
                            </button>

                            <button
                              onClick={() => {
                                handleDelete(request._id);
                                setDropdownOpen(null);
                              }}
                              className="w-full flex gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <FiTrash2 size={12} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
