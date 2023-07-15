import { useState, useEffect } from "react";
import "./App.css";
import BackgroundAnimate from "./components/BackgroundAnimate";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleShortLink = async () => {
    try {
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${value}`
      );
      const data = await response.data;
      if (data.ok == true) return setData(data.result.full_short_link);
    } catch (err) {
      swal("Something Wrong", `Error: ${err.response.data.error} `, "error");
    }
  };
  const handleCopy = () => {
    swal("Successfull Copy", `You Copy : ${data} `, "success");
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="textColor">Shorten URL</h1>
        </div>
        <div className="inputValue">
          <input
            type="text"
            placeholder="Insert your link ex: https://example.com"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="short" onClick={handleShortLink}>
            Short
          </button>
        </div>

        {data == "" ? (
          ""
        ) : (
          <div className="resultShorten">
            <input type="text" value={data} />
            <CopyToClipboard text={data}>
              <button className="copy" onClick={handleCopy}>
                Copy
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>
      <BackgroundAnimate />
    </>
  );
}

export default App;
