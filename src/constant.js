// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java1.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


// Project Section Logo's
import aiCodereview from "./assets/work_logo/AiCodeReview.png";
import newsPoint from "./assets/work_logo/newspoint.png";
import myntra from "./assets/work_logo/Myntra.png";
import netflix from "./assets/work_logo/netflix.png";
import codeHelp from "./assets/work_logo/codeHelp.png";
import amazon from "./assets/work_logo/Amazon.png";
import qrCode from "./assets/work_logo/qrcode.png";
import weather from "./assets/work_logo/weather.png";
import calculator from "./assets/work_logo/calculator.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];


export const projects = [
  {
    id: 0,
    title: "Ai Powered Code Review Application",
    description:
      "AI Code Reviewer is a smart and interactive web application built with React.js and Express.js that allows developers to receive instant, high-quality code reviews. Simply paste your code into the editor, and the AI—powered by Gemini 2.0 Flash—analyzes it for bugs, bad practices, and improvements. The app returns detailed suggestions, performance tips, and corrected code, helping users write clean, efficient, and production-ready JavaScript. With its intuitive UI and powerful AI backend, this tool is perfect for students, professionals, and coding enthusiasts.",
    image: aiCodereview,
    tags: [
      "JavaScript",
      "React.js",
      "Express.js",
      "Node.js",
      "Gemini AI",
      "Tailwind CSS",
    ],

    github: "https://github.com/ArpitPandey01/Ai-codeReview",
    webapp: "https://ai-codereview-l072.onrender.com/",
  },
  {
    id: 1,
    title: "News Point Application",
    description:
      "Built a responsive news application using React.js and NewsAPI to fetch and display articles across various categories. Leveraged component-based architecture and effective state management to handle dynamic content and user interactions. Strengthened skills in RESTful API integration, asynchronous data fetching, and modern frontend development practices.",
    image: newsPoint,
    tags: ["React JS", "Node.js", "NewsApi", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ArpitPandey01/NewsPoint-Application",
  },
  {
    id: 2,
    title: "Myntra React Clone",
    description:
      "Developed a responsive e-commerce user interface inspired by Myntra using React.js. Utilized modular React components and custom CSS to create an intuitive product layout and smooth navigation experience. Implemented state management to handle dynamic content and enhance overall interactivity.",
    image: myntra,
    tags: ["React JS", "API", "Express.JS", "NodeJS", "JavaScript"],
    github: "https://github.com/ArpitPandey01/Myntra-Clone",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Designed a responsive Netflix-inspired landing page using HTML, CSS, and JavaScript. Focused on replicating the look and feel of the original platform with pixel-perfect layout, modern design elements, and interactive visual components to enhance the user experience.",
    image: netflix,
    tags: ["Html", "Css", "JavaScript"],
    github: "https://github.com/ArpitPandey01/NetflixClone",
    webapp: "https://thexclone.netlify.app/",
  },
  {
    id: 4,
    title: "Code Help – Blogging Website",
    description:
      "Developed a simple, responsive blogging site using Bootstrap, HTML, and CSS. Implemented a clean layout for blog posts, navigation, and responsive design to ensure smooth readability across devices. Integrated GitHub Pages deployment for easy sharing and maintenance.",
    image: codeHelp,
    tags: ["Bootstrap", "HTML", "CSS", "Responsive Design"],
    github: "https://github.com/ArpitPandey01/CodeHelp",
    webapp: "https://codehelp15.netlify.app/",
  },

  {
    id: 5,
    title: "QR Code Generator",
    description:
      "Created a simple web application that generates QR codes from text input, utilizing the free QR Server API. Users can enter any text, instantly generate a QR code, and download it as an image. Built with clean HTML, CSS, and vanilla JavaScript.",
    image: qrCode,
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/Arpitk98/QR_code_generator",
    webapp: "https://qrcodegenerator15.netlify.app/",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Built a responsive weather application using HTML, CSS, and JavaScript that fetches real-time weather data based on user input. Integrated with the OpenWeatherMap API to display current temperature, humidity, and weather conditions for any searched city.",
    image: weather,
    tags: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
    github: "https://github.com/ArpitPandey01/WeatherApp",
    webapp: "https://theopweather.netlify.app/",
  },
  {
    id: 7,
    title: "Amazon Clone",
    description:
      "Built a static clone of the Amazon homepage using HTML, CSS, and JavaScript. Focused on replicating the visual layout and structure of the original site, including header, banner, and product sections. Designed primarily for desktop view without responsive features.",
    image: amazon,
    tags: ["HTML", "CSS", "JavaScript", "UI Clone"],
    github: "https://github.com/ArpitPandey01/Amazon",
    webapp: "https://arpitamazon.netlify.app/",
  },
  {
    id: 8,
    title: "Calculator",
    description:
      "A responsive and interactive calculator built using HTML, CSS, and JavaScript. This static web application performs basic arithmetic operations with a clean UI and smooth button interactions. Designed to be lightweight, fast, and mobile-friendly for seamless user experience.",
    image: calculator,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/ArpitPandey01/Calculator",
    webapp: "https://arpitcalculatorr.netlify.app/",
  },
];
