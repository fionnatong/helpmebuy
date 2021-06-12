import { useState } from "react";
import Input from "components/Input";
import Items from "components/Items";
import { Wrapper, Header } from "./App.styles";

const App = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([]);

  const addItems = (item: string): void => {
    const newItems = [...items, item];
    setItems(newItems);
  }

  return (
    <Wrapper>
      <Header>
        <h1>helpmebuy! ✏️</h1>
      </Header>
      <Input addItems={addItems} />
      <Items items={items} />
      </Wrapper>
  );
}

export default App;
