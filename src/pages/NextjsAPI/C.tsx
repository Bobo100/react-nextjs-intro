import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

function C() {
    const router = useRouter()

    useEffect(() => {
        if (router.isReady && router.query.from != 'B') {
            router.replace('/NextjsAPI/B')
        }
    }, [router])

    return (
        <Layout>
            <Head>
                <title>C</title>
            </Head>
            <h1>C</h1>
            <Link href={{ pathname: '/NextjsAPI/B', query: { from: 'C' } }}>
                從C前往B(會失敗，然後被導回A)
            </Link>
            <Link href={{ pathname: '/NextjsAPI/A', query: { from: 'C' } }}>
                從C前往A(會成功，因為A沒有限制)
            </Link>
        </Layout>
    )
}

export default C