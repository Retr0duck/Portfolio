import React from 'react';
import './styles.css'; // Asegúrate de tener un archivo CSS para los estilos
import RexPhoto from '../assets/capture-rex.png';
import Todo from '../assets/capture-Todo.png';
import math from '../assets/capture-math.png';
import movies from '../assets/capture-movies.png'
import music from '../assets/capture-music.png';
import tech from '../assets/tech.png';
import Vimdata from '../assets/VimDMTS.png';
import Dashboard from '../assets/VimDash.png';
import './config.css'

const proyectos = [
    {
        nombre: 'T-rex game',
        imagen: RexPhoto,
        codigoFuente: 'https://github.com/Retr0duck/my-rex-game',
        liveProject: 'https://my-rex-game.vercel.app/'
    },
    {
        nombre: 'To do list',
        imagen: Todo,
        codigoFuente: 'https://github.com/Retr0duck/cuddly-computing-machine/tree/main',
        liveProject: 'https://cuddly-computing-machine-eight.vercel.app/'
    },
    {
        nombre: 'Maths',
        imagen: math,
        codigoFuente: 'https://github.com/Retr0duck/Calculator/tree/main',
        liveProject: 'https://calculator-tau-cyan.vercel.app/'
    },
    {
        nombre: 'Movies-App',
        imagen: movies,
        codigoFuente: 'https://github.com/Retr0duck/ideal-doodlee/tree/main',
        liveProject: 'https://ideal-doodlee.vercel.app/'
    },
    {
        nombre: 'Search-music',
        imagen: music,
        codigoFuente: 'https://github.com/Retr0duck/Little-playlist-music/tree/main',
        liveProject: 'https://vercel.com/retr0ducks-projects/searchapp/FEqNr7Qr1Sc978rXymbbAKEyJhvA'
    },
    {
        nombre: 'Aurora Tech',
        imagen: tech,
        codigoFuente: 'https://github.com/Retr0duck/didactic-octo-waddle/tree/main',
        liveProject: 'https://didactic-octo-waddle.vercel.app/'
    },
    {
        nombre: 'Vim DataMetrics',
        imagen: Vimdata,
        codigoFuente: 'https://github.com/Retr0duck/VimDataMetrics',
        liveProject: 'https://vim-data-metrics.vercel.app/'
    },
    {
        nombre: 'Vim Dashboard',
        imagen: Dashboard,
        codigoFuente: 'https://github.com/Retr0duck/VimDashboard',
        liveProject: 'https://vim-dashboard.vercel.app/'
    }
];

const Projects = () => {
    return (
        <div className="proyectos p-5">
            {proyectos.map((proyecto, index) => (
                <div className="proyecto" key={index}>
                    <img src={(`./${proyecto.imagen}`)} alt={proyecto.nombre} />
                    <div className="botones">
                        <a href={proyecto.codigoFuente} className="boton">Código Fuente</a>
                        <a href={proyecto.liveProject} className="boton">Ver Proyecto</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
