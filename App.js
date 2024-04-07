
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Welcome to My Awesome Video Streaming Site</h2>
        <video width="700px" height="400px" controls>
           <source src="https://d3bxcpw9ckmoul.cloudfront.net/pexels-bethe-observer-5307742%20(2160p).mp4" type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
