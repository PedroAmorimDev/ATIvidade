import { DivThree, TituloThree, Paragrafotres } from "../styles/BoxMinTre"

const BoxTre = ({ tittle, paragraph }) => {
     return (
          <DivThree>
               <TituloThree>{tittle}</TituloThree>
               <Paragrafotres>{paragraph}</Paragrafotres >
          </DivThree>
     )
}
export default BoxTre