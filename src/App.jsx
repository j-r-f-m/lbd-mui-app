import { MathJaxContext } from "better-react-mathjax";
import { AnchorageLength } from "./pages/AnchorageLength/AnchorageLength";
import Header from "./components/Header";

// defining config for MathJax
// see react-better MathJax documentation
const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};

function App() {
  return (
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <Header />
      <AnchorageLength />
    </MathJaxContext>
  );
}

export default App;
