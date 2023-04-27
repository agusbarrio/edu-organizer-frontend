import TEXTS from "constants/TEXTS"
import useLocaleContext from "contexts/LocaleContext/useLocaleContext"
import Head from "next/head"

function PageHead({ title, description }) {
    const { translate } = useLocaleContext()
    return (
        <Head>
            <title>{title ?? translate(TEXTS.HOME_HEAD_TITLE)}</title>
            {description && <meta name="description" content={description} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="./favicon.ico" />
        </Head>
    )
}
export default PageHead