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
            alt="Github"
          >
            Magdalene Nsiah
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Maggie24-tech/React-Dictionary-App"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://reacweatherapp.netlify.app"
            target="_blank"
            rel="noreferrer"
            alt="Netlify"
          >
            {" "}
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
