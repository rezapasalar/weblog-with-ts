import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import PageWrap from '../../components/global/wraps/page'

const Setting: NextPage & any = () => {

    const {t} = useTranslation()

    return (
        <PageWrap variant="panel">
            <Head>
                <title>{t('menu.setting')}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className="text-gray-500 dark:text-gray-200">{t('menu.setting')}</div>
        </PageWrap>
    )
}

Setting.layout = 'panel'

export default Setting