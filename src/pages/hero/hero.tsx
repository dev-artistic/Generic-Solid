import { useData_1 } from "./hero.data"

function Hero() {
  const data = useData_1();
  console.log(data)
  return <div>hero</div>
}

export default Hero
