import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { FiSearch, FiFilter, FiDownload, FiEdit2, FiTrash2, FiSave, FiX, FiSettings, FiCheck, FiXCircle, FiEye } from 'react-icons/fi';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function MeetingRequestsPage({ meetingRequests, updateRequestStatus, updateMeetingRequest, deleteMeetingRequest }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelRequestId, setCancelRequestId] = useState(null);
  const [cancellationReason, setCancellationReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const menuRefs = useRef({});

  const cancellationReasons = [
    'Schedule conflict',
    'Client unavailable',
    'Technical issues',
    'Emergency situation',
    'Resource unavailable',
    'Other'
  ];

  const handleCancelRequest = (requestId) => {
    setCancelRequestId(requestId);
    setShowCancelModal(true);
  };

  const confirmCancellation = () => {
    if (!cancellationReason && !customReason.trim()) return;
    
    const finalReason = customReason.trim() || cancellationReason;
    updateRequestStatus(cancelRequestId, 'cancelled', finalReason);
    setShowCancelModal(false);
    setCancelRequestId(null);
    setCancellationReason('');
    setCustomReason('');
  };

  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setShowViewModal(true);
  };

  const getMenuItems = (request) => {
    const items = [
      {
        label: 'View Details',
        icon: 'pi pi-eye',
        command: () => handleViewRequest(request)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => handleEdit(request)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => handleDelete(request._id)
      }
    ];

    if (request.status === 'pending') {
      items.push(
        {
          label: 'Confirm',
          icon: 'pi pi-check',
          command: () => updateRequestStatus(request._id, 'confirmed')
        },
        {
          label: 'Cancel',
          icon: 'pi pi-times',
          command: () => handleCancelRequest(request._id)
        }
      );
    } else {
      items.push({
        label: 'Reset',
        icon: 'pi pi-refresh',
        command: () => updateRequestStatus(request._id, 'pending')
      });
    }

    return items;
  };

  const filteredRequests = meetingRequests.filter(request => {
    const name = request.clientName || request.name || '';
    const email = request.clientEmail || request.email || '';
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  console.log('Meeting Requests Data:', meetingRequests);

  const exportToCSV = () => {
    if (filteredRequests.length === 0) {
      alert('No data to export!');
      return;
    }

    const headers = ['Name', 'Email', 'Phone', 'Date', 'Time', 'Status', 'Message', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...filteredRequests.map(request => [
        `"${request.name}"`,
        `"${request.email}"`,
        `"${request.phone}"`,
        `"${request.date}"`,
        `"${request.time}"`,
        `"${request.status}"`,
        `"${request.message || ''}"`,
        `"${new Date(request.createdAt).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `meeting-requests-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEdit = (request) => {
    setEditingId(request._id);
    
    // Format date for input field
    let formattedDate = '';
    if (request.date) {
      try {
        if (typeof request.date === 'string') {
          if (request.date.includes('T') || request.date.includes('Z')) {
            // ISO date string
            formattedDate = new Date(request.date).toISOString().split('T')[0];
          } else if (request.date.includes('-') && request.date.length === 10) {
            // Already in YYYY-MM-DD format
            formattedDate = request.date;
          } else {
            // Try to parse and format
            const parsed = new Date(request.date);
            if (!isNaN(parsed.getTime())) {
              formattedDate = parsed.toISOString().split('T')[0];
            }
          }
        } else {
          // Date object
          formattedDate = new Date(request.date).toISOString().split('T')[0];
        }
      } catch (error) {
        formattedDate = '';
      }
    }
    
    // Format time for input field - ensure 24-hour format
    let formattedTime = '';
    if (request.time) {
      if (typeof request.time === 'string') {
        // If already in HH:MM format, use as is
        if (request.time.match(/^\d{1,2}:\d{2}$/)) {
          formattedTime = request.time.padStart(5, '0'); // Ensure 2-digit hour
        } else {
          formattedTime = request.time;
        }
      } else {
        formattedTime = request.time;
      }
    }
    
    setEditData({
      date: formattedDate,
      time: formattedTime
    });
  };

  const handleSave = () => {
    updateMeetingRequest(editingId, editData);
    setEditingId(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const nameBodyTemplate = (rowData) => {
    return <div className="font-medium">{rowData.clientName || rowData.name || 'N/A'}</div>;
  };

  const emailBodyTemplate = (rowData) => {
    return <div>{rowData.clientEmail || rowData.email || 'N/A'}</div>;
  };

  const phoneBodyTemplate = (rowData) => {
    return <div>{rowData.clientPhone || rowData.phone || 'N/A'}</div>;
  };

  const dateTimeBodyTemplate = (rowData) => {
    const formatDate = (dateValue) => {
      if (!dateValue) return 'N/A';
      
      try {
        let date;
        if (typeof dateValue === 'string') {
          if (dateValue.includes('T') || dateValue.includes('Z')) {
            date = new Date(dateValue);
          } else if (dateValue.includes('-')) {
            // Handle YYYY-MM-DD format
            return dateValue;
          } else {
            return dateValue;
          }
        } else {
          date = new Date(dateValue);
        }
        
        if (date && !isNaN(date.getTime())) {
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        }
        return 'Invalid Date';
      } catch (error) {
        return 'Invalid Date';
      }
    };

    const formatTime = (timeValue) => {
      if (!timeValue) return 'N/A';
      
      // If time is in HH:MM format, return as is
      if (typeof timeValue === 'string' && timeValue.includes(':')) {
        return timeValue;
      }
      
      // If time is a number or other format, try to convert
      try {
        const time = new Date(`2000-01-01T${timeValue}`);
        if (!isNaN(time.getTime())) {
          return time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          });
        }
      } catch (error) {
        // Return as is if conversion fails
      }
      
      return timeValue;
    };

    if (editingId === rowData._id) {
      return (
        <div className="space-y-2">
          <input
            type="date"
            value={editData.date || ''}
            onChange={(e) => setEditData({...editData, date: e.target.value})}
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
          <input
            type="time"
            value={editData.time || ''}
            onChange={(e) => setEditData({...editData, time: e.target.value})}
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
          <div className="flex gap-1">
            <Button
              icon="pi pi-check"
              className="p-button-success p-button-sm"
              onClick={handleSave}
              tooltip="Save"
            />
            <Button
              icon="pi pi-times"
              className="p-button-secondary p-button-sm"
              onClick={handleCancel}
              tooltip="Cancel"
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>{formatDate(rowData.date)}</div>
        <div className="text-sm text-gray-500">{formatTime(rowData.time)}</div>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    const getSeverity = (status) => {
      switch (status) {
        case 'confirmed': return 'success';
        case 'cancelled': return 'danger';
        case 'pending': return 'warning';
        default: return 'info';
      }
    };

    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center gap-2">
        <Button
          icon="pi pi-cog"
          className="p-button-text p-button-sm"
          onClick={(e) => {
            if (!menuRefs.current[rowData._id]) {
              menuRefs.current[rowData._id] = React.createRef();
            }
            menuRefs.current[rowData._id].current?.toggle(e);
          }}
        />
        <Menu
          ref={(el) => {
            if (!menuRefs.current[rowData._id]) {
              menuRefs.current[rowData._id] = { current: null };
            }
            menuRefs.current[rowData._id].current = el;
          }}
          model={getMenuItems(rowData)}
          popup
        />
      </div>
    );
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this meeting request?')) {
      deleteMeetingRequest(id);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row items-start sm:items-center">
          <div className="flex items-center gap-2 flex-1 w-full">
            <FiSearch size={16} className="text-gray-400 sm:w-[18px] sm:h-[18px]" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <FiFilter size={16} className="text-gray-400 sm:w-[18px] sm:h-[18px]" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <button 
            onClick={exportToCSV}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all w-full sm:w-auto"
          >
            <FiDownload size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Meeting Requests Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Meeting Requests ({filteredRequests.length})</h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                <span>Pending</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                <span>Cancelled</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Cards View */}
        <div className="block md:hidden">
          <div className="divide-y divide-gray-200">
            {filteredRequests.map((request) => (
              <div key={request._id} className="p-3 sm:p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{request.clientName || request.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{request.clientEmail || request.email}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{request.clientPhone || request.phone}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      request.status === 'available' ? 'bg-green-400' :
                      request.status === 'confirmed' ? 'bg-blue-400' :
                      request.status === 'cancelled' ? 'bg-red-400' :
                      'bg-yellow-400'
                    }`}></div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.status === 'available' ? 'bg-green-100 text-green-800' :
                      request.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                      request.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status === 'available' ? 'Available' :
                       request.status === 'confirmed' ? 'Booked' :
                       request.status === 'cancelled' ? 'Cancelled' :
                       'Pending'}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Date:</span>
                    <div className="text-gray-600 break-words">
                      {(() => {
                        if (!request.date) return 'N/A';
                        try {
                          let date;
                          if (typeof request.date === 'string') {
                            if (request.date.includes('T') || request.date.includes('Z')) {
                              date = new Date(request.date);
                            } else if (request.date.includes('-') && request.date.length === 10) {
                              return request.date;
                            } else {
                              return request.date;
                            }
                          } else {
                            date = new Date(request.date);
                          }
                          
                          if (date && !isNaN(date.getTime())) {
                            return date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit'
                            });
                          }
                          return 'Invalid Date';
                        } catch (error) {
                          return 'Invalid Date';
                        }
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Time:</span>
                    <div className="text-gray-600">{request.time || 'N/A'}</div>
                  </div>
                </div>

                {request.status === 'pending' ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => updateRequestStatus(request._id, 'confirmed')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleCancelRequest(request._id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => updateRequestStatus(request._id, 'pending')}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          {filteredRequests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No meeting requests found.</p>
              <p className="text-sm mt-2">Total requests in system: {meetingRequests.length}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRequests.map((request) => (
                    <tr key={request._id} className={`hover:bg-gray-50 ${
                      request.status === 'available' ? 'bg-green-50' :
                      request.status === 'confirmed' ? 'bg-blue-50' :
                      request.status === 'cancelled' ? 'bg-red-50' :
                      'bg-yellow-50'
                    }`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{request.clientName || request.name || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.clientEmail || request.email || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.clientPhone || request.phone || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingId === request._id ? (
                          <input
                            type="date"
                            value={editData.date || ''}
                            onChange={(e) => setEditData({...editData, date: e.target.value})}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        ) : (
                          <div className="text-sm text-gray-900">
                            {(() => {
                              if (!request.date) return 'N/A';
                              try {
                                let date;
                                if (typeof request.date === 'string') {
                                  if (request.date.includes('T') || request.date.includes('Z')) {
                                    date = new Date(request.date);
                                  } else if (request.date.includes('-') && request.date.length === 10) {
                                    return request.date;
                                  } else {
                                    return request.date;
                                  }
                                } else {
                                  date = new Date(request.date);
                                }
                                
                                if (date && !isNaN(date.getTime())) {
                                  return date.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                  });
                                }
                                return 'Invalid Date';
                              } catch (error) {
                                return 'Invalid Date';
                              }
                            })()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingId === request._id ? (
                          <div className="flex gap-1 items-center">
                            <input
                              type="time"
                              value={editData.time || ''}
                              onChange={(e) => setEditData({...editData, time: e.target.value})}
                              className="px-2 py-1 border border-gray-300 rounded text-sm"
                            />
                            <button
                              onClick={handleSave}
                              className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs"
                            >
                              <FiCheck size={12} />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
                            >
                              <FiX size={12} />
                            </button>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-900">{request.time || 'N/A'}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            request.status === 'available' ? 'bg-green-400' :
                            request.status === 'confirmed' ? 'bg-blue-400' :
                            request.status === 'cancelled' ? 'bg-red-400' :
                            'bg-yellow-400'
                          }`}></div>
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            request.status === 'available' ? 'bg-green-100 text-green-800' :
                            request.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                            request.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {request.status === 'available' ? 'Available' :
                             request.status === 'confirmed' ? 'Booked' :
                             request.status === 'cancelled' ? 'Cancelled' :
                             'Pending'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              if (editingId) return; // Prevent menu when editing
                              if (!menuRefs.current[request._id]) {
                                menuRefs.current[request._id] = React.createRef();
                              }
                              menuRefs.current[request._id].current?.toggle(e);
                            }}
                            disabled={editingId !== null}
                            className={`p-2 rounded-lg transition-colors ${
                              editingId !== null ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 text-gray-600'
                            }`}
                          >
                            <FiSettings size={20} />
                          </button>
                          {editingId === null && (
                            <Menu
                              ref={(el) => {
                                if (!menuRefs.current[request._id]) {
                                  menuRefs.current[request._id] = { current: null };
                                }
                                menuRefs.current[request._id].current = el;
                              }}
                              model={getMenuItems(request)}
                              popup
                              className="w-48"
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* View Details Modal */}
      {showViewModal && selectedRequest && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl border border-gray-200 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Meeting Request Details</h3>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiX size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="text-gray-900">{selectedRequest.clientName || selectedRequest.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900">{selectedRequest.clientEmail || selectedRequest.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <p className="text-gray-900">{selectedRequest.clientPhone || selectedRequest.phone}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Meeting Purpose</label>
                <p className="text-gray-900">{selectedRequest.message || 'No purpose specified'}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Date & Time</label>
                <p className="text-gray-900">
                  {(() => {
                    const formatDate = (dateValue) => {
                      if (!dateValue) return 'N/A';
                      
                      let date;
                      if (typeof dateValue === 'string') {
                        if (dateValue.includes('T') || dateValue.includes('Z')) {
                          date = new Date(dateValue);
                        } else {
                          return dateValue;
                        }
                      } else {
                        date = new Date(dateValue);
                      }
                      
                      return date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      });
                    };
                    
                    return `${formatDate(selectedRequest.date)} at ${selectedRequest.time}`;
                  })()
                  }
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                  selectedRequest.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  selectedRequest.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedRequest.status}
                </span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Created At</label>
                <p className="text-gray-900">{new Date(selectedRequest.createdAt).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancellation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl border border-gray-200 relative z-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancel Meeting</h3>
            <p className="text-gray-600 mb-4">Please select a reason or add a message:</p>
            
            {/* Dropdown */}
            <select
              value={cancellationReason}
              onChange={(e) => setCancellationReason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 mb-4"
            >
              <option value="">Select a reason...</option>
              {cancellationReasons.map((reason) => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
            
            {/* Message Textarea - Always visible */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cancellation Message:
              </label>
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Enter cancellation message..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setCancelRequestId(null);
                  setCancellationReason('');
                  setCustomReason('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmCancellation}
                disabled={!cancellationReason && !customReason.trim()}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white rounded-lg transition-colors"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}