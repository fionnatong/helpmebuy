import { useState, ChangeEvent, FormEvent } from "react";
import { FormWrapper } from "./styles";

interface InputProps {
	addItems: (item: string) => void
}

const Input = (props: InputProps): JSX.Element => {
	const [value, setValue] = useState<string>("");

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	}

	const onSubmit = (event: FormEvent): void => {
		event.preventDefault();
		props.addItems(value);
		setValue("");
	}

	return (
		<FormWrapper onSubmit={onSubmit}>
			<input value={value} onChange={onChange} placeholder="Add an item here" />
			<button type="submit">Add</button>
		</FormWrapper>
	);
}

export default Input;