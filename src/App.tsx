import { MouseEventHandler, useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import moon from "src/assets/moon.png";
import land from "src/assets/land.png";
import cat from "src/assets/cat.gif";

function App() {
  const ref = useRef<IParallax | null>(null);
  
  const handleScrollDown: MouseEventHandler<HTMLDivElement> = () => {
    if (ref.current !== null) ref.current.scrollTo(3)
  };

  const handleScrollUp: MouseEventHandler<HTMLDivElement> = () => {
    if (ref.current !== null) ref.current.scrollTo(0)
  };

  return (
      <div>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer offset={0} speed={1} factor={2} style={{backgroundImage: `url(${moon}`, backgroundSize: "cover"}} />
          <ParallaxLayer offset={2} speed={1} factor={4} style={{backgroundImage: `url(${land})`, backgroundSize: "cover"}} />
          <ParallaxLayer sticky={{ start: 0.9, end: 3 }} style={{ textAlign: "center" }}>
            <img src={cat} draggable={false} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0.05} onClick={handleScrollDown} style={{ userSelect: "none" }}>
            <h2>Welcome to my website</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={2} onClick={handleScrollUp} style={{ userSelect: "none" }}>
            <h2 >Web development is fun</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
  )
}

export default App
