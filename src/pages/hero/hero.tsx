import { Show } from "solid-js";
import { useData_1 } from "./hero.data"

function Hero() {
  const data = useData_1();
  return(
    <div>
      <Show when={!data.isLoading} fallback={<div>loading...</div>}>
        <div>
          data has loaded
          {data.data?.value}
        </div>
      </Show>
    </div>
  )
  
}

export default Hero
