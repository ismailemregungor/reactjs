import { useEffect, useState } from "react";

const Popover = ({ visible = false, onVisibleChange }) => {
  const [isVisible, setIsVisible] = useState(visible);

  const onClickButton = () => {
    setIsVisible((prevState) => {
      onVisibleChange(!prevState);
      return !prevState;
    });
  };

  useEffect(() => {
    if (visible !== isVisible) {
      setIsVisible(visible);
    }
    // eslint-disable-next-line
  }, [visible]);

  useEffect(() => {
    // component yüklendikten sonra bu callback function çalışır.
    console.log("component render edildi.");
  }, []); // array boş olduğu için

  return (
    <div>
      <button onClick={onClickButton}>Click me</button>
      {isVisible && (
        <div>
          <h5>Title</h5>
          <p>Description</p>
        </div>
      )}
    </div>
  );
};

export default Popover;
