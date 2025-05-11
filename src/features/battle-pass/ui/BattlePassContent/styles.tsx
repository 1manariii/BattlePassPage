import styled from "styled-components";

export const TitleIcon = styled.img`
  padding: 7.5px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 10px;
  background-color: #0E1923;
`;
export const ContentBody = styled.div`
  background-color: #05101A;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ContentBattlePass = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 16px;
`;
export const ContentBattlePassTitle = styled.span`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 48px;
  padding: 16px 0;
  border-top: 1px solid #0E1923;
  border-bottom: 1px solid #0E1923;
  font-family: 'Lordcorps';
`;
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #0E1923;
  padding: 14px 16px;
`;
export const ContentOverview = styled.img`
  width: 100%;
  height: 632px;
  object-fit: cover;
`;
export const ContentBattlePassTariff = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CurrentLevel = styled.div`
  background-color: #0E1923;
  font-family: 'Lordcorps';
  width: 156px;
  height: 128px;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
`;
export const TariffFree = styled.div`
  background-color: #0E1923;
  width: 156px;
  height: 128px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 32px;
  font-family: 'Lordcorps';
`;
export const TariffGold = styled.div`
    font-family: 'Lordcorps';
  width: 156px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 32px;
  border-radius: 10px;
  padding: 2px; 
  background: linear-gradient(to bottom, #FFF8EA 0%, #FDC04B 100%);
`;
export const TariffGoldWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px; 
  background: linear-gradient(
    to bottom,
  rgba(14, 25, 35, 0.9) 40%,
    rgba(247, 205, 128, 0.4) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const GradientTextFree = styled.span`
  position: relative;
  display: inline-block;
  color: white; 
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  font-family: 'Lordcorps';
  &::before {
    content: "${props => props.children || ''}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, #1F2D3A 80%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: 1;
  }
`;
export const GradientTextGold = styled.span`
  position: relative;
  display: inline-block;
  color: white; 
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  font-family: 'Lordcorps';
  
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
export const CurrentLevelNumber = styled.span`
  font-family: 'Lordcorps';
  font-size: 64px;
`;
export const ContenBattlePassList = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 100%;
`;

export const ContentBattlePassProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  padding: 10px;
  font-size: 16px;
  font-family: 'Inter';
`

export const ContentList = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  padding-bottom: 10px; 

  scrollbar-width: auto; 
  scrollbar-color: #1F2D3A #0E1923;
  &::-webkit-scrollbar {
    height: 10px;
    background: #1F2D3A;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #0E1923;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1F2D3A;
    border-radius: 10px;
  }
`