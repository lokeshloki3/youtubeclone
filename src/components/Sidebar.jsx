import "../Css/sidebar.css";
import "../Css/general.css";

const Sidebar = () => {
  return (
    <div>
        <div className="Sidebar">
            <div className="Sidebar_link">
                <img className="home_icon" src="Template/sidebar/1.JPG"/>
                <div>Home</div>
            </div>

            <div className="Sidebar_link">
                <img className="Shorts" src="Template/sidebar/2.JPG"/>
                <div>Shorts</div>
            </div>

            <div className="Sidebar_link">
                <img className="subscription" src="Template/sidebar/3.JPG"/>
                <div>Subscription</div>
            </div>
            <div className="Sidebar_link">
                <img className="you" src="Template/sidebar/4.JPG"/>
                <div>You</div>
            </div>
        </div>    
    </div>
  )
}

export default Sidebar