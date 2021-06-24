import { Component } from 'react';
import Particles from "react-tsparticles";
import './App.css';





class App extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <div>
        <Particles className='particles'
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000",
                opacity: 1
              },
            },
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab : {
                  distance: 400,
                  links : {
                    blink: false,
                    consent: false,
                    opacity: 0.5,
                  }
                },
                attract : {
                  distance: 250,
                  duration: 0.7,
                  easing: 'ease-out-quad',
                  factor: 1,
                  maxSpeed: 5,
                  speed: 2,
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00fbff",
              },
              links: {
                color: "#00fffb",
                distance: 150,
                enable: true,
                opacity: 0.9,
                width: 1,
              },
              twinkle : {
                lines : {
                  color: '#00fbff',
                  enable: true,
                  frequency: 0.001,
                },
                particles : {
                  color: '#00fbff',
                  enable: true,
                  frequency: 0.001,
                }
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "line",
                // image : {
                //   src: "https://img.icons8.com/nolan/64/winter.png",
                //   width: 64,
                //   height: 64,
                // }
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        {/* <NavigationDisabled />
        <NavigationEnabled />
        <Logo />
        <WelcomeInfromation />
        <SignupLink /> */}
      </div>
    );
  }
}
export default App;


// const particlesOptions = {

// }

// function App() {
//   return (
//     <div className="App">
//       {/* <Particles /> */}
//     </div>
//   );
// }

// export default App;
