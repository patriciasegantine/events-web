import { Header } from "./components/header.tsx";
import { ParticipantList } from "./components/participant-list.tsx";

export function App() {
  
  return (
    <div className="max-w-[1216px] mx-auto p-5 flex flex-col gap-5">
      <Header/>
      <ParticipantList/>
    </div>
  )
}
