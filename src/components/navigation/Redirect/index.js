import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Redirect({ url, as, options }) {
    const router = useRouter();
    useEffect(() => {
        router.push(url, as, options)
    }, [url, as, options, router])
    return <></>;
}

export default Redirect;