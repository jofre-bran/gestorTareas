import './styles.css'
import {Tarea,TareaLista} from './clases'
import { crearTareaHtml, mostrarPendientes } from './js/funciones'

export const listaTarea = new TareaLista()
const tarea = new Tarea("Practicar webpack")

listaTarea.tareas.forEach(crearTareaHtml);
mostrarPendientes(listaTarea.tareas);
// console.log(listaTarea);git