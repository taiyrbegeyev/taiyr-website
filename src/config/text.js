const about_me = {
  about_me: 'Hallo! My name is Taiyr. I am a second year Computer Science student at Jacobs University Bremen, Germany. Besides being a student, I am also a full-stack developer with some pretty decent experience. I am passionate about building community, technology and making opportunities accessible for everyone!'
}

const experience = {
  teaching_assistant: {
    title: "Teaching Assistant, Jacobs University Bremen",
    subtitle: "Programming in C and C++",
    date: "09/2019 - 12/2019",
    description: [
      "Coordinate instructional efforts with professor",
      "Tutor 170 students and assist with assignments, imperative and object-oriented programming concepts",
      "Monitor students during class work and exams",
      "Provide assistant to professor in terms of preparing lesson outlines"
    ]
  },
  medikura: {
    title: "Full-Stack Developer Intern, Medikura",
    subtitle: "https://www.medikura.com/en/",
    date: "06/2019 – 09/2019",
    description: [
      "Medikura develops the digital infrastructure for modern drug safety by enabling real-time reporting of side-effects which connects patient, doctors, pharmacists, pharma companies and authorities on an easy-to-use real-time platform.",
      "Built React.JS/Redux app to add account management and enable pharma companies to exchange structured messages with patients",
      "Worked on Node.JS microservice to aggregate and filter information from an external API",
      "Turned Figma mockups into user interfaces using React.JS, Styled Components and Material-UI",
      "Standardized and improve code style and structure across several React.JS projects",
      "Worked on Node.JS app with handlebars templates to generate and download PDFs from HTML and CSS",
      "Learned and applied clean coding software engineering principles through code reviews and pair programming",
      "Reviewed code of other developers",
      "Learned Agile principles by working in fast-paced scrum team"
    ]
  },
  method: {
    title: "Summer Internship Program | MethodPro, Almaty, KZ",
    subtitle: "http://pro.method.kz/",
    date: "06/2018 – 07/2018",
    description: [
      "Studied HTML, CSS, JavaScript and Python over the course of 8 weeks",
      "Worked on business cases from several Kazakhstani companies"
    ]
  }
}

const education = [
  {
    university: "Jacobs University Bremen",
    location: "Bremen, Germany",
    date: "09/2018 – Present",
    major: "Computer Science",
    courses: {
      year_1: [
        "Introduction to Computer Science",
        "Algorithms and Data Structures",
        "Programming in C",
        "Objected Oriented programming in C++",
        "Advanced Programming in Python",
        "Calculus I",
        "Calculus II",
        "Linear Algebra I",
        "Linear Algebra II",
        "Introduction to Intelligent Mobile Systems",
        "Introduction to Intelligent Mobile Systems Lab",
        "Industrial Engineering",
        "Industrial Engineering Lab",
        "Introduction to Logistics",
        "Ethics in Science and Technology",
        "Fundamentals of International Business",
        "German A1.1",
        "German A1.2"
      ],
      year_2: [
        "Operating Systems",
        "Computer Networks",
        "Computer Architecture and Programming Languages",
        "Formal Languages and Logic",
        "Secure and Dependable Systems",
        "Computability and Complexity",
        "Machine Learning",
        "Data Bases and Web Services",
        "Software Engineering",
        "Computer Graphics",
        "Computer Vision",
        "Elements of Probability",
        "German A2.1",
        "German A2.2"
      ]
    }
  }
]

const skills = [
  {
    type: 'ReactJS',
    level: '90'
  },
  {
    type: 'Javascript',
    level: '80'
  },
  {
    type: 'C/C++',
    level: '90'
  },
  {
    type: 'NodeJS (Express.js)',
    level: '70'
  },
  {
    type: 'Python',
    level: '60'
  },
  {
    type: 'HTML/CSS',
    level: '90'
  },
  {
    type: 'git',
    level: '90'
  },
  {
    type: 'mySQL',
    level: '65'
  }
]

const projects = {
  trump_bot: {
    name: "Trump Bot",
    description: "Telegram Bot that can search for the dumbest things Donald Trump has ever said by keyword. If you want some diversity, random quote and meme options are available.",
    link: "https://www.github.com/taiyrbegeyev/trump_genius_bot"
  },
  weather_app: {
    name: "Weather Application",
    description: "Weather App that fetches API from openweathermap. User is asked to input a city and a country he or she wants to get information about. The temperature, humidity and conditions are displayed to the user.",
    link: "https://www.github.com/taiyrbegeyev/weather-app"
  },
  campus_life: {
    name: "Campus Life",
    description: "Work on the front-end and back-end of the unified Campus Website : Campus Store, Campus Life and Campus People.",
    link: "https://www.github.com/techclubjacobs/"
  },
  browser_control: {
    name: "Browser Control",
    description: "Arduino project that deals with controlling a web browser using hand gestures. It uses ultrasonic sensors to detect the motion of the hand and utilise Arduino and Python to manage a web browser. It allows hand gestures to carry out certain functions on a web browser such as scrolling up and down or switching to different tabs open in a window.",
    link: "https://www.github.com/taiyrbegeyev/Browser-Control"
  }
}

export {
  about_me, experience, education, skills, projects
}
