import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import avatarImg from "./assets/profile-thumbnail.png";

const cardData = {
  username: "Sarah Dole",
  userHandle: "@sarahdole",
  cardMessage:
    "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
};

function App() {
  return (
    <div className="mt-[200px] px-[17.5px]">
      <TestimonialCard
        avatarImg={avatarImg}
        username={cardData.username}
        userHandle={cardData.userHandle}
        cardMessage={cardData.cardMessage}
      />
    </div>
  );
}

export default App;
