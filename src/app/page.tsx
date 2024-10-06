
import Header from "../components/header"
export default function Home() {
  return (
    <div>
      <Header/>
          {/* <div className="text-home">
          <h1><b>Muhamad Shaharyar</b></h1>
          <p className="" >I am a node.js programmer</p>

          </div>

          <div className="image">
            <img src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/449064217_1903076273488575_2515377422752292319_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG5cBlyZU_a2NrBDoBsGenGGspw3PTLnSgaynDc9MudKM9L5dnTTsrK2VdlLG0FejtQR21mK48iKxb4EyBWxEdS&_nc_ohc=ebNXFT2lfcgQ7kNvgFZAT_a&_nc_ht=scontent.fkhi24-1.fna&_nc_gid=AfbaD62D8Ex_5lTDg96olW2&oh=00_AYAppyoYpwe9CR9hCdFqTHAEEUQjHEjHeMwjMYySIVT1LQ&oe=67036759" alt="" />

          </div> */}
    <div className="background-home">
    <div className="portfolio-container">
      <div className="text-home">
        <h1 className="heading">
          <b>Muhammad Mustafa</b>
        </h1>
        <p className="description">Muhammad Mustafa is an ambitious university level student and has a strong foundation in modern web development technologies, including TypeScript, Javascript, React.js, Next.js, HTML, and CSS. </p>
      </div>
      
      <div className="image">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D35AQEtJ8JQDOL-PQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1710845738745?e=1728802800&v=beta&t=Ahgc87r-HLIwnDXZS70tc8Bk2Anf0fsYUTutj75X_cs" 
          alt="profile" 
        />
      </div>
    </div>
    </div>

          
    </div>
    
  );
}
