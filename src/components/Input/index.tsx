import { useState, ChangeEvent } from "react";
import { Wrapper } from "./styles";

interface InputProps {
	addItems: (item: string) => void
}

const Input = (props: InputProps): JSX.Element => {
	const [value, setValue] = useState<string>("");

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	}

	const onClick = (): void => {
		props.addItems(value);
		setValue("");
	}

	return (
		<Wrapper>
			<input value={value} onChange={onChange} placeholder="Add an item here" />
			<button onClick={onClick}>Add</button>
		</Wrapper>
	);
}

export default Input;