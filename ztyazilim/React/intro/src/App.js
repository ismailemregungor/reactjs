import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Anchor from "./components/Anchor";
import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import Counter from "./components/Counter";

import logo from "./logo.svg";
import "./App.scss";
import Popover from "./components/Popover";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  const onClickVisibleButton = () => {
    setVisible((prevState) => !prevState);
  };

  const onVisibleChange = (newVisibility) => {
    setVisible(newVisibility);
  };

  return (
    <div className="App">
      <button onClick={onClickVisibleButton}>App button</button>
      <Popover visible={visible} onVisibleChange={onVisibleChange} />
      <Counter count={0} />
      <NotificationButton className="app-btn" count={3}>
        AB
      </NotificationButton>
      <Header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Paragraph>Merhaba</Paragraph>
        <Anchor className="App-link" target="_blank" href="https://reactjs.org">
          Learn React
        </Anchor>
      </Header>
    </div>
  );
}

export default App;
// export {App1,App2}
