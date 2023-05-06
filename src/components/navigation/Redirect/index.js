import { useEffect } from 'react';
import useNavigate from 'hooks/useNavigate';
function Redirect({ url, as, options }) {
    const { go } = useNavigate()
    useEffect(() => {
        go(url, as, options)
    }, [go, url, as, options])
    return <></>;
}

export default Redirect;