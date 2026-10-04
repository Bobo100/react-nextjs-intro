import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

function B() {
    const router = useRouter()

    useEffect(() => {
        if (router.isReady && router.query.from != 'A') {
            router.replace('/NextjsAPI/A')
        }
    }, [router])
    
    return (
        <Layout>
            <Head>
                <title>B</title>
            </Head>
            <h1>B</h1>
            <Link href={{ pathname: '/NextjsAPI/A', query: { from: 'B' } }}>
                從B前往A(一定成功。因為A沒有限制)
            </Link>
            <Link href={{ pathname: '/NextjsAPI/C', query: { from: 'B' } }}>
                從B前往C(會成功，因為我們設定一定要從B前往)
            </Link>
        </Layout>
    )
}

export default B