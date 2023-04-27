const { useRouter } = require("next/router");
const { useEffect } = require("react");

function Redirect({ url, as, options }) {
    const router = useRouter();
    useEffect(() => {
        router.push(url, as, options)
    }, [url, as, options, router])
    return <></>;
}

export default Redirect;