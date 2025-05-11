import { Section } from '../../../shared/ui/Section/styles';
import BattlePassContent from './BattlePassContent';
import BattlePassHeader from './BattlePassHeader';

export function BattlePassPage() {
  return (
    <Section>
      <BattlePassHeader />
      <BattlePassContent />
    </Section>
  );
}