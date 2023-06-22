import iconSuccess from "./images/icon-success.svg";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
import List from "./List";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("form");
  if (screen === "success") {
    return (
      <div className="success-container">
        <div className="success-text">
          <img className="iconSuccess" src={iconSuccess} />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to
            <span className="email-bold"> ash@loremcompany.com.</span> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button className="submit-button dismiss-btn">Dismiss message</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello there</h1>
      <Header />
      <main>
        <div className="stay-updated">
          <Main />
          <List />
          <Footer setScreen={setScreen} />
        </div>
      </main>
    </div>
  );
}

export default App;
