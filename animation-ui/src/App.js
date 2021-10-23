import "./App.css";

function App() {
  return (
    <div class="w-full h-screen bg-gray-800 flex justify-center items-center">
      <div class="bg-gray-700 w-6/12 h-6/12 relative z-40">
        <div class="absolute inset-0 flex justify-center items-center z-10">
          <img src="Task1RAW_Image.jpeg" alt="Raw Image" class="bg-gray-900" />
        </div>
        <div class="absolute inset-0 flex justify-center items-center z-50">
          <img
            src="Task1Processed_Image.jpeg"
            alt="Raw Image"
            class="bg-gray-900 mix-blend-lighten ImageClip"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
