# FlowtelAI Frontend

Modern React frontend for FlowtelAI - AI-powered hospitality solutions platform.

## 🚀 Features

- **AI Chatbot** - Gemini AI integration with real-time chat
- **Meeting Scheduler** - Professional meeting booking system
- **Newsletter Subscription** - Email subscription with toast notifications
- **Demo Requests** - Lead generation forms
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Tailwind CSS with smooth animations

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **React Toastify** - Toast notifications
- **Gemini AI** - Google's AI for chatbot

## 📱 Pages & Components

### Pages
- **Home** - Hero, features, integrations, CTA
- **About** - Company information and team
- **Careers** - Job opportunities
- **Meeting Scheduler** - Professional booking interface
- **Demo Request** - Lead generation form

### Components
- **Chatbot** - AI-powered chat with Gemini
- **Navbar** - Responsive navigation
- **Footer** - Newsletter subscription & links
- **Preloader** - Loading animation
- **BackToTop** - Smooth scroll to top

## 🤖 AI Chatbot Features

- **Gemini AI Integration** - Smart responses
- **Multi-option Interface** - Chat, Call, WhatsApp, Meeting
- **Real-time Chat** - Instant messaging
- **Typing Indicators** - Professional UX
- **Auto-scroll** - Smooth message flow

## 🛠️ Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your values:
   ```
   VITE_API_BASE_URL=http://localhost:3001
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔑 API Integration

### Backend Endpoints
- `POST /api/meeting` - Meeting requests
- `POST /api/newsletter` - Newsletter subscription
- `POST /api/demo` - Demo requests

### Environment Variables
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_GEMINI_API_KEY` - Google Gemini AI API key

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#2563eb to #1d4ed8)
- **Secondary**: Purple gradient (#7c3aed to #5b21b6)
- **Accent**: Green (#16a34a)
- **Background**: Slate gradients

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable text
- **Buttons**: Medium weight, proper spacing

### Components
- **Cards**: Rounded corners, subtle shadows
- **Forms**: Clean inputs with focus states
- **Buttons**: Gradient backgrounds, hover effects
- **Modals**: Centered, backdrop blur

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Medium screen layouts
- **Desktop** - Full-width layouts
- **Touch Friendly** - Large tap targets

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting
```

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Navbar/          # Navigation component
│   ├── Footer/          # Footer with newsletter
│   ├── Chatbot/         # AI chatbot interface
│   ├── BackToTop/       # Scroll to top button
│   ├── Modal/           # Reusable modal
│   └── Preloader/       # Loading animation
├── Pages/
│   ├── Hero/            # Landing page hero
│   ├── About/           # About page
│   ├── Careers/         # Careers page
│   ├── MeetingSchedule/ # Meeting booking
│   ├── GetDemoForm/     # Demo request form
│   └── [Other Pages]/   # Feature sections
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Modern JS** - ES6+ features
- **React Hooks** - Functional components

## 📊 Performance

- **Vite** - Fast HMR and builds
- **Code Splitting** - Route-based splitting
- **Image Optimization** - Optimized assets
- **Lazy Loading** - Components loaded on demand

## 🔒 Security

- **Environment Variables** - Secure API keys
- **Input Validation** - Form validation
- **XSS Protection** - Safe HTML rendering
- **HTTPS Ready** - SSL/TLS support

## 📝 License

MIT License - see LICENSE file for details.

---

**FlowtelAI Team** - Transforming hospitality with AI

## 🌟 Live Demo

Visit: [FlowtelAI.com](https://flowtelai.vercel.app)

## 📞 Support

- Email: anilkumarsingh43425@gmail.com
- Phone: +91 7079578207
- WhatsApp: +91 7079578207