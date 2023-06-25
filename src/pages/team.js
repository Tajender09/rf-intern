import TeamMemberBox from "../components/TeamMember";
import ZidaneImg from "../assets/zidane.jpg";
import ToniImg from "../assets/tonikroos.jpg";
import IkerImg from "../assets/ikercasillas.jpeg";
import JamesImg from "../assets/james.jpg";
import CristianoImg from "../assets/christiano.jpg";
import medium from "../assets/medium.png";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.png";
import "../styles/team.css";

const Team = () => {
  const teamMembersObj = [
    {
      id: 1,
      name: "Zidane",
      designation: "Leadership & management",
      social: [linkedin, medium, facebook],
      image: ZidaneImg,
    },
    {
      id: 2,
      name: "Toni Kroos",
      designation: "Product Developer",
      social: [linkedin, medium],
      image: ToniImg,
    },
    {
      id: 3,
      name: "Iker Casillas",
      designation: "Marketing Strategy",
      social: [medium],
      image: IkerImg,
    },
    {
      id: 4,
      name: "James",
      designation: "Product Designer",
      social: [medium, facebook, linkedin],
      image: JamesImg,
    },
    {
      id: 5,
      name: "Cristiano",
      designation: "Financial Operations",
      social: [linkedin, facebook],
      image: CristianoImg,
    },
  ];
  return (
    <div className="teamContainer wrapperWidth">
      <h2 className="memberText">
        Without bounding and coordination, every projext is a failure. Look at
        who makes KICKSUP great. ;)
      </h2>
      <div className="membersContiner">
        {teamMembersObj.map((member) => (
          <TeamMemberBox
            key={member.id}
            name={member.name}
            designation={member.designation}
            social={member.social}
            image={member.image}
          />
        ))}
      </div>
      <h1 className="memberText">and You! ;)</h1>
    </div>
  );
};

export default Team;
