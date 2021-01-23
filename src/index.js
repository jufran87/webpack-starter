import { saludar } from './js/componentes';
import './styles.css';

const nombre = document.querySelector('#txtNombre');

const boton = document.querySelector('#btnSaludar');
boton.addEventListener('click', () => saludar(nombre.value));
