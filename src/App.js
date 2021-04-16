import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="texts-item">
        <div className="block">
          <div className="header">
            <h2 className="header-title">Kilka slow o nas</h2>
            <span className="header-subtitle">czyli kim jestesmy</span>
          </div>
          <div className="container-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Link to="/houses">
            <div className="btn-more">Zobacz wiecej</div>
          </Link>
        </div>
      </div>
      <div className="imgs-item">
        <div className="cat-img"></div>
        <div className="cat-img"></div>
        <div className="cat-img"></div>
        <div className="cat-img"></div>
      </div>
      <div className="bigimg-item"></div>
      <div className="texts-item2">
        <div className="block">
          <div className="header">
            <h2 className="header-title">Kilka slow o nas</h2>
            <span className="header-subtitle">czyli kim jestesmy</span>
          </div>
          <div className="container-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Link to="/houses">
            <div className="btn-more">Zobacz wiecej</div>
          </Link>
        </div>
      </div>
      {/* <div className="row">
        <div className="block">
          <div className="header">
            <h2 className="header-title">Kilka slow o nas</h2>
            <span className="header-subtitle">czyli kim jestesmy</span>
          </div>
          <div className="container-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Link to="/houses">
            <div className="btn-more">Zobacz wiecej</div>
          </Link>
        </div>
        <div style={{ flex: "1 1 0px", flexWrap: "wrap" }}>
          <div className="small-div-img" />
          <div className="small-div-img" />
          <div className="small-div-img" />
          <div className="small-div-img">
            <div className="div-img-text">zzzzzzz</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="div-img">
          <div className="div-img-text">zzzzzzz</div>
        </div>
        <div className="block">
          <div className="header">
            <h2 className="header-title">Kilka slow o nas</h2>
            <span className="header-subtitle">czyli kim jestesmy</span>
          </div>
          <div className="container-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Link to="/houses">
            <div className="btn-more">Zobacz wiecej</div>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default App;
