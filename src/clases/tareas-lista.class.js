export class TareaLista{
    constructor(){
        // this.tareas = [];
        // this.guardarLocalStorage();
        this.cargarLocalStorage();
    }
    nuevaTarea(tarea){
        this.tareas.push(tarea);
        this.guardarLocalStorage();
    }
    eliminarTarea(id){
        this.tareas = this.tareas.filter(elemento => elemento.id != id);
        this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for(const elemento of this.tareas){
            if(elemento.id == id){
                elemento.completado = !elemento.complatado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados(){
        this.tareas = this.tareas.filter(elemento => !elemento.completado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        localStorage.setItem('tarea',JSON.stringify(this.tareas))
    }
    cargarLocalStorage(){
            this.tareas =(localStorage.getItem('tarea')) ? JSON.parse(localStorage.getItem('tarea')) : [];
    }
}