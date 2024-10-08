import "../Css/header.css";
// import "../Css/general.css";

const Header = () => {
  return (
    <div>
        <div className="Header">
            <div className="left_section">
                <img className="Hamberger" src="../Template/headericons/threelines.webp"/>
                <div className="Youtube_text">
                    <img className="youtube_icon" src="Template/headericons/YouTube-Logo-Vector.png"/>
                    <div className="tooltip">
                        YouTube Home
                    </div>
            
                </div>
                </div>
            <div className="middle_section">
                <input className="search_bar" type="text" placeholder="Search"/>

                <button className="search_button">
                    <img className="search_icon" src="Template/headericons/search.png"/>
                    <div className="tooltip">
                        Search
                    </div>
                </button>
                <button className="microphone">
                    <img className="mic_icon" src="Template/headericons/icons8-microphone-24.png"/>
                    <div className="tooltip">
                        Search with your voice
                    </div>
                </button>
                
            </div>
            <div className="right_section">
                <div className="Create">
                    <img className="camera_icon" src="Template/headericons/camera.JPG"/>
                    <div className="tooltip">
                        Create
                    </div>
                </div>
                
                <div className="notification">
                    <img className="bell_icon" src="Template/headericons/icons8-bell-50.png"/>
                    <div className="notification_count">3</div>
                    <div className="tooltip">
                        Notifications
                    </div>
                </div>
                
                <img className="mail_icon" src="Template/headericons/email.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Header