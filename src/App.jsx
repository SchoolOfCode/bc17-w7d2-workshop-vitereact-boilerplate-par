import Header from "./components/Header"; // Assuming the file is renamed to Header.jsx
import Hero from "./components/Hero"; // Assuming the file is renamed to Hero.jsx
import HowItWorksSection from "./components/HowItWorks/Articles/HowItWorks"; // Assuming the file is renamed to HowItWorks.jsx

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <HowItWorksSection />
    </div>
  );
}
export default App;
