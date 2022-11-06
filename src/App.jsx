import React from "react";
import axios from "axios";

function App() {
  const [memes, setMemes] = React.useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(resp.data.data.memes);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleLoadMeme();
  }, []);

  const handleLoadMeme = () => {
    getData();
  };

  return (
    <div className="page-container">
      <button onClick={handleLoadMeme}>Show memes</button>
      {memes.map((item) => (
        <div key={item.id} className="meme-container">
          <img className="meme" src={item.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
