import { useEffect, useState } from 'react';
import MembersWrapper from "./style";
import MemberCard from "./MemberCard";
import { getMembers } from '@/sanity/sanityUtils'

type MemberTypes = {
    _id: string,
    createdAt: string,
    name: string,
    slug: string,
    image: string,
    github: string,
    linkedin: string,
}  

const Members = () => {
    
    const [members, setMembers] = useState<MemberTypes[]>([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const membersList = await getMembers();
            setMembers(membersList);
        };

        fetchMembers();
    }, []);
    
    return(
        <MembersWrapper>
            {members.map((member: MemberTypes) => (
                <MemberCard 
                    key={member._id}
                    name={member.name}
                    profilePicture={member.image}
                    category="placeholder"
                    github={member.github?.toString()}
                    linkedin={member.linkedin?.toString()}
                />
            ))}
        </MembersWrapper>
    );
}

export default Members;