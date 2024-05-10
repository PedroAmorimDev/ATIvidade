import { DivTwo } from "../styles/BoxMinTwo"
import Button from "./Button"
import { Tittletwo, Valor, Paragrafo } from "../styles/BoxMinTwo"
const BoxTwo = ({ tittle, valor, paragraph }) => {
     return (
          <DivTwo>
               <Tittletwo>{tittle}</Tittletwo>
               <Valor>{valor}</Valor>
               <Paragrafo>{paragraph}</Paragrafo>
               <Button text={"Sing Up"}/>
          </DivTwo>
     )
}
export default BoxTwo