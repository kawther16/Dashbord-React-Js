import { Routes , Route } from "react-router-dom"
import  Product from "./Paes/Product"
import Services from "./Paes/Services"
import Parent from "./Paes/Parent"
import Dashbord from "./Paes/Dashbord"
import Help from "./Paes/Help"
import Attendence from "./Paes/Attendence"
import Sidenav from "./Componants/Sidenav"
function App(){
    return <Sidenav>

    <Routes>
        <Route path="/Dashbord" element={<Dashbord/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Parent"element={<Parent/>}/>
        <Route path="/Help"element={<Help/>}/>
        <Route path="/Attendence"element={<Attendence/>}/>
       
    </Routes>
    </Sidenav>
}
export default App