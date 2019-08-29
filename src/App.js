import React from "react";
import Quill from "quill2-dev";

class App extends React.Component {
  componentDidMount() {
    var options = {
      theme: "snow",
      modules: {
        table: true,
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"]
        ]
      }
    };

    var editor = new Quill("#editor-container", options);
    document
      .querySelector("#insert-table")
      .addEventListener("click", function() {
        debugger;
        const table = editor.getModule("table");
        table.insertTable(2, 2);
      });
  }
  render() {
    return (
      <div className="App">
        <div id="editor-container"></div>
        <button id="insert-table">Insert</button>
      </div>
    );
  }
}

export default App;
