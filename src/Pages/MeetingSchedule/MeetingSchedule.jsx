import { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function MeetingSchedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [step, setStep] = useState(1); // 1: Calendar, 2: Time Slots, 3: Form, 4: Success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Auto-update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Auto-refresh slots when date/time changes
  useEffect(() => {
    if (selectedDate && step === 2) {
      fetchAvailableSlots(selectedDate);
    }
  }, [currentTime, selectedDate, step]);

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date(currentTime);
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();
      
      // Fix: Use local date string instead of ISO string
      const dateYear = date.getFullYear();
      const dateMonth = String(date.getMonth() + 1).padStart(2, '0');
      const dateDay = String(date.getDate()).padStart(2, '0');
      const dateString = `${dateYear}-${dateMonth}-${dateDay}`;
      
      const isSelected = selectedDate === dateString;
      
      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        dateString
      });
    }
    
    return days;
  };

  // Fetch available slots for selected date
  const fetchAvailableSlots = async (date) => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/meetings/slots/${date}`);
      const result = await response.json();
      
      if (result.success) {
        setAvailableSlots(result.data || []);
      } else {
        // Generate default slots if none exist (10:00 AM to 3:30 PM - 12 slots)
        const defaultSlots = [
          '10:00', '10:30', '11:00', '11:30',
          '12:00', '12:30', '13:00', '13:30',
          '14:00', '14:30', '15:00', '15:30'
        ];
        
        const slots = defaultSlots.map(time => ({
          time,
          status: 'available'
        }));
        
        setAvailableSlots(slots);
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle date selection
  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
    setSelectedTime('');
    fetchAvailableSlots(dateString);
    setStep(2);
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/meetings/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          time: selectedTime
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStep(4);
      } else {
        alert(result.message || 'Failed to book meeting. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to book meeting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Reset booking
  const resetBooking = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Filter slots based on current time if selected date is today
  const getFilteredSlots = () => {
    // Fix: Use same local date format for comparison
    const todayYear = currentTime.getFullYear();
    const todayMonth = String(currentTime.getMonth() + 1).padStart(2, '0');
    const todayDay = String(currentTime.getDate()).padStart(2, '0');
    const todayString = `${todayYear}-${todayMonth}-${todayDay}`;
    
    const isToday = selectedDate === todayString;
    
    if (!isToday) return availableSlots;
    
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    return availableSlots.map(slot => {
      const [hours, minutes] = slot.time.split(':').map(Number);
      const slotMinutes = hours * 60 + minutes;
      
      if (slotMinutes <= currentMinutes) {
        return { ...slot, status: 'past' };
      }
      return slot;
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Success Screen
  if (step === 4) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meeting Booked!</h2>
            <p className="text-gray-600 mb-6">
              Your meeting is scheduled for {selectedDate ? (() => {
                const [year, month, day] = selectedDate.split('-').map(Number);
                const date = new Date(year, month - 1, day);
                return date.toLocaleDateString();
              })() : ''} at {selectedTime}.
              We'll send you a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <button
                onClick={resetBooking}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Another Meeting
              </button>
              <a
                href="/"
                className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule a Meeting</h1>
          <p className="text-lg text-gray-300">Choose your preferred date and time</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
            }`}>
              1
            </div>
            <div className={`w-12 h-1 ${
              step >= 2 ? 'bg-white' : 'bg-gray-700'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
            }`}>
              2
            </div>
            <div className={`w-12 h-1 ${
              step >= 3 ? 'bg-white' : 'bg-gray-700'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
            }`}>
              3
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-800">
          {/* Step 1: Calendar */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-center text-white">Select a Date</h2>
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white"
                >
                  <FiChevronLeft size={20} />
                </button>
                <h3 className="text-lg font-semibold text-white">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((day, index) => (
                  <button
                    key={index}
                    onClick={() => !day.isPast && day.isCurrentMonth && handleDateSelect(day.dateString)}
                    disabled={day.isPast || !day.isCurrentMonth}
                    className={`p-3 text-sm rounded-lg transition-colors ${
                      day.isPast || !day.isCurrentMonth
                        ? 'text-gray-600 cursor-not-allowed'
                        : day.isSelected
                        ? 'bg-white text-black'
                        : day.isToday
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Time Slots */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiChevronLeft size={16} /> Back to Calendar
                </button>
                <h2 className="text-xl font-semibold text-white">
                  {selectedDate ? (() => {
                    const [year, month, day] = selectedDate.split('-').map(Number);
                    const date = new Date(year, month - 1, day);
                    return date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    });
                  })() : ''}
                </h2>
                <div></div>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                  <p className="text-gray-400 mt-2">Loading available slots...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {getFilteredSlots().map((slot, index) => {
                    const isBooked = slot.status === 'BOOKED';
                    const isPast = slot.status === 'past';
                    const isAvailable = slot.status === 'AVAILABLE' || slot.status === 'available' || slot.status === 'NOT_CREATED';
                    
                    return (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          if (isAvailable) {
                            handleTimeSelect(slot.time);
                          }
                        }}
                        disabled={!isAvailable}
                        className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                          isBooked
                            ? 'bg-red-900 text-red-300 cursor-not-allowed border border-red-800'
                            : isPast
                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
                            : 'bg-green-900 text-green-300 hover:bg-green-800 border border-green-700 cursor-pointer'
                        }`}
                        title={isBooked ? 'This slot is already booked' : isPast ? 'This slot has passed' : 'Click to select this slot'}
                      >
                        {slot.time}
                        {isBooked && <div className="text-xs mt-1 opacity-75">Booked</div>}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-900 rounded border border-green-700"></div>
                  <span className="text-gray-400">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-900 rounded border border-red-800"></div>
                  <span className="text-gray-400">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-800 rounded border border-gray-700"></div>
                  <span className="text-gray-400">Past</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Form */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiChevronLeft size={16} /> Back to Time Slots
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Selected:</p>
                  <p className="font-semibold text-white">
                    {selectedDate ? (() => {
                      const [year, month, day] = selectedDate.split('-').map(Number);
                      const date = new Date(year, month - 1, day);
                      return date.toLocaleDateString();
                    })() : ''} at {selectedTime}
                  </p>
                </div>
                <div></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <FiUser /> Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <FiMail /> Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <FiPhone /> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <FiMessageSquare /> Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <FiChevronLeft size={16} /> Back
                  </button>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-white text-black py-4 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    ) : (
                      <>
                        <FiCheck /> Confirm Booking
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}