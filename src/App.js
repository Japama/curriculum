import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Nueva función para agrupar niveles de habilidades
function getSkillLabel(level) {
  if (level >= 90) return 'Alto';
  if (level >= 75) return 'Intermedio';
  return 'Básico';
}

function App() {
  const skills = [
    { name: 'git', level: 90 },
    { name: 'C#', level: 90 },
    { name: '.NET', level: 75 },
    { name: 'Rust', level: 50 },
    { name: 'PHP', level: 50 },
    { name: 'Laravel', level: 50 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'React', level: 75 },
    { name: 'SQL', level: 80 },
    { name: 'NoSQL', level: 50 },
    { name: 'Docker', level: 70 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src="profile.jpg" alt="Perfil" className="App-profile-pic" />
        <h1>Juan Bautista Valero Carrasco</h1>
        <h2>Desarrollador Full Stack y Profesor de Informática</h2>
        {/* Nuevo bloque de contacto visible */}
        <div className="App-contact">
          <a href="https://github.com/japama">GitHub</a> |
          <a href="https://www.linkedin.com/in/juan-bautista-valero-carrasco">LinkedIn</a>
        </div>
        <p>Soy un apasionado de enseñar y desarrollar aplicaciones web innovadoras.</p>
      </header>
      <div className="App-two-columns">
        <div className="App-left">
          {/* Se actualiza el recuadro con experiencia y formación */}
          <section className="App-info">
            <div className="App-info-section">
              <h3>EXPERIENCIA</h3>
              {/* Ampliación de la sección de experiencia */}
              <ul>
                <li>
                  <strong>Full Stack Developer – Synit - 1 año</strong>
                  <br />
                  Desarrollo de una aplicación web para la gestión del mantenimiento de molinos eólicos. Mejoras en rendimiento y escalabilidad. <br />Tecnoligías utilizadas: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>.NET</strong> y <strong>MySQL</strong>.
                </li>
                <li>
                  <strong>Full Stack Developer – Everillion - 6 Meses</strong>
                  <br />
                  Desarrollo de una aplicación web para fidelización de clientes. Mejoras en rendimiento y escalabilidad. <br />Tecnoligías utilizadas: <strong>ASP.NET Core MVC</strong>, <strong>.NET</strong> y <strong>MySQL</strong>.
                </li>

                <li>
                  <strong>Full Stack Developer – Promoshop - 6 meses</strong>
                  <br />
                  Desarrollo de un ERP para la gestión de una empresa. Mejoras en rendimiento y escalabilidad. <br />Tecnoligías utilizadas: <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>PostgreSQL</strong>.
                </li>
                <li>
                  <strong>Profesor de Informática en formación profesional - 3 años</strong>
                  <br />Enseñanza de sitemas, scripts y fundamentos IT, integrando tecnologías modernas.
                </li>
              </ul>

              <h3>PROYECTOS</h3>
              {/* Proyecto Teacherinator */}
              <div className="App-project">
                <h4>Teacherinator</h4>
                <ul>
                  <li><strong>Descripción:</strong> Plataforma para gestión de asistencia y guardias en instituciones educativas.</li>
                  <li><strong>Backend:</strong> Rust para un rendimiento crítico.</li>
                  <li><strong>Frontend:</strong> React con interfaz interactiva.</li>
                  <li>
                    <a href="https://teacherinator.juanbautistavalero.com/">Ver demo</a> |
                    <a href="https://github.com/Japama/TeacherinatorClient"> Código Front</a> |
                    <a href="https://github.com/Japama/TeacherinatorServer"> Código Back</a>
                  </li>
                </ul>
              </div>
              {/* Proyecto Dex */}
              <div className="App-project">
                <h4>Dex</h4>
                <ul>
                  <li><strong>Descripción:</strong> Aplicación para visualización de Pokémon.</li>
                  <li><strong>Backend:</strong> Node.js, Express, MongoDB y PostgreSQL.</li>
                  <li><strong>Frontend:</strong> React con SASS y animaciones interactivas.</li>
                  <li>
                    <a href="https://dex.juanbautistavalero.com/">Ver demo</a> |
                    <a href="https://github.com/Japama/dex/tree/main"> Código del proyecto</a>
                  </li>
                </ul>
              </div>
              {/* Proyecto Tsuny's Adventure */}
              <div className="App-project">
                <h4>Tsuny's Adventure</h4>
                <ul>
                  <li><strong>Descripción:</strong> Videojuego de plataformas 2D diseñada para personas con autismo.</li>
                  <li><strong>Tecnologías:</strong> Unity y C#.</li>
                  <li><strong>TFM:</strong> Proyecto del Máster en Desarrollo de Videojuegos.</li>
                  <li>
                    <a href="https://github.com/Japama/TFM">Código</a>
                  </li>
                  <li>
                    <strong>Video demostrativo:</strong> ¡Precaución! El audio está un poco alto.
                    <div className="project-video">
                      <iframe
                        title="Tsuny's Adventure Demo"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/resLexYIeLM"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </li>

                </ul>

              </div>
            </div>
          </section>
        </div>
        <div className="App-right">
          <section className="App-additional">
            <div className="App-info-section">
              <h3>FORMACIÓN ACADÉMICA</h3>
              <ul className="education">
                <li>2021 - Graduado en Ingeniería Informática (UA)</li>
                <li>2023 - Máster en Diseño y Programación de Videojuegos (UOC)</li>
                <li>2024 - Máster en Profesorado (UA)</li>
                <li>2015 - Ciclo Superior en Sistemas y Redes (I.E.S Marcos Zaragoza)</li>
              </ul>
            </div>
            <h3>HABILIDADES TÉCNICAS</h3>
            <div className="App-skills">
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className="skill-circle"
                  style={{ '--level': skill.level }}
                >
                  <span className="skill-level">{getSkillLabel(skill.level)}</span>
                  <div className="skill-label">{skill.name}</div>
                </div>
              ))}
            </div>
            <h3>CURSOS</h3>
            <ul>
              <li>Python Essentials 1 y 2 de CISCO</li>
            </ul>
            {/* Agrupación en dos columnas para Idiomas y Habilidades */}
            <div className="columns">
              <div>
                <h3>IDIOMAS</h3>
                <ul>
                  <li>
                    <img src="https://flagcdn.com/24x18/es.png" alt="Español" style={{ width: '20px', marginRight: '8px' }} />
                    Español (Nativo)
                  </li>
                  <li>
                    <img src="https://flagcdn.com/24x18/gb.png" alt="Inglés" style={{ width: '20px', marginRight: '8px' }} />
                    Inglés (Intermedio)
                  </li>
                  <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_the_Land_of_Valencia_%28official%29.svg" alt="Valenciano" style={{ width: '20px', marginRight: '8px' }} />
                    Valenciano (Avanzado)
                  </li>
                  <li>
                    <img src="https://flagcdn.com/24x18/jp.png" alt="Japonés" style={{ width: '20px', marginRight: '8px' }} />
                    Japonés (Básico)
                  </li>
                </ul>
              </div>
              <div>
                <h3>HABILIDADES BLANDAS</h3>
                <ul>
                  <li>Trabajo en equipo</li>
                  <li>Liderazgo</li>
                  <li>Comunicación efectiva</li>
                  <li>Adaptabilidad</li>
                  <li>Creatividad</li>
                  <li>Empatia</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-social">
          <a href="https://github.com/japama" className="App-social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/juan-bautista-valero-carrasco" className="App-social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
