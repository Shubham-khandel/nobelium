import "./App.css";
import { User1, User2 } from "./card";

const user1 = {
  name: "Amit",
  image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  designation: "Graphic Designer",
  description:
    "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.",
};

const user2 = {
  name: "Ruhi",
  image:
    "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description:
    "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups.",
  designation: "Singer",
};

function App() {
  return (
    <div className="Cards">
      <div className="Box">
        <div className="App">
          <User1 userData={user1} className="des" />
        </div>
      </div>
      <div className="Box">
        <div className="App">
          <User2 userData={user2} className="des" />
        </div>
      </div>
    </div>
  );
}

export default App;


