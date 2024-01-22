import { ConfigProvider, theme } from "antd";
import MainPage from "./pages/MainPage/MainPage";
import { useState } from "react";
import { ColorProvider } from "./context/ColorContext";
import { TitleProvider } from "./context/TitleContext";
import { PermissionProvider } from "./context/PermissionContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = (value) => {
    setIsDark(value);
  };

  return (
    <PermissionProvider>
      <TitleProvider>
        <ColorProvider>
          <ConfigProvider
            theme={{
              algorithm: theme[isDark ? "darkAlgorithm" : "defaultAlgorithm"],
              token: {
                colorPrimary: "#F16C16",
              },
            }}
          >
            <MainPage onChangeTheme={onChangeTheme} />
          </ConfigProvider>
        </ColorProvider>
      </TitleProvider>
    </PermissionProvider>
  );
}

export default App;
