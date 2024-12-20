import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import rating from "../../assets/star.png";

function Marque() {
  return (
    <div>
      {/* marquee text  */}
      <div>
        <Marquee
          className="text-xl bg-gray-100 py-3  z-0 font-semibold space-x-14 text-gray-800"
          pauseOnHover={true}
          speed={50}
        >
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "The platform is amazing, it provides practical skills
            and knowledge!"
          </Link>
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "This website is a life-changer! I can now work
            independently on projects."
          </Link>
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "Best resource ever! They guide you step by step for
            real-world scenarios."
          </Link>
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "I feel more confident in my skills now. Highly recommend
            this site!"
          </Link>
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "Learning has never been so fun and effective! Kudos to
            the team."
          </Link>
          <Link to={"/"} className="mx-6">
            ⭐⭐⭐⭐⭐ "Not just learning, but growing every day with this
            platform!"
          </Link>
        </Marquee>
      </div>
    </div>
  );
}

export default Marque;
