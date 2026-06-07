Hanamon Catering Service
A modern, responsive catering business website featuring dark mode, WhatsApp integration, smooth scrolling, and a beautiful gallery to showcase culinary excellence.

https://via.placeholder.com/800x400?text=Hanamon+Catering+Preview

✨ Features
🌓 Dark/Light Mode Toggle – User preference saved in localStorage

📱 Fully Responsive – Mobile-first design works on all devices

💬 WhatsApp Integration – Floating chat button with pre-filled inquiry message

🧭 Smooth Navigation – Scroll to sections with React Router hash links

🖼️ Gallery Section – Showcase event photos with hover effects

⭐ Testimonials – Client reviews with star ratings

🍽️ Services Overview – Weddings, corporate events, birthdays, etc.

👨‍🍳 Chef Profile – About section with story and credentials

📞 Contact Info – Phone, email, social links, and WhatsApp CTA

⚡ Fast Performance – Built with Vite and Tailwind CSS

🛠️ Tech Stack
React 18 – UI library

React Router DOM – Client-side routing

Tailwind CSS v4 – Utility-first styling with dark mode

Vite – Build tool and dev server

Lucide React – Icon library

React Icons – Social media icons

PostCSS – CSS processing

📁 Project Structure
text
src/
├── assets/ # Logo and images
├── components/
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Footer.jsx
│ ├── Gallery.jsx
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── Services.jsx
│ ├── Testimonials.jsx
│ ├── WhatsAppButton.jsx
│ └── static/
│ └── SectionHeader.jsx
├── constants/
│ └── index.js # Services, gallery, testimonials data
├── context/
│ └── ThemeContext.jsx
├── layouts/
│ └── MainLayout.jsx
├── pages/
│ └── HomePage.jsx
├── App.jsx
├── main.jsx
└── index.css
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/yourusername/hanamon-catering.git
cd hanamon-catering
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open http://localhost:5173 in your browser

Build for Production
bash
npm run build
The output will be in the dist/ folder.

🔧 Configuration
WhatsApp Number
Update the WhatsApp number in src/constants/index.js:

javascript
export const whatsappConfig = {
number: "1234567890", // Replace with your actual number (include country code)
// ...
};
Contact Information
Update phone, email, and social links in src/components/Contact.jsx and src/components/Footer.jsx.

Logo
Replace src/assets/logo.jpeg with your own logo.

Gallery Images
Update the galleryImages array in src/constants/index.js with your own image URLs.

🎨 Customization
Colors
The primary accent color is amber/gold (amber-500). To change it:

Replace all amber-\* classes in components with your desired color (e.g., blue-500)

Update the gradient stops and border colors accordingly

Dark Mode
Dark mode is controlled by the ThemeContext and Tailwind's dark: variants. The dark class is toggled on the <html> element.
