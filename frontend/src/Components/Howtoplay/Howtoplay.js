import React from "react";
import "./Howtoplay.css";
import rule1 from "../../images/rule1.svg";
import rule2 from "../../images/rule2.svg";
import rule3 from "../../images/rule3.svg";
import rule4 from "../../images/rule4.svg";

const Howtoplay = () => {
  return (
    <div className="howtoplay-page">
      <h1 className="header">How to play</h1>
      <div className="rules">
        <div className="rule-container">
          <div className="number-container">
            <img src={rule1} width="50px" alt="rule number indicator" />
          </div>

          <div>
            <p className="rule">Answer as many questions as you can in the time allowed.</p>
          </div>
        </div>

        <div className="rule-container">
          <div className="number-container">
            <img src={rule2} width="50px" alt="rule number indicator" />
          </div>
          <div>
            <p className="rule">
              Answer a question correctly to add more time to the bomb. The harder the question, the more time you get.
            </p>
          </div>
        </div>

        <div className="rule-container">
          <div className="number-container">
            <img src={rule3} width="50px" alt="rule number indicator" />
          </div>
          <div>
            <p className="rule">If the timer expires, the bomb goes off and it's game over.</p>
          </div>
        </div>

        <div className="rule-container">
          <div className="number-container">
            <img src={rule4} width="50px" alt="rule number indicator" />
          </div>
          <div>
            <p className="rule">Have fun!</p>
          </div>
        </div>
      </div>
      <div className="bombCatch">
        <svg
          className="bombIcon"
          width="220"
          height="220"
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M533.418 107.168L470.449 170.137L502.539 202.227C513.922 213.609 513.922 232.016 502.539 243.277L481.469 264.348C495.758 295.953 503.75 331.07 503.75 368.004C503.75 507.141 391.012 619.879 251.875 619.879C112.738 619.879 0 507.262 0 368.125C0 228.988 112.738 116.25 251.875 116.25C288.809 116.25 323.926 124.242 355.531 138.531L376.602 117.461C387.984 106.078 406.391 106.078 417.652 117.461L449.742 149.551L512.711 86.5823L533.418 107.168ZM605.469 72.6561H576.406C568.414 72.6561 561.875 79.1951 561.875 87.1878C561.875 95.1799 568.414 101.719 576.406 101.719H605.469C613.461 101.719 620 95.1799 620 87.1878C620 79.1951 613.461 72.6561 605.469 72.6561ZM532.812 0C524.82 0 518.281 6.53906 518.281 14.5312V43.5938C518.281 51.5859 524.82 58.125 532.812 58.125C540.805 58.125 547.344 51.5859 547.344 43.5938V14.5312C547.344 6.53906 540.805 0 532.812 0ZM573.863 66.6019L594.449 46.0156C600.141 40.3242 600.141 31.1211 594.449 25.4297C588.758 19.7383 579.555 19.7383 573.863 25.4297L553.277 46.0156C547.586 51.707 547.586 60.9102 553.277 66.6019C559.09 72.2927 568.293 72.2927 573.863 66.6019ZM491.762 66.6019C497.453 72.2927 506.656 72.2927 512.348 66.6019C518.039 60.9102 518.039 51.707 512.348 46.0156L491.762 25.4297C486.07 19.7383 476.867 19.7383 471.176 25.4297C465.484 31.1211 465.484 40.3242 471.176 46.0156L491.762 66.6019ZM573.863 107.773C568.172 102.082 558.969 102.082 553.277 107.773C547.586 113.465 547.586 122.668 553.277 128.359L573.863 148.945C579.555 154.637 588.758 154.637 594.449 148.945C600.141 143.254 600.141 134.051 594.449 128.359L573.863 107.773ZM135.625 329.375C135.625 286.629 170.379 251.875 213.125 251.875C223.781 251.875 232.5 243.156 232.5 232.5C232.5 221.844 223.781 213.125 213.125 213.125C149.066 213.125 96.875 265.316 96.875 329.375C96.875 340.031 105.594 348.75 116.25 348.75C126.906 348.75 135.625 340.031 135.625 329.375Z"
            fill="#FF8C42"
          />
        </svg>
         


        

        <h1 className="catchLine">Test Your Knowledge increase your Brain.</h1>
      </div>
    </div>
  );
};

export default Howtoplay;
