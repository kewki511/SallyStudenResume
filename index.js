'use strict';

/* globals ReactDOM */

function Header(props) {
    return (
      <header role='header'>
        <h1>{props.name} Resume</h1>
      </header>
    );
  }

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />

      <main>  
         <section role="intro">
            <p>Hi I'm Sally I'm 25 and below this line you'll find more information about me.</p>
         </section>
         <section id="education">
            <p>I have studied at:</p>
            <ul>
                <li>IES BEZMILIANA</li>
                <li>Minnesota University</li>
            </ul>
        </section>
        <section id="works">
          <p>I have worked at:</p>
          <div id="works-list">
              <ul>
                  <li>
                    Github Engineering during 2018 and there I have to Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                    A assumenda autem dolorem doloremque
                  </li>
              </ul>
          </div>
        </section>
        <section id="Contacts">
            <p>My contact information:</p>
            <address id="contact-info"></address>
                <p>Sally</p>
                <p>My email is: <a href="mailto://sally@IntenetExplorer.old">sally@IntenetExplorer.old</a></p>
                <p>Phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a></p>
        </section>
     </main>      
    </div>
  );
}

App.defaultProps = {
  name: 'Sally Student'
};


ReactDOM.render(
  <App name="Sally Student"/>,
  document.querySelector('#root')
);