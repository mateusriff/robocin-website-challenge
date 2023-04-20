import MembersWrapper from "./style";
import MemberCard from "./MemberCard";

const membersList = [
    {
        name: "Carlos Pena",
        profilePicture: "https://robocin.com.br/images/membros/CarlosPena_vsss.jpg",
        category: "Very Small Size Soccer",
        github: "https://github.com/mateusriff",
        linkedin: "https://www.linkedin.com/in/mateus-riff/",
    },
    {
        name: "Cecília Virgínia",
        profilePicture: "https://robocin.com.br/images/membros/CeciliaVirginia_ssl.jpg",
        category: "Small Size Soccer",
    },
]

const Members = () => {
    return(
        <MembersWrapper>
            {membersList.map((member, index) => (
                <MemberCard 
                    key={index}
                    name={member.name}
                    profilePicture={member.profilePicture}
                    category={member.category}
                    github={member.github?.toString()}
                    linkedin={member.github?.toString()}
                />
            ))}
        </MembersWrapper>
    );
}

export default Members;