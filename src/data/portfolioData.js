import bloodDonationImage from "../assets/blood-donation.jpeg";
import runnerUpImage from "../assets/runnerup.jpeg";
import winnerImage from "../assets/winner.jpeg";

export const profile = {
  name: "Harish Kumar",
  role: "Full Stack Developer",
  intro:
    "I am a passionate Full Stack Developer (MERN Stack) who has completed MCA from Chandigarh University and enjoys building practical products with clean user experiences.",
  about:
    "I am a full stack developer focused on turning product ideas into polished digital experiences. I enjoy building modern interfaces with React, reliable APIs, and clean architecture that teams can grow over time.",
  email: "choudharyharish22@gmail.com",
  phone: "+91 80917 30740",
};

export const skills = [
  { name: "HTML5", detail: "Semantic structure, accessibility, and responsive layouts." },
  { name: "CSS3", detail: "Modern styling, animations, and responsive design principles." },
  { name: "JavaScript", detail: "Dynamic functionality, DOM manipulation, and asynchronous programming." },
  { name: "React", detail: "Reusable component systems and state-driven UI." },
  { name: "Tailwind CSS", detail: "Responsive interfaces with utility-first design." },
  { name: "Node.js", detail: "REST APIs, authentication, and business logic." },
  { name: "Express.js", detail: "Scalable backend routing and middleware architecture." },
  { name: "MongoDB", detail: "Schema design, indexing, and query optimization." },
  { name: "Git & GitHub", detail: "Version control, collaboration, and code review workflows." },
  { name: "Postman", detail: "API testing, debugging, and request automation." },
];

export const projects = [
  {
    title: "HeartLink Chat",
    summary:
      "A real-time MERN chat application with authentication, Socket.IO messaging, and a clean, responsive UI.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image:
      "https://1drv.ms/i/c/f95e90109b12dfef/IQCbYD7ipI8QR55uEuhEQiZ1AWHD4_YvT21DFuoFG2XXzE4?e=79p7Aw",
    liveUrl: "https://chat-app-dun-theta-20.vercel.app/",
    codeUrl: "https://github.com/harishX0/Chat_app",
  },
  {
    title: "Commerce Platform",
    summary:
      "An e-commerce storefront featuring category filters, cart flow, secure checkout, and order history.",
    stack: ["React", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/",
  },
  {
    title: "AI Notes App",
    summary:
      "A productivity app that organizes notes, extracts action items, and supports smart content search.",
    stack: ["React", "TypeScript", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/",
  },
];

export const academicAchievements = [
  {
    title: "2nd Prize - 1600m Race",
    event: "Sports Day Event, Chandigarh University",
    description:
      "Secured 2nd prize in the 1600m race during the Sports Day event at Chandigarh University.",
    image: runnerUpImage,
  },
  {
    title: "Volunteer - Blood Donation Camp",
    event: "University Community Service Activity",
    description:
      "Actively volunteered in the blood donation camp and supported event coordination.",
    image: bloodDonationImage,
  },
  {
    title: "NSS Closing Ceremony Recognition",
    event: "National Service Scheme, Chandigarh University",
    description:
      "Recognized during the NSS closing ceremony for consistent participation and contribution.",
    image: winnerImage,
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/harishX0" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/harishx0/" },
  { name: "Email", url: "mailto:choudharyharish22@gmail.com" },
  { name: "WhatsApp", url: "https://wa.me/918091730740" },
];
