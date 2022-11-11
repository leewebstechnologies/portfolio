import "./about.css";
import Award from "../../images/award.png";
import Programming from "../../images/programming.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Programming} alt="" className="a-image" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-subject">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards</h4>
            <p className="a-award-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              aspernatur deserunt soluta non! Nostrum minus eos neque placeat
              omnis rem delectus quidem voluptate saepe, qui in nihil, sunt quod
              praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
