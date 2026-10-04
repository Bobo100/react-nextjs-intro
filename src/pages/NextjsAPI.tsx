import Head from 'next/head'
import Layout from '../components/layout'
import { CommonPrism } from '../components/Common'
import Link from 'next/link'
import ContactForm from '../components/submit-form/submit-contact'
function NextjsAPI() {
    return (
        <Layout>
            <Head>
                <title>Next.js中的API</title>
            </Head>
            <div>
                <h1>Next.js中的API</h1>
                <p>Next.js提供很多API，包含我們前面學的next/image與next/link，那還有很多像是next/router、next/head等等。並且也提供你自己寫API的功能。</p>

                <h1>介紹如何在Next.js中自己寫Api並且使用</h1>
                <a href="https://nextjs.org/docs/api-routes/introduction">官方文件連結</a>
                <p>
                    在Next.js中，你可以在pages資料夾中建立一個api資料夾，並且在裡面建立一個js檔案，這個檔案就是你的API，你可以在裡面寫一些功能，並且在前端使用。<br />
                    而且這些檔案都不會被當成一個頁面，所以不會被編譯成html檔案。 <br />
                    它們是伺服器端的bundles，也不會增加客戶端的bundle大小。
                </p>

                <p className='hightlight'>可能會想問說：在next.js中page/api下寫api和我在後端寫api的差別是什麼?</p>

                <p className='border'>在 Next.js 中，`/api` 資料夾下的檔案代表的是 Serverless 函數。它們是在部署程式碼時，由 AWS Lambda 或其他雲端提供商啟動的小型函數。<br />
                    與傳統後端API的差異在於，這些 Serverless 函數與您的Next.js應用程式掛鉤，可以幫助您輕鬆地創建 API 端點，因此您可以使用同一種語言 (JavaScript/TypeScript)，以及使用相同的開發環境，便於管理和測試。此外，它們還具有自動擴展、零配置和即時預覽等功能，使其更容易部署和使用。<br />
                    因此，與傳統後端API相比，使用 Next.js API 可以大大簡化您的工作流程，讓您專注於開發和部署應用程式的其他方面。
                </p>

                <p>直接舉個例子：</p>
                <CommonPrism>
                    {`// This is an example of an API route.
// pages/api/user.js
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}`}
                </CommonPrism>
                <p>上面我們在pages/api資料夾中建立了一個user.js檔案，並且在裡面寫了一個handler，這個handler會回傳一個json格式的資料。</p>
                <p>當我們開啟網頁的時候就會自動有一個路徑是/api/user，這個路徑就是我們剛剛建立的API。<br />
                    所以你輸入localhost:3000/api/user就會看到我們剛剛回傳的json資料。
                    <Link href="/api/user">api/user</Link>
                </p>

                <p className='hightlight'>解釋</p>
                <p>為了讓Api有效果，我們必須寫上默認的export default function handler(req, res) { }，這個handler會接收兩個參數，req是request，res是response。</p>
                <p>在這個handler裡面，我們可以使用req來取得前端傳過來的資料，並且使用res來回傳資料。</p>
                <p>req 是 http.IncomingMessage 的實例，這個物件包含了請求的資訊，例如：url、method、headers等等。</p>
                <p>res 是 http.ServerResponse 的實例，這個物件包含了回應的資訊，例如：status、setHeader、write、end等等。</p>

                <p>例如post請求，我們可以這樣寫：</p>
                <CommonPrism>
                    {`// This is an example of an API route.
// pages/api/user.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
}`}
                </CommonPrism>

                <p className='hightlight'>注意</p>
                <p>API Routes預設是沒有CORS(跨來源資源共用)的，意味著只有相同的網域才能發送請求給這個API route。</p>
                <p>如果要讓其他不同網域的網頁也可以藉由 AJAX 發送請求，就得自行加入 CORS 相關的 headers。(待驗證)</p>
                <a href="https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors">官方做法連結</a>

                <h2>接著談到Dynamic API Routes</h2>
                <p>Dynamic API Routes是一種可以讓你在API中使用動態路由的方法。Next.js中是支持動態路由的，所以我們可以在API中使用動態路由。</p>
                <p>例如：</p>
                <CommonPrism>
                    {`// pages/api/post/[id].js
export default function handler(req, res) {
    // 這是javascript的解構賦值
    // 從req中取出query，並且把id取出來，然後把id賦值給id
    // 注意一定要寫query，因為req.query才是query，並且後面接的要是檔案的名稱
    const {
        query: { id },
    } = req

    res.end(\`Post: \${id}\`)
}`}
                </CommonPrism>
                <p>上面我們寫了一個動態路由的API，當我們輸入localhost:3000/api/post/123，就會看到Post: 123。
                    <Link href="/api/post/123">api/123</Link>
                </p>

                <p>我們還可以透過展開運算子來取得所有的參數，例如：</p>
                <CommonPrism>
                    {`// pages/api/post/[...slug].js
export default function handler(req, res) {
    const {
        query: { slug },
    } = req
    
    res.end(\`Post: \${slug}\`)
}`}
                </CommonPrism>
                <p>上面我們寫了一個動態路由的API，當我們輸入localhost:3000/api/post/123/456，slug就會是一個陣列，裡面包含了123和456，並且會回傳Post：123,456。
                    <Link href="/api/post/123/456">api/123/456</Link></p>
                <CommonPrism>
                    {`"slug": ["123", "456"] `}
                </CommonPrism>

                <p className='hightlight'>注意</p>
                <p>假如我們有三個檔案，分別是：</p>
                <div className='border'>
                    <p>pages/api/post/create.js</p>
                    <p>pages/api/post/[pid].js</p>
                    <p>pages/api/post/[...slug].js</p>
                </div>
                <p>那麼，這三個檔案最造成的結果是：</p>
                <div className='border'>
                    <p>pages/api/post/create.js - 會配對 /api/post/create</p>
                    <p>pages/api/post/[pid].js - 會配對 /api/post/1, /api/post/abc, etc. 但是不會觸發 /api/post/create</p>
                    <p>pages/api/post/[...slug].js - 會配對 /api/post/1/2, /api/post/a/b/c, etc. 但是不會觸發 /api/post/create, /api/post/abc</p>
                </div>


                <h2>接著談到API Routes Request Helpers (未完成)</h2>
                <p>API Routes Request Helpers是一種可以讓你在API中使用request helper的方法。Next.js中是支持request helper的，所以我們可以在API中使用request helper。</p>
                <p>目前有三種request helper：</p>
                <div className='border'>
                    <p>req.cookies - An object containing the cookies sent by the Request<br />
                        意思是說，如果我們在API中使用req.cookies，就可以取得cookie的值。
                    </p>
                    <p>req.query - An object containing the request&apos;s query string<br />
                        意思是說，如果我們在API中使用req.query，就可以取得query string的值。
                    </p>
                    <p>req.body - An object containing the body parsed by body-parser (if installed)<br />
                        意思是說，如果我們在API中使用req.body，就可以取得body的值。
                    </p>
                </div>

                <h2>接著談到API Routes Response Helpers</h2>
                <p>Server Response object通常會縮寫成res，包括了一組類似Express的方法，可以讓你在API中使用response helper。</p>
                <p>目前有五種response helper：</p>
                <div className='border'>
                    <p>res.status(code) - Set the status code sent with the response<br />
                        意思是說，如果我們在API中使用res.status(code)，就可以設定回傳的status code。注意必須是有效的HTTP狀態碼，例如200。
                    </p>
                    <p>res.json(json) - Send a JSON response<br />
                        意思是說，如果我們在API中使用res.json(json)，就可以回傳json格式的資料。注意必須是serializable(序列化)的物件。
                    </p>
                    <p>res.send(body) - Send a response of various types<br />
                        意思是說，如果我們在API中使用res.send(body)，就可以回傳body的資料。body可以是string, Buffer, Stream, or Object。
                    </p>
                    <p>res.redirect([status,] path) - Redirect a request<br />
                        意思是說，如果我們在API中使用res.redirect([status,] path)，就可以重導向到path。
                        注意：status必須是有效的HTTP狀態碼，例如301, 302, 303, 307, 308。如果沒有指定會是默認307，意思是臨時重定向。
                    </p>
                    <p>res.revalidate(urlPath) - Revalidate a page<br />
                        意思是說，如果我們在API中使用res.revalidate(urlPath)，就可以重新驗證urlPath。強制重新驗證頁面，並且在下一次訪問時，會重新生成頁面。
                    </p>
                </div>
                <h3>res.status(code)</h3>
                <p>如果我們在API中使用res.status(code)，就可以設定回傳的status code。注意必須是有效的HTTP狀態碼，例如200。</p>
                <CommonPrism>
                    {`export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}`}
                </CommonPrism>
                <p>這個當我們成功進入到API時，就會回傳200的status code。</p>
                <p>200意思就是OK，代表請求成功。</p>

                <h3>res.json(json)</h3>
                <p>如果我們在API中使用res.json(json)，就可以回傳json格式的資料。注意必須是serializable(序列化)的物件。</p>
                <CommonPrism>
                    {`export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}`}
                </CommonPrism>
                <p>這個當我們成功進入到API時，就會回傳200的status code，並且回傳json格式的資料。透過res.json(json)會自動處理json序列化的問題，還會自動設置Content-Type為application/json。</p>

                <h3>res.send(body)</h3>
                <p>如果我們在API中使用res.send(body)，就可以回傳body的資料。body可以是string, Buffer, Stream, or Object。</p>
                <CommonPrism>
                    {`export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}`}
                </CommonPrism>
                <p>這個當我們成功進入到API時，就會回傳200的status code，並且回傳body的資料。</p>
                <p>再重複一次，這個和res.json(json)的差別是，res.json(json)是只能回傳json格式的資料，而res.send(body)可以回傳包含string, Buffer, Stream, or Object的資料(當然也可以回傳json格式的資料)。</p>
                <p>那除非你的json格式的資料是string，否則你應該使用res.json(json)。</p>


                <h3>res.redirect([status,] path)</h3>
                <p>如果我們在API中使用res.redirect([status,] path)，就可以重導向到path。注意：status必須是有效的HTTP狀態碼，例如301, 302, 303, 307, 308。如果沒有指定會是默認307，意思是臨時重定向。</p>
                <p>例如：你可能希望在使用者填完表單後，重導向到另一個頁面。(但目前實測後，似乎沒有作用)</p>
                <CommonPrism>
                    {`export default async function handler(req, res) {
  const { name, message } = req.body
  try {
    // await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}`}
                </CommonPrism>

                <ContactForm />

                <h3>res.revalidate(urlPath)</h3>
                <p>這部分，我們前面有提到了，所以就不再說明(請參考Next.js渲染模式)</p>

                <h2>TypeScript types</h2>
                <p>我們可以把API的參數req和res，定義成NextApiRequest和NextApiResponse。</p>
                <CommonPrism>
                    {`// pages/api/safeUse.ts
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}`}
                </CommonPrism>

                <h2>Edge API Routes</h2>


                <h1>next/router</h1>
                <p>next/router是Next.js的路由器，它提供了一個客戶端的路由器，可以讓我們在客戶端導航。</p>
                <p>它是一個全局的路由器，所以我們可以在任何地方使用它。</p>
                <p>它的API如下：</p>
                <ul>
                    <li>router.push(url, as=url, options)</li>
                    <li>router.replace(url, as=url, options)</li>
                    <li>router.reload()</li>
                    <li>router.back()</li>
                    <li>router.prefetch(url)</li>
                    <li>router.beforePopState(cb)</li>
                    <li>router.events</li>
                </ul>

                <p>像是我們可以去檢測上一次的路由是什麼，或者是我們可以在路由改變前做一些事情。</p>
                <p>下面舉一個頁面跳轉限制的例子：</p>
                <p>會創建三個pages分別是、B和C，我們要設定說，B也面只有A頁面能夠跳轉過來，C也面只有B頁面能夠跳轉過來。</p>
                <p>只要跳轉進來的路徑不正確就會跳轉到我們指定的路徑去。</p>
                <CommonPrism>
                    {`// pages/NextjsAPI/A.tsx
function A() {
    return (
        <Layout>
            <Head>
                <title>A</title>
            </Head>
            <h1>A</h1>
            <Link href={{ pathname: '/NextjsAPI/B', query: { from: 'A' } }}>
                從A前往B，會成功！
            </Link>
            <Link href={{ pathname: '/NextjsAPI/C', query: { from: 'A' } }}>
                從A前往C (不會成功) 而且因為我們也設定了B 必須是從A前往，所以會被導回A
            </Link>
        </Layout>
    )
}

export default A`}
                </CommonPrism>

                <CommonPrism>
                    {`// pages/NextjsAPI/B.tsx
import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";

function B() {
    const router = useRouter()

    if (router.query.from != 'A') {
        router.push('/NextjsAPI/A')
    }

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

export default B`}
                </CommonPrism>
                <p>同理，你就會設定C頁面</p>

                <Link href="/NextjsAPI/A">前往體驗</Link>

                <h1>next/head</h1>
            </div>

        </Layout >
    )
}

export default NextjsAPI