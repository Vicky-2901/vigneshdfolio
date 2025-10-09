/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vignesh D",
  title: "Hi all, I'm Vignesh D",
  subTitle: emoji(
    "Looking for an opportunity in a tech-driven organization where I can apply my skills in software development, data structures, and algorithms to create impactful solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cum5SR6tRT6LN94GL_Yj1My24Mug9l5z/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vicky-2901",
  linkedin: "https://www.linkedin.com/in/vignesh-d-74a418351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "vigneshdhandapani2023@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/share/1DVzuydhNW/",
  leetcode: "https://leetcode.com/u/bjEUq6bVge/",
  hackerrank: "https://www.hackerrank.com/profile/vigneshdhandapa2",
  medium: "",
  stackoverflow: "",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER SPECIALIZING IN BUSINESS SOLUTIONS USING JAVA, PYTHON, C, AND C++",
  skills: [
    emoji(
      "⚡ Developing robust enterprise applications and backend systems using Java for scalable business operations"
    ),
    emoji("⚡ Leveraging Python for data analysis, automation, and AI-driven business intelligence solutions"),
    emoji(
      "⚡ Implementing efficient system-level programming with C and C++ for high-performance business software"
    ),
    emoji("⚡ Integrating databases and cloud services to optimize business processes and workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-c++"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "M.Kumarasamy College Of Engineering, Karur",
      logo: require("./assets/images/MKCE-Logo.jpg"), // Placeholder logo, replace with your college logo if available
      subHeader: "B.Tech in Computer Science and Business Systems",
      duration: "August 2023 - April 2027",
      desc: "Currently pursuing Bachelor's degree in Computer Science and Business Systems.",
      descBullets: [
        "Focusing on software development, data structures, and business systems",
        "Engaged in various projects and coursework"
      ]
    },
    {
      schoolName: "Swamy Matric Hr Sec School, Palani",
      //logo: require("./assets/images/stanfordLogo.png"), // Placeholder logo, replace with your school logo if available
      subHeader: "Higher Secondary Education",
      duration: "July 2022 - April 2023",
      desc: "Completed higher secondary education.",
      descBullets: [
        "Focused on science and mathematics",
        "Participated in extracurricular activities"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "65%"
    },
    {
      Stack: "Communication Skills",
      progressPercentage: "80%"
    },
    {
      Stack: "Creative Thinking",
      progressPercentage: "85%"
    },
    {
      Stack: "Decision Making",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Foundation Of AI",
      company: "Edunet Foundation",
      companylogo: require("./assets/images/edu.jpg"),
      date: "2025 April 10 - 2025 May 10",
      desc: "Completed a one-month internship focusing on the foundations of AI.",
      descBullets: [
        "Gained knowledge in AI fundamentals",
        "Received certification upon completion"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Hostspacio",
      companylogo: require("./assets/images/Hostpacio.png"),
      date: "2025 June 30 - 2025 July 20",
      desc: "Completed a 20-day internship in web development.",
      descBullets: [
        "Gained hands-on experience in web technologies",
        "Contributed to development projects"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my notable projects showcasing my skills and contributions",
  projects: [
    {
      image: require("./assets/images/Spam.png.png"),
      projectName: "Spam Message Classifier",
      projectDesc: "A machine learning model that classifies SMS messages as spam or ham using text preprocessing, TF-IDF, and Naive Bayes.",
      footerLink: [
        {
          name: "Visit Website",
          //url: "http://saayahealth.com/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/Vicky-2901/Spam-message-classifier"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.jpeg"),
      projectName: "Portfolio",
      projectDesc: "A responsive portfolio website built with React, featuring interactive sections for skills, projects, and experiences. Designed to showcase professional achievements and provide an engaging user interface for potential collaborators.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vigneshdfolio.netlify.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/Vicky-2901/vigneshdfolio"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Certificate",
      subtitle: "Certificate in AI Fundamentals",
      image: require("./assets/images/edunet.png"),
      imageAlt: "AI Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1VSdbZwEKa-0mwSjUFnSydKzpe-BSEgAz/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Python Certificate",
      subtitle: "Certificate in Python Programming",
      image: require("./assets/images/nptel.webp"),
      imageAlt: "Python Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1s1fXjEQTf1JfWXyOjCp0dhvqjMbmzwf4/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Cloud Certificate",
      subtitle: "Certificate in Cloud Computing",
      image: require("./assets/images/nptel.webp"),
      imageAlt: "Cloud Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bRpvIt8xArO39YrORHvGWnQGHGZd-FNS/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Simplilearn Certificate",
      subtitle: "Introduction to Gen AI Studio",
      image: require("./assets/images/simplilearn.jpg"),
      imageAlt: "Simplilearn Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/14R1iiYFFHzEZeAAm1YJq-YXE0JoRg6D3/view?usp=drivesdk "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section 

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@vigneshdhandapani2023/ai-in-everyday-life-how-artificial-intelligence-is-changing-our-world-245398309bc7",
      title: "AI in Everyday Life: How Artificial Intelligence Is Changing Our World",
      description:
        "Artificial Intelligence is revolutionizing daily life through smart assistants, personalization, and automation, making our world faster, smarter, and more efficient."
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8072818256",
  email_address: "vigneshdhandapani2023@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
