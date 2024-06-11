import { create, dequeue, enqueue, isEmpty } from "./fila";
import { Paciente } from "./types";

let pacientesTriados: Paciente[] = [
  { nome: "Maria", prioridade: "urgente" },
  { nome: "José", prioridade: "comum" },
  { nome: "Ana", prioridade: "emergência" },
  { nome: "Pedro", prioridade: "urgente" },
  { nome: "Clara", prioridade: "comum" },
  { nome: "Bryan", prioridade: "emergência" },
  { nome: "Mariana", prioridade: "urgente" },
  { nome: "Peter", prioridade: "comum" },
  { nome: "Chris", prioridade: "comum" },
];

const fila = create(3)

main()
atenderPacientes()

function main() {
  enqueue(fila, create(5))
  enqueue(fila, create(5))
  enqueue(fila, create(5))

  pacientesTriados.forEach(paciente => {
    if(paciente.prioridade === "emergência") {
      enqueue(fila[0], paciente)
    }

    if(paciente.prioridade === "urgente") {
      enqueue(fila[1], paciente)
    }

    if(paciente.prioridade === "comum") {
      enqueue(fila[2], paciente)
    }
  })

  console.log(fila);
  
}

function atenderPacientes() {
  fila.forEach(ala => {    

    for(let i = 0; i < ala.length; i++) {
      
      if(isEmpty(ala)) {
        return
      }

      const paciente = dequeue(ala)

      console.log(`> ${paciente.nome}, com prioridade de ${paciente.prioridade}, foi atendido.`);
    }
    
  })

  console.log("> fila", fila); 
}


