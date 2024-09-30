import "./App.css";
import "./estilos/estilos1.css"
import { Componente111, Componente11, Componente22, Componente33} from "./Componentes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
console.log("Amo React!!!");
console.log("Esto es javascript")

const clase1={color: "orange",
            backgroundColor: "green"
            }


return (
  
    <div>
      <Componente11 className="clase1" etiqueta="BOTONY11"/>
  <Componente11 atributo1="atributo 1 del componente 11" atributo2={()=>{alert("presionò componente11")}}/>
  <Componente111 etiqueta="BOTONAZO"/>
      <Componente111 className="clase2" etiqueta="BOTONX"/>
      <Componente111 etiqueta="BOTONY"/>
      <Componente111 etiqueta="BOTONZ"/>
       <p style={clase1}>Este es el primer párrafo incorporado</p>
      <p className="clase1" >Este es el segundo párrafo incorporado</p>
      <button className="clase2">click me </button>
      <Componente22 className="clase3" nombre1="ATALAYA"/>
      <Componente33 className="clase3"/>
      </div>
    
  );

}

export default App;
