import React, { Component } from 'react';
import './ThreeDComponent.css';
import * as THREE from 'three';
import { Environment, CreateParticles } from './Environment';

// Import FontLoader from the examples module
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

class ThreeDComponent extends Component {
  componentDidMount() {
    const preload = () => {
      let manager = new THREE.LoadingManager();
      manager.onLoad = function() {
        const environment = new Environment(typo, particle);
      };

      let typo = null;
      
      // Use FontLoader from the examples module
      const loader = new FontLoader();
      const fontPath = 'https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json';
      loader.load(fontPath, function (font) {
        typo = font;
      });

      const particle = new THREE.TextureLoader().load('https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
    };

    if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
      preload();
    } else {
      document.addEventListener('DOMContentLoaded', preload);
    }
  }

  render() {
    return (
      <div>
        {/* Your existing 3D scene rendering code */}
        <div id="magic"></div>
        <div className="playground">
          <div className="bottomPosition">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.8 278.8">
              <circle fill="#000205" cx="139.4" cy="139.4" r="139.4" />
              <g fill="none" stroke="#FFF" stroke-width="6.062" stroke-miterlimit="10">
                <path d="M214 183.4l-74.6 43.1-75.5-43.6V95.8l75.5-43.5 75.4 43.5v59.8l-11.3 6.5z" />
                <path d="M139.4 226.5l-18.8-38.2 18.8 10.8 75.4-43.5M63.9 95.8l75.3 43.6 75.6-43.6M139.2 139.4v59.7" />
              </g>
            </svg>
          </div>
        </div>

        <script type="x-shader/x-vertex" id="vertexshader">
          {`
            attribute float size;
            attribute vec3 customColor;
            varying vec3 vColor;

            void main() {
                vColor = customColor;
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_PointSize = size * ( 300.0 / -mvPosition.z );
                gl_Position = projectionMatrix * mvPosition;
            }
          `}
        </script>

        <script type="x-shader/x-fragment" id="fragmentshader">
          {`
            uniform vec3 color;
            uniform sampler2D pointTexture;
            varying vec3 vColor;

            void main() {
                gl_FragColor = vec4( color * vColor, 1.0 );
                gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
            }
          `}
        </script>
      </div>
    );
  }
}

export default ThreeDComponent;
