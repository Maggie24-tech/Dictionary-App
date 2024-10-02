import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          MN Dictionary
          <p>
            Dictionary from: <span className="source">Google Dictionary </span>
          </p>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Maggie24-tech"
            target="_blank"
            rel="noreferrer"
          >
            Magdalene Nsiah
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Maggie24-tech/React-Dictionary-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://reacweatherapp.netlify.app"> Netlify </a>
        </footer>
      </div>
    </div>
  );
}
