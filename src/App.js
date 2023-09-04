import Carousel from "./Carousel";
import "./styles.css";

export default function App() {
  const itemArr = [...new Array(5)].map((_, id) => (
    <img
      src={`https://picsum.photos/id/${id}/200/200`}
      alt={"carousal-image"}
    />
  ));

  return (
    <div className="App">
      <Carousel itemArr={itemArr} visibleItemIndex={0} />
    </div>
  );
}
