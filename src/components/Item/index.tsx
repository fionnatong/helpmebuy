import { Wrapper } from "./styles";

interface ItemProps {
	name: string;
}

const Item = (props: ItemProps): JSX.Element => {
	return (
		<Wrapper>
			<p>{props.name}</p>
		</Wrapper>
	);
}

export default Item;