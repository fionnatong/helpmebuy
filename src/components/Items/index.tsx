import { Wrapper, Subtitle, Item } from "./styles";

interface ItemProps {
	items: string[];
	removeItem: (id: number) => void;
}

const Items = ({ items, removeItem }: ItemProps): JSX.Element => {
	const onRemove = (id: number): void => {
		removeItem(id);
	}

	return (
		<Wrapper>
			{!items.length && <Subtitle>No item added. Add one now!</Subtitle>}
			{items.map((item, i) => (
				<Item>
					<p>{item}</p>
					<button onClick={() => onRemove(i)}>Delete</button>
				</Item>
			))}
		</Wrapper>
	);
}

export default Items;