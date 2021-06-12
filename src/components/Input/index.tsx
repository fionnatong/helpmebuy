import { useState, ChangeEvent, FormEvent } from "react";
import { FormWrapper } from "./styles";

interface InputProps {
	addItem: (item: string) => void
}

const Input = ({ addItem }: InputProps): JSX.Element => {
	const [value, setValue] = useState<string>("");

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	}

	const onSubmit = (event: FormEvent): void => {
		event.preventDefault();

		if (value) {
			addItem(value);
			setValue("");
		}
	}

	return (
		<FormWrapper onSubmit={onSubmit}>
			<input value={value} onChange={onChange} placeholder="Add an item here" />
			<button type="submit">Add</button>
		</FormWrapper>
	);
}

export default Input;