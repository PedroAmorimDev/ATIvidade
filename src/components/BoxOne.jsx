import { Div } from "../styles/BoxOne"
import { Tittle } from "../styles/BoxOne"
import { MinTitulo , Paragrafin} from "../styles/BoxOne"
const BoxOne = ({ tittle, subTittle, paragraph }) => {
     return (
          <Div>
               <Tittle>{tittle}</Tittle>
               <MinTitulo>{subTittle}</MinTitulo>
               <Paragrafin>{paragraph}</Paragrafin>
          </Div>
     )
}
export default BoxOne