import bloodDonationImage from "../assets/blood-donation.jpeg";
import runnerUpImage from "../assets/runnerup.jpeg";
import winnerImage from "../assets/winner.jpeg";
import heartImage from "../assets/heart.png";

export const profile = {
  name: "Harish Kumar",
  role: "Full Stack Developer",
  intro:
    "I am a results-driven Full Stack Developer (MERN) with a Master's in Computer Applications from Chandigarh University. I specialize in building scalable, user-centric web applications that combine technical excellence with seamless user experiences.",
  about:
    "As a Full Stack Developer, I am passionate about bridging the gap between complex backend logic and intuitive frontend design. My expertise lies in the MERN stack, where I focus on writing clean, maintainable code and building high-performance applications that solve real-world problems.",
  email: "choudharyharish22@gmail.com",
  phone: "+91 80917 30740",
};

export const skills = [
  { name: "HTML5", detail: "Expertise in semantic markup, SEO best practices, and accessibility standards." },
  { name: "CSS3", detail: "Advanced styling with Flexbox, Grid, and custom animations for responsive design." },
  { name: "JavaScript", detail: "Deep understanding of ES6+, DOM manipulation, and modern asynchronous patterns." },
  { name: "React", detail: "Building complex, state-driven UIs with a focus on component reusability and performance." },
  { name: "Tailwind CSS", detail: "Rapid UI development using utility-first principles for highly customized designs." },
  { name: "Node.js", detail: "Developing robust server-side applications and efficient background processes." },
  { name: "Express.js", detail: "Designing scalable RESTful APIs and middleware for secure data handling." },
  { name: "MongoDB", detail: "Data modeling, aggregation pipelines, and database performance tuning." },
  { name: "Git & GitHub", detail: "Proficient in version control, branching strategies, and collaborative workflows." },
  { name: "Postman", detail: "Comprehensive API testing and documentation for reliable integration." },
];

export const projects = [
  {
    title: "HeartLink Chat",
    summary:
      "A real-time messaging application featuring secure authentication and instant communication via Socket.IO, delivered with a modern, responsive interface.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image: heartImage,
    liveUrl: "https://heartlink-front.onrender.com",
    codeUrl: "https://github.com/harishX0/Chat_app"
  },
  {
    title: "Modern E-Store",
    summary:
      "A fully functional e-commerce storefront with advanced category filtering, dynamic cart management, and a streamlined checkout process.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://github.com/harishX0",
    codeUrl: "https://github.com/harishX0",
  },
  {
    title: "ApnaBazaar",
    summary:
      "A feature-rich e-commerce platform focused on delivering an intuitive shopping experience through optimized performance and responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://harishx0.github.io/apnabazaar/",
    codeUrl: "https://github.com/harishX0/apnabazaar.git",
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
