# FIT30

FIT30 is a client-side web application designed to guide users through a structured 30-day workout program. Users complete daily workouts, with each subsequent day unlocking only after the previous day is completed. All progress is saved locally without requiring user registration or login.
Complete this training program if you want to:

1. Follow a simple 30-day program with guaranteed results
2. Get fit, healthy, strong and shredded
3. Learn more about gym, training and technique
4. Become a lifetime fitness buddy with FIT30 💛

## Features

📅 30-Day Progressive Program - Structured daily workouts with incremental difficulty
🔒 Sequential Day Unlocking - Complete Day N to unlock Day N+1
💾 Persistent Progress Tracking - Auto-save functionality using browser storage
🚫 No Authentication Required - Zero-friction start, no registration needed
📱 Responsive Design - Works seamlessly on desktop, tablet, and mobile
🎓 Educational Content - Exercise instructions and technique guidance
⚡ Fast & Lightweight - Client-side only, no backend dependencies

## Tech stack

- Frontend: React (CRA / Vite)
- Optional: Docker for local/dev environments

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or database required

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fit30.git
   cd fit30
   ```

2. **Open in browser**

   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or use a local server (recommended)
   npx serve
   # or
   python -m http.server 8000
   ```

3. **Start training!**
   - Navigate to `http://localhost:8000`
   - Begin with Day 1
   - Complete exercises to unlock subsequent days

## 📁 Project Structure

``` bash
fit30/
├── index.html              # Main application entry point
├── css/
│   └── styles.css         # Application styles
├── js/
│   ├── app.js             # Main application logic
│   ├── storage.js         # Progress persistence layer
│   └── workouts.js        # 30-day workout data
├── assets/
│   ├── images/            # Exercise demonstrations
│   └── icons/             # UI icons
├── README.md
└── LICENSE
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Keep it simple and client-side only
- Maintain vanilla JavaScript (no framework dependencies)
- Ensure mobile responsiveness
- Write clear comments for workout data
- Test across multiple browsers

## 💡 Use Cases

- Personal fitness journey
- Gym training companion
- Home workout program
- Fitness education tool
- Habit building application

## Author

Kaushal Bhattarai
