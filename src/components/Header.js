import { MainMenu } from "./MainMenu";
import { HeaderContainer} from "../styles/HeaderContainer";
export const Header = () => {
    return (
        <HeaderContainer>
            <div tabIndex="-1">
                <h1 style={{padding:"1rem"}}>My Movies</h1>
                <MainMenu />
            </div>
        </HeaderContainer>

    );
}   