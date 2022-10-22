import { useEffect } from "react";
import WebFont from "webfontloader";
import './App.css';
import data from "./assignmentData.json";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Tiro Tamil", "Cormorant Garamond", "Joan"]
      }
    });
  }, []);

  // const url = "https://drive.google.com/file/d/1Klnot9Mmei6vUlAh0mU1KeexT68tVpN7/view?usp=sharing";
  // // const d = async () => {
  // //   const url = "https://drive.google.com/file/d/1Klnot9Mmei6vUlAh0mU1KeexT68tVpN7/view?usp=sharing";
  // //   let data = await fetch(url);
  // //   return data;
  // // }

  // It's showing access denied while developing the page

  return (
    <div className="container">
      {data &&
        data.map(d => (
          <div className="data-container">
            <h5>{d.title}</h5>
            <h6>{d.insight}<span id="country">{d.country && d.country}</span></h6>
            <p id="region"><span>Region: </span>{d.region && d.region.toUpperCase()}</p>
            <div className="year-source">
              <p id="source"><span>Source: </span>{d.source && d.source}</p>
              <p id="year"><span>Year: </span>{d.year && d.year}</p>
            </div>
            <div className="sector-topic-link">
              <p id="sector"><span>Sector: </span>{d.sector && d.sector}</p>
              <p id="topic"><span>Topic: </span>{d.topic && d.topic.toUpperCase()}</p>
              <a href={d.url} target="_blank" rel='noreferrer' className="btn">Read More</a>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;

