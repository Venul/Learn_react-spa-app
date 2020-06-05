import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import works from "./works";

function App() {
  return (
      <div className='app'>
          <Header brand='Иван Иванов'></Header>

          <main className='main'>
              <About title='React-разработчик Иван Иванов'>
                  <p>
                      Разрабатываю на самом крутом в мире фреймворке
                      <br />
                      самые крутые в мире SPA!
                  </p>
                  <p>С удовольствием и вам что-нибудь разработаю ;)</p>
              </About>

              <div className='portfolio'>
                  <div className='container'>
                      {works.map(work => (
                          <Portfolio key={work.id} work={work} />
                      ))}
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;