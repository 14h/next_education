import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }: any) {
    return (
        <Header>
            <Header.Frame>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>
                    Sign In
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
