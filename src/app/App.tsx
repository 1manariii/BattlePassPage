import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react-lite";
import {
  AppStyles,
  darkTheme,
  FirebaseProvider,
  initLocalization,
} from "@platform-components";
import { resources } from "@i18n";
import { BattlePassPage } from "src/features/battle-pass";

const App = observer(() => {
  initLocalization(resources);
  return (
    <FirebaseProvider>
      <ThemeProvider theme={darkTheme}>
        <AppStyles />
        <BattlePassPage />
      </ThemeProvider>
    </FirebaseProvider>
  );
});

export default App;
