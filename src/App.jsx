import BoxOne from "./components/BoxOne"
import BoxTre from "./components/BoxTre"
import BoxTwo from "./components/BoxTwo"
function App() {
  return (
    <>
    <div style={{backgroundColor:"white", width:"700px"}}>
      <div >
        <BoxOne tittle={"Join our community"} subTittle={"30-day, hassle-free money back guarantee"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae repellendus modi distinctio dolores fugit esse id consequuntur quasi ducimus. Vel voluptas, a ratione quam aperiam libero provident repellendus alias ab!"}/>
      </div>
      <div style={{display:"flex"}}>
        <BoxTwo tittle={"Montly subscription"} valor={"$29"} paragraph={"Full acss for less than $1 a day"} />
        <BoxTre tittle={"Why us"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae repellendus modi distinctio dolores fugit esse id consequuntur quasi ducimus. Vel voluptas, a ratione quam aperiam libero provident repellendus alias ab!"} />
      </div>
      </div>
    </>
  )
}

export default App
