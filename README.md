# FlowtelAI Admin Panel

A modern, responsive admin panel for managing meeting requests and slots built with React and Tailwind CSS.

## Features

- **Meeting Requests Management**: View, edit, confirm, and cancel meeting requests
- **Meeting Slots Management**: Create and manage available time slots
- **Real-time Status Updates**: Visual indicators for different meeting statuses
- **Email Notifications**: Automatic email notifications for booking updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Calendar**: Easy date selection for slot management

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **UI Components**: PrimeReact, React Icons
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with custom components

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anilkumarsin329/FlowtelAIE-Adminpanel.git
cd FlowtelAIE-Adminpanel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with automatic builds on every push

## Environment Variables

Create a `.env` file in the root directory and add:

```
REACT_APP_API_URL=your_backend_api_url
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── Pages/              # Main application pages
│   ├── MeetingRequestsPage.jsx
│   └── MeetingSlotsPage.jsx
├── utils/              # Utility functions
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Features Overview

### Meeting Requests
- View all meeting requests in a responsive table
- Filter by status (pending, confirmed, cancelled, available)
- Search by name or email
- Inline editing of date and time
- Bulk actions and individual request management
- Export data to CSV

### Meeting Slots
- Calendar-based date selection
- Create individual or bulk time slots
- Visual status indicators
- Slot management (create/delete)
- View booking details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@flowtelai.com or create an issue in this repository.