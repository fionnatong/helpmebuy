import styled from "styled-components";
import token from "styles/token";

const { spacing } = token;

export const Wrapper = styled.div`
	border: 1px solid white;
  width: 75%;

	p {
		padding: ${spacing.m} ${spacing.l};
	}
`;

export const Subtitle = styled.p`
	text-align: center;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;