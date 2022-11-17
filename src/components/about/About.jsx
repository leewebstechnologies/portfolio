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
          I attended Zion African Church Primary school Alagbaa, Iyana-Ipaja,
          Agege from 1991 to 1996 and State high school Oyewole, Agege from 1996
          to 2002 for my primary and secondary education respectively. I
          graduated in Accounting from the university of Lagos in 2014. I attend
          Annahdah institute of Arabic and Islamic studies from 2007 till date.
          I attended Zad Academy, Makkah, Kingdom of Saudi Arabia where I bagged
          a diploma in Islamic Law (with a distinction) from 2020 to 2022. I
          worked as a software developer and graphic designer intern in Techend
          Incubation Limited, Oshodi, Lagos from 2018 to 2020. I now work as a
          freelancer - Graphic designer and web developer.
        </p>
        <p className="a-desc">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende. */}
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards</h4>
            <p className="a-award-desc">
              We can help you build better websites using React Js and its
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
