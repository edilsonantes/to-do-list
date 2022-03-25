import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { ListItem } from "./components/ListItem";
import {Item} from "./types/item";


function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar pão", done:true} 
  ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

      {/*Lugar que vai adicionar tarefas */}

      {list.map((item, index)=> (
        <ListItem key = {index} item = {item}/>
      ))}

      </Area>
    </Container>
  );
}

export default App;
