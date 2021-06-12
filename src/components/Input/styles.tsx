import styled from "styled-components";
import token from "styles/token";

const { spacing } = token;

export const FormWrapper = styled.form`
	width: 75%;
	display: flex;
	justify-content: center;
	margin-bottom: ${spacing.s};

	input {
		flex-grow: 1;
		margin-right: ${spacing.s};
	}
`;