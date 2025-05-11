import styled from "styled-components";
import { IProps } from "./types";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #1F2D3A;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{exp: number}>`
  height: 100%;
  width: ${props => props.exp/2}%;
  background: #44BF67;
  border-radius: 10px;
  transition: width 0.3s ease;
`;
