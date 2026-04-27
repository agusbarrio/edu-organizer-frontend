import ProtectedPage from "components/managers/ProtectedPage";
import OAuthSuccessPage from "components/pageContents/OAuthSuccessPage";

function OauthSuccess() {
    return (
        <ProtectedPage needUserSession={false}>
            <OAuthSuccessPage />
        </ProtectedPage>
    );
}

export default OauthSuccess;
