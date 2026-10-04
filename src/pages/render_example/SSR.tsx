import { GetServerSideProps } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';

type Props = {
    data: {
        title: string;
        message: string;
    };
    time: string;
};

const SsrPage = ({ data, time }: Props) => {
    return (
        <Layout>
            <Head>
                <title>SSR Page</title>
            </Head>
            <div>
                <h1>{data.title}</h1>
                <p>{data.message}</p>
                <p>這次請求的時間 {time}，因為這是SSR，所以每次請求都會變動。</p>
            </div>
        </Layout>

    );
};

// 如果你有一些數據要在頁面渲染之前先取得，你可以使用 getServerSideProps 來達成這個目的。這個方法會在每次請求時都會被呼叫，所以你可以在這裡面做一些資料庫查詢或是 API 請求，然後再將資料傳遞給頁面。
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const time = new Date().toISOString();
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return { props: { data: { title: data.title, message: data.body }, time } };
    } catch {
        return { props: { data: { title: 'SSR Page', message: '範例 API 暫時無法連線。' }, time } };
    }
};

export default SsrPage;
