import { Wrapper, Subtitle } from "./styles";

interface ItemProps {
	items: string[];
}

const Item = ({ items }: ItemProps): JSX.Element => (
	<Wrapper>
		{!items.length && <Subtitle>No item added. Add one now!</Subtitle>}
		{items.map((item) => <p>{item}</p>)}
	</Wrapper>
);

export default Item;