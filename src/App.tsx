import { useState } from "react";
import Input from "components/Input";
import Item from "components/Item";
import { Wrapper, Header, Items } from "./App.styles";

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
      <Items>
        {items.map((item, i) => <Item name={item} key={i} />)}
      </Items>
    </Wrapper>
  );
}

export default App;
