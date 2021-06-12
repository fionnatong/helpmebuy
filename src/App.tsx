import { useState } from "react";
import Input from "components/Input";
import Items from "components/Items";
import { Wrapper, Header } from "./App.styles";

const App = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string): void => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
  }

  const removeItem = (id: number): void => {
    const updatedItems = items.filter((item, i) => i !== id);
    setItems(updatedItems);
  }

  return (
    <Wrapper>
      <Header>
        <h1>helpmebuy! ✏️</h1>
      </Header>
      <Input addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
      </Wrapper>
  );
}

export default App;
