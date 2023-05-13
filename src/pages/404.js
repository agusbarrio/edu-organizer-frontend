const { default: Redirect } = require("components/navigation/Redirect");
const { default: PATHS } = require("constants/PATHS");

function NotFound() {
    return <Redirect url={PATHS.LOGIN}></Redirect>
}

export default NotFound
