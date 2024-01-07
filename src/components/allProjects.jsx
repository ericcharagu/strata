/* import React from "react";
import { ReactDOM } from "react";
import { projectsData } from "./projectsData";
function AllProjects() {
  const useState = React.useState;

  function App(props) {
    const [app, updateApp] = useState({
      currentIndex: 0,
      lastIndex: -1,
      direction: 0,
    });

    return (
      <div className="wrapper">
        <div className="intro"></div>

        <Carousel
          direction={app.direction}
          currentIndex={app.currentIndex}
          lastIndex={app.currentIndex}
          updateApp={updateApp}
          shapes={props.shapes}
        />

        <Code
          direction={app.direction}
          lastShape={props.shapes[app.lastIndex]}
          currentShape={props.shapes[app.currentIndex]}
          shapes={props.shapes}
        />
      </div>
    );
  }

  function Carousel(props) {
    function showNext(index) {
      let lastIndex =
        index < 0
          ? 0
          : index === props.shapes.length
          ? props.shapes.length - 1
          : index;
      let currentIndex = index + 1 === props.shapes.length ? 0 : index + 1;
      props.updateApp({ currentIndex, lastIndex, direction: 1 });
    }

    function showPrevious(index) {
      let lastIndex = index < 0 ? 0 : index;
      let currentIndex = index - 1 < 0 ? props.shapes.length - 1 : index - 1;
      props.updateApp({ currentIndex, lastIndex, direction: -1 });
    }

    return (
      <div
        className={"carousel carousel--" + props.shapes[props.currentIndex][0]}
      >
        <div
          onClick={() => showPrevious(props.currentIndex)}
          className="controls controls--back"
        >
          <span></span>
        </div>

        <Slide shape={props.shapes[props.currentIndex]} />

        <div
          onClick={() => showNext(props.currentIndex)}
          className="controls controls--next"
        >
          <span></span>
        </div>
      </div>
    );
  }

  function Slide(props) {
    const [copyMessage, setCopyMessage] = useState(false);

    function copyCSS(shapeCSS) {
      navigator.clipboard.writeText(shapeCSS).then(
        () => {
          console.log("Successfully copied CSS to clipboard");

          setCopyMessage(true);

          setTimeout(setCopyMessage, 2000, false);
        },
        () => {
          console.log("Error: couldn't copy to clipboard :(");
        }
      );
    }

    return (
      <div key={props.shape[0]} className={"slide slide--" + props.shape[0]}>
        <h6
          className={"slide__copy-message " + (copyMessage ? "show" : "nope")}
        >
          I am in your Clipboard!
        </h6>

        <div
          onClick={() => copyCSS(props.shape[1])}
          className={"slide__shape slide__shape--" + props.shape[0]}
        ></div>
      </div>
    );
  }

  function Code(props) {
    return (
      <div className={"code-wrapper code-wrapper--" + props.currentShape[0]}>
        <pre
          key={props.currentShape[0]}
          className={
            "code code--active" +
            (props.direction < 0 ? " slide-left" : " slide-right")
          }
        >
          {props.currentShape[1]}
        </pre>

        {props.lastShape && (
          <pre
            key={props.lastShape[0]}
            className={
              "code code--last" +
              (props.direction < 0 ? " slide-left" : " slide-right")
            }
          >
            {props.lastShape[1]}
          </pre>
        )}
      </div>
    );
  }
}
export default AllProjects;
 */
