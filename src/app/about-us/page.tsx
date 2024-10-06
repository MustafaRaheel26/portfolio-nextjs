import Header from "@/components/header";

export default function About() {
    return(
        <div>
            <Header/>
            <div className="about-container">
        
        <section className="personal-details">
            <h2 className="section-title">Personal Details</h2>
            <div className="content">
                <p><strong>Name:</strong> Muhammad Mustafa</p>
                <p><strong>Profession:</strong> MERN Stack Developer</p>
                <p><strong>Location:</strong> Karachi, Pakistan</p>
                <p><strong>Languages:</strong> English, Urdu</p>
            </div>
        </section>

        <section className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="content">
                <p><strong>Job Title:</strong> Student </p>
                <p><strong>Institute:</strong> SMIT - Saylani Mass It Training</p>
                <p><strong>Years of Experience:</strong> 1 years - ongoing</p>
                <ul className="experience-list">
                    <li>Developed and maintained web applications using React.js and Node.js</li>
                    <li>Worked with MongoDB for efficient database management.</li>
                    <li>Collaborated with UI/UX designers to create responsive user interfaces.</li>
                </ul>
            </div>
        </section>

        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="content">
                <p><strong>Degree:</strong> Bachelor of Science in AI</p>
                <p><strong>University:</strong> Bahria University Karachi</p>
                <p><strong>Year of Graduation:</strong> Current</p>
            </div>
        </section>
    </div>
        </div>
    );
}