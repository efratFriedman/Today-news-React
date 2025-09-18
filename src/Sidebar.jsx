import WeatherWidget from "./WeatherWidget";
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
    

      {/* Weather */}
      <WeatherWidget />

      {/* Sponsored Ads */}
      <div className="sponsored">
        <h3>Sponsored</h3>
        <div className="ad">
          <h4>Master a new skill this weekend!</h4>
          <p>Explore thousands of online courses on web development, design, and more. Start learning today!</p>
        </div>
        <div className="ad">
          <h4>The new FlexiFone is here!</h4>
          <p>Experience the future of smartphones with our innovative foldable screen technology. Pre-order now!</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;