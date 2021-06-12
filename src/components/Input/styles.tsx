import styled from "styled-components";
import token from "styles/token";

const { padding } = token;

export const Wrapper = styled.div`
	padding: ${padding};
	width: 75%;
	display: flex;
	justify-content: center;

	input {
		flex-grow: 1;
		border: 0;

		::placeholder {
			opacity: 1;
		}
	}

	button {
		border: 0;

		:hover {
			cursor: pointer;
		}
	}
`;