import { useState } from "react";
import Door from "./components/Door";
import DoorModel from "./model/Door"

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))
  return (
    <>
      <div style={{display: "flex"}}>
        <Door value={p1} onChange={newDoor => setP1(newDoor)}/>
        <Door value={p1} onChange={newDoor => setP1(newDoor)}/>
        <Door value={p1} onChange={newDoor => setP1(newDoor)}/>
        <Door value={p1} onChange={newDoor => setP1(newDoor)}/>
      </div>
    </>
  );
}
