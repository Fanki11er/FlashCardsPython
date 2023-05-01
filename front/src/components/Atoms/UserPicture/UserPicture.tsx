
import { StyledUser, UserName, UserPictureWrapper } from "./UserPicture.styled"

interface Props{
    userName: string;
}

export const UserPicture = (props: Props)=>{

    const {userName} = props;
    return(
        <UserPictureWrapper>
            <StyledUser/>
            <UserName>
                {userName}
            </UserName>
        </UserPictureWrapper>
    )
}

export default UserPicture;