import { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.css";

const Carousel = ({ itemArr, visibleItemIndex }) => {
  const [visibleItem, setVisibleItem] = useState(visibleItemIndex);
  const itemCount = useMemo(() => itemArr.length, [itemArr]);

  const handleLeftClick = useCallback(() => {
    setVisibleItem((visibleItem) => (visibleItem - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const handleRightClick = useCallback(() => {
    setVisibleItem((visibleItem) => (visibleItem + 1) % itemCount);
  }, [itemCount]);

  useEffect(() => {
    let intervalId = setInterval(
      () => setVisibleItem((visibleItem) => (visibleItem + 1) % itemCount),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <div className="left" onClick={handleLeftClick}>
        {"<"}
      </div>
      <div className="visible-item">{itemArr[visibleItem]}</div>
      <div className="right" onClick={handleRightClick}>
        {">"}
      </div>
    </div>
  );
};

export default Carousel;
