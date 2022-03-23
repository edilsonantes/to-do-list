import { useState } from "react"
import { Area, Container, Header } from "./App.styles"
import {Item} from "./types/item";

function App() {
  const [list, setList] = useState<Item[]>([]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
      </Area>
    </Container>
  )
}

export default App
