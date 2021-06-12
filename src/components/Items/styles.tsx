import styled from "styled-components";
import token from "styles/token";

const { padding } = token;

export const Wrapper = styled.div`
	border: 1px solid white;
  width: 75%;

	p {
		padding: ${padding};
	}
`;

export const Subtitle = styled.p`
	text-align: center;
`;