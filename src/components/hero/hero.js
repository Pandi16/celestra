import logo from "../../assets/logo.png";
import fire from "../../assets/fire.mp4";
import "./hero.css";
const hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="overlay"></div>
      <video
        className=" w-full h-full object-cover"
        src={fire}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center bg-white-200">
        <img
          src={logo}
          alt="celestra-logo"
          className="rounded-full w-[60%] sm:w-[30%]"
        />
      </div>
    </div>
  );
};

export default hero;