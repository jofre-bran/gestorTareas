import './styles.css'
import {Tarea,TareaLista} from './clases'
import { crearTareaHtml } from './js/funciones'

export const listaTarea = new TareaLista()
const tarea = new Tarea("Practicar webpack")

listaTarea.tareas.forEach((elemento)=>{crearTareaHtml(elemento)});

