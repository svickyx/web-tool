import React from "react";
import Image1 from "./components/image1";
import Image2 from "./components/image2";
import Image3 from "./components/image3";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title-container">
        <h3>竣工照片</h3>
        <p>工程名稱：教學區週邊排水溝及運動場東側通道連鎖磚改善工程</p>
        <p>施工廠商：和諅營造股份有限公司</p>
      </div>
      <div className="body">
        <Image1 />
        <Image2 />
        <Image3 />
      </div>
    </div>
  );
};

export default App;
