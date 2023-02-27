// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPytorch,
  SiPytorchlightning, SiTensorflow,
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import AITA from "./images/AITA.jpeg";

// Hero Images (add your images to the /images directory with the same names)
import LightBackground from "./images/snowboarding-light.jpg";
import DarkBackground from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { LightBackground as Light };
export { DarkBackground as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "jambran";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I train neural models to understand language. Sometimes they're pretty good.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <SiPytorch className="display-4" />,
    name: "Pytorch",
  },
  {
    id: 3,
    skill: <SiPytorchlightning className="display-4" />,
    name: "Pytorch Lightning",
  },
  {
    id: 4,
    skill: <SiTensorflow className="display-4" />,
    name: "Tensorflow",
  },
  {
    id: 5,
    skill: <FaAws className="display-4" />,
    name: "AWS Sagemaker",
  },
  {
    id: 6,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 7,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 8,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 9,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["ml-depression-classification", "asshole-classifier", "machine-learning-in-python"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "asshole-classifier",
    image: AITA,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
