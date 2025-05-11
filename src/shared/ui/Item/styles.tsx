import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
`

export const IsChecked = styled.div`
    width: 126px;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0E1923;
    border-radius: 10px;
    padding: 11px 0;
`

export const ContentItem = styled.div<{ isNext: boolean }>`
    display: flex;
    flex-direction: column;
    width: 126px;
    height: 128px;
    align-items: center;
    gap: 4px;
    justify-content: center;
    background-color: #1F2D3A;
    opacity: ${({ isNext }) => (isNext ? "0.8" : "1")};
    position: relative;
    color: #DADFEB;
    font-family: 'Inter';
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
    padding: 10px 8px;
    opacity: ${({ isNext }) => (isNext ? 0.4 : 1)};

    & > img {
        width: 64px;
        height: 64px;
    }
`

export const Level = styled.div<{ isCurrent: boolean, isNext: boolean }>`
    width: 100%;
    background-color: ${({ isCurrent, isNext }) => (isCurrent || isNext ? "#0E1923" : "#1F2D3A")};
    color: ${({ isCurrent, isNext }) => (isCurrent || isNext ? "#6D7589" : "white")};
    display: flex;
    align-items: center;
    font-size: 32px;
    font-family: 'Lordcorps';
    justify-content: center;
    padding: 12px 44px;
    border-radius: 10px;
    opacity: ${({ isCurrent, isNext }) => (isNext || isCurrent ? "0.6" : "1")};
`

export const ItemCount = styled.span`
    position: absolute;
    left: 32px;
    font-weight: 600;
    bottom: 50px;
    background-color: #1f2d3a;
    color: white;
    border-radius: 10px;
    
    -webkit-text-stroke: 1px black;
    
    text-shadow: 
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    
    paint-order: stroke fill;
`

export const GradientTextGold = styled.span`
  position: relative;
  display: inline-block;
  color: white; 
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  
  &::before {
    content: "${props => props.children || ''}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, #FDC04B 80%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: 1;
  }
`;
