import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMin from "./paginas/sobremin";



function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobremin" element={<SobreMin/>}/>
      <Route path="*" element={<div>Pagina não encontrada</div>}/>
   </Routes>

   </BrowserRouter>
  );
}

export default App;
