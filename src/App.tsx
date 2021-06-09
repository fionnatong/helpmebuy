import Item from "./components/Item";
import { Wrapper, Header, Items } from "./App.styles";

const items = ["Banana", "Milk"];

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Header>
        <h1>helpmebuy! ✏️</h1>
      </Header>
      <Items>
        {items.map((item, i) => <Item name={item} key={i} />)}
      </Items>
    </Wrapper>
  );
}

export default App;
