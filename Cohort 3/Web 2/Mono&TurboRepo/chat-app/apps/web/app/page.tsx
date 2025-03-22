import { Button } from "@repo/ui/button"
import { TextInput } from "@repo/ui/text-input"

export default function Home() {
  return (
  <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "10px"}}>
    <TextInput placeholder="Room Code"/>
    <Button>Join Room</Button>
  </div>  
  )
}
