import styled from "styled-components";

export const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
`

export const SelectContainer = styled.div`
  position: relative;
  min-width: 200px;
  font-family: Arial, sans-serif;
`;

export const SelectLabel = styled.div`
  padding: 16px 24px;
  background-color: #0E1923;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #0E1923;
  color: white;
  border-radius: 4px;
  margin-top: 4px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #13212e;
  }
`;

export const OptionImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  object-fit: contain;
`;

export const ArrowIcon = styled.span<{isOpen: boolean}>`
  margin-left: 8px;
  transition: transform 0.2s;
  transform: ${({ isOpen }: { isOpen: boolean }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const TitleSelect = styled.p`
    color: #6D7589;
    padding: 29px 16px;
    font-size: 16px;
`

export const TitleBold = styled.span`
    font-weight: 900;
    margin-right: 8px;
`