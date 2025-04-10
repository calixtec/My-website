import musicBotImg from "../assets/music-bot.png";
import gymAppImg from "../assets/gym-app.png";
import cardAppImg from "../assets/card-app.png";
import llm from "../assets/llm.png";
import Bar from "../components/Divider";

export default function Projects() {
  return (
    <div>
      <h1 className="title-one">Portfolio</h1>

      <div className="project">
        <h2 className="title-style">AutoGraderLLM</h2>
        <div className="project__wrapper">
          <img className="project__img" src={llm} alt="AutoGraderLLM Screenshot" />
          <div className="project__description">
            <h3 className="project__description--title">AutoGraderLLM</h3>
            <h4 className="project__description--sub-title">
              Python, Flask, OpenAI GPT-3
            </h4>
            <p className="project__description--para">
              AutoGraderLLM is an AI-powered tool designed to automate the grading process for assignments. It utilizes large language models (LLMs) to evaluate text input and provide instant feedback. Built with Python, Flask, and integrated with OpenAI's GPT-3 API, it showcases the power of machine learning in educational settings.
            </p>
            <div className="project__description--links">
              <a href="https://github.com/themellowj/AutoGraderLLM" target="_blank" className="project__description--link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://themellowj.github.io/AutoGraderLLM" className="project__description--link">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Bar />

      <div className="project">
        <h2 className="title-style">Amazon Price Tracker Trends</h2>
        <div className="project__wrapper">
          <img className="project__img" src={gymAppImg} alt="Amazon Price Tracker" />
          <div className="project__description">
            <h3 className="project__description--title">Amazon Price Tracker</h3>
            <h4 className="project__description--sub-title">
              Web Scraping, Price Alerts
            </h4>
            <p className="project__description--para">
              This app tracks the price trends of products on Amazon, notifying users when the price drops. It uses web scraping and stores data in a local database for easy tracking over time. Users can set price alerts for products they're interested in.
            </p>
            <div className="project__description--links">
              <a href="https://github.com/themellowj/amazon-price-tracker" target="_blank" className="project__description--link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://themellowj.github.io/amazon-price-tracker" className="project__description--link">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Bar />

      <div className="project">
        <h2 className="title-style">Leetcode Bot</h2>
        <div className="project__wrapper">
          <img className="project__img" src={cardAppImg} alt="Leetcode Bot" />
          <div className="project__description">
            <h3 className="project__description--title">Leetcode Bot</h3>
            <h4 className="project__description--sub-title">
              Python, Automation
            </h4>
            <p className="project__description--para">
              The Leetcode Bot automates the process of solving Leetcode problems, providing solutions and explanations to help users improve their algorithmic skills. The bot integrates with the Leetcode platform and works by pulling up problems and providing step-by-step solutions.
            </p>
            <div className="project__description--links">
              <a href="https://github.com/themellowj/leetcode-bot" target="_blank" className="project__description--link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://themellowj.github.io/leetcode-bot" className="project__description--link">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Bar />
    </div>
  );
}
