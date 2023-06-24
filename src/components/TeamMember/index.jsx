import "./team-member.css";

const TeamMemberBox = ({ name, designation, social, image }) => {
  return (
    <div className="memberBoxContainer">
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="textContainer">
        <h2>{name}</h2>
        <p>{designation}</p>
        <div className="memberSocial">
          {social.map((item) => (
            <img src={item} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBox;
