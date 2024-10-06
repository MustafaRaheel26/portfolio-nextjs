import Header from "@/components/header"

export default function ContactUs(){
    return(
        <div>
            <Header/>
            <div className="about-container">
        
           <section className="personal-details">
            <h2 className="section-title">Contact Us</h2>
            <div className="content">
                <p><strong>Linkedin:</strong><a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/"> Muhammad Mustafa/Linkedin </a></p>
                <p><strong>Facebook:</strong><a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/"> Muhammad Mustafa/Facebook </a></p>
                <p><strong>Instagram:</strong> <a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/"> Muhammad Mustafa/Instagram </a></p>
                <p><strong>Github:</strong><a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/"> Muhammad Mustafa/Github </a></p>
            </div>
          </section>
          </div>
        </div>
    );
}