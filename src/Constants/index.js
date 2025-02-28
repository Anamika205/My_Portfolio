import Shopping from "../assets/shopping.jpg"
import Travel from "../assets/travel.jpg"
import Watermarking from "../assets/watermarking.jpg"

export const PROFILE_CONTENT = `II am a Full Stack Developer with a strong foundation in both frontend and backend technologies, specializing in building scalable and efficient web applications. With expertise in React.js, Node.js, and Express.js, I develop dynamic, responsive, and user-friendly interfaces, ensuring seamless user experiences. On the backend, I work with MongoDB and SQL Server, designing and optimizing databases for efficient data management and retrieval.

I have a deep understanding of RESTful APIs, authentication mechanisms like JWT, and cloud deployment using AWS EC2. Additionally, I focus on improving business processes by implementing automation and performance enhancements. I am always eager to learn new technologies, collaborate with cross-functional teams, and contribute innovative solutions that drive business success.

I am passionate about writing clean, maintainable code, following best practices, and ensuring high-quality software delivery. My goal is to continue growing within a dedicated team, leveraging my technical expertise to develop robust applications that solve real-world problems effectively.`

export const ABOUT_ME = `I am a Full Stack Developer with a strong passion for building scalable, efficient, and user-friendly web applications. With expertise in React.js, Next.js, Node.js, and Express.js, I specialize in developing dynamic front-end interfaces and robust back-end architectures. My experience extends to database management using MongoDB and SQL Server, ensuring efficient data handling and seamless application performance.

I have a deep understanding of RESTful APIs, authentication mechanisms (JWT), cloud deployment (AWS EC2, PM2, Nginx), and CI/CD pipelines using GitHub Actions. I am skilled in writing clean, maintainable code while optimizing business processes through automation and performance enhancements.

Passionate about continuous learning, I enjoy working in collaborative environments where I can contribute innovative solutions and enhance my technical expertise. My goal is to deliver high-quality software solutions while growing within a dedicated and forward-thinking team.`

export const PROJECT_DETAILS = [
    {
        title: "Shopper Shopping",
        img: Shopping,
        desc: " Developed a full-stack ecommerce website using next.js, typescript and tailwind css Users can add items to and remove them from their shopping cart",
        technology: ["React", "Node", "Next.js", "Express.js", "Mongodb"]
    },
    {

        title: "Travel & Tourism Management System",
        img: Travel,
        desc: " Developed a Travel and Tourism Management system using java, MySQL database Key features includes user authentication, travel and management and booking functionality. Designed a Travel Planning System to request handling and service delivery, enabling efficient trip planning.",
        technology: ["java", "my-sql"]
    },
    {

        title: "Digital Watermarking for grayscale Images using discrete wavelet.",
        img: Watermarking,
        desc: [
            "Developed a Digital Watermarking project for image to perform various algorithm like paper & salt and Gaussian"
            ,

            "A project that enhances digital watermarking for grayscale images using advanced techniques.",
            " Proposed a scheme using DWT to enhance the robustness and imperceptibility of the watermarking scheme",

            "Developed a frequency domain-based watermarking scheme that achieves high robustness.",

        ],
        technology: ["python", "dip"]
    }

];
export const EXPERIENCE_DET = [
    {
        company: "Shiimperial",
        role: "Full Stack developer",
        Duration: "Mar-24 to Sep-24",
        Work: [
            "Developed multiple APIs for functionalities including login, registration, OTP generation, a digital marking dashboard, search functionality, and operations for adding, deleting, and updating production data.",
            "Developed secure APIs with token-based authentication, authorization, and input data validation to ensure data integrity and prevent security vulnerabilities.",
            "Designed and implemented backend database schemas using MongoDB, structuring collections and documents to optimize data storage, retrieval, and management.",
            "Designed and developed dynamic, user-friendly UI web pages using MUI, React.js, and Next.js, ensuring seamless and responsive user experiences.",
            "Integrated multiple APIs into UI pages to enhance functionality and user experience.",
            "Implemented reusable React components to streamline development and improve code maintainability.",
            "Used .env files to securely store sensitive data such as tokens, database credentials, and other vulnerable information, ensuring data integrity and security.",
            "Deployed the backend server on AWS EC2 using PM2 and Nginx for process management",
            "Built the frontend code and deployed the website on AWS EC2 using the build output.",
            "Automated code deployment using GitHub Actions with a .github/workflows/build.yaml file, integrating GitHub Secrets for secure handling of sensitive data, ensuring continuous integration and seamles deployment."
        ],

        technology: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "HTML", "CSS"]
    }
]
export const CONTACT ={
    address:"Qutub Vihar, South West Delhi",
    phoneNo:"7370958314",
    email:"anamika.mca20.du@gmail.com"
};