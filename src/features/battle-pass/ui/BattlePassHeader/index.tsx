import { useTranslation } from 'react-i18next';
import { Title, TitleIcon } from './styles';

const BattlePassHeader = () => {
  const { t } = useTranslation();
    return (
        <Title>
            <TitleIcon src="/image.svg" />
            {t('battlepass.header')}
        </Title>
    );
}

export default BattlePassHeader;