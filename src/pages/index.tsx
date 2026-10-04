// https://react-next-js-introduce.vercel.app/
import Head from "next/head";
import { CommonPrism } from "../components/Common";
import Layout from '../components/layout';
export default function HomePage(props) {
    console.log("props", props)
    return (
        <Layout>
            <Head>
                <title>Next.js介紹</title>
            </Head>
            <div>
                <h1>Next.js介紹</h1>
                <p>Next.js是一個基於 React 的服務端渲染 框架，提供了自動代碼分割、靜態導出、服務端渲染等功能。它適用於構建大型、高流量的應用程序，可以讓我們快速建立React應用程式。</p>
                <p>Next.js的優點：</p>
                <ul>
                    <li>自動化的路由 (不需要自己在寫router)</li>
                    <li>自動化的編譯</li>
                    <ul>
                        <li>開發人員只需要按照慣例編寫代碼，然後在構建時使用Next.js，就可以自動完成代碼的編譯（compile）。現代JavaScript（例如ES6+）和CSS（例如Sass、Less等）通常需要編譯成舊版的JavaScript和CSS，以便在所有流覽器上運行。Next.js可以幫助開發人員自動完成這些編譯工作，讓開發人員專注於編寫代碼本身。</li>
                    </ul>
                    <li>自動化的代碼分割</li>
                    <ul>
                        <li>在使用Next.js開發時，Next.js會自動將頁面拆分成多個小塊（chunks），並在需要時動態載入這些小塊。這樣可以提高頁面加載速度和性能，因為當用戶訪問頁面時，只需要載入所需的小塊，而不需要載入整個頁面。</li>
                    </ul>
                    <li>自動化的靜態資源優化</li>
                </ul>

                <p>Next.js的缺點：</p>
                <ul>
                    <li>不支持IE11</li>
                    <li>不支持自定義服務端渲染</li>
                </ul>

                <p>常常會有人拿Vite來比較，和Vite相比，Next.js適合用來做大型的專案，而Vite則適合用來做小型的專案</p>

                <h2>如何使用Next.js</h2>
                <p>先教你使用快速方法安裝，晚點也會教你如何從頭開始建立一個Next.js專案</p>

                <h3>快速安裝</h3>
                <p>直接使用create-next-app建立一個Next.js專案，如果你是typescript的話，請使用npx create-next-app@latest --typescript</p>
                <CommonPrism>
                    {`npx create-next-app@latest
// typescript 但其實已經沒有影響了，因為他都會問你要不要使用typescript
npx create-next-app@latest --typescript`}
                </CommonPrism>
                <p>當你使用指令的時候，會問你一些問題如下：</p>
                <ul>
                    <li>&quot;What is your project named?&quot; 是詢問專案名稱。</li>
                    <li className="change_color">&quot;Would you like to use TypeScript with this project?&quot; 是詢問是否要使用 TypeScript</li>
                    <li>&quot;Would you like to use ESLint with this project?&quot; 是詢問是否要使用 ESLint （程式碼檢查工具）。</li>
                    <li>&quot;Would you like to use src/ directory with this project?&quot; 是詢問是否要將專案中的源代碼放在 src/ 目錄下（而非根目錄）。</li>
                    <li>&quot;Would you like to use experimental app/ directory with this project?&quot; 是詢問是否要使用實驗性的 app/ 目錄來組織應用程序代碼。</li>
                    <li>&quot;What import alias would you like configured?&quot; 是詢問要配置哪個導入別名，例如 @/components、@/utils 等等</li>
                </ul>

                <p>那你可以全部都使用預設，那就是直接Enter到底，就恭喜你，你已經建立好一個Next.js專案了</p>
                <p>在這個專案下，你可以執行npm run dev，然後到localhost:3000看到你的網頁</p>

                <p className="hightlight">實際上如果你前面沒選擇typescript，你還是可以在專案內使用typescript</p>

                <p>介紹一下當你安裝完成後裡面的資料夾內容，你會看到的資料夾結構：</p>
                <CommonPrism>
                    {`my-app
├── node_modules
├── pages
│   ├── api
│   │   └── hello.js
│   └── index.js
|   └── _app.js
|   └── _document.js
├── public
│   └── favicon.ico
|   └── vercel.svg
|   └── next.svg
|   └── thirteen.svg
├── styles
│   └── globals.css
|   └── home.module.css
├── .gitignore
├── .eslintrc.json
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
├── jsconfig.json // 如果你是安裝typescript的話，就不會有這個檔案
├── next-env.d.ts // 如果你沒有安裝typescript就不會有
└── tsconfig.json // 如果你沒有安裝typescript就不會有`}
                </CommonPrism>

                <p>接下來，我們來介紹一下這些資料夾的用途</p>
                <ul>
                    <li>node_modules：這個資料夾是用來放置npm安裝的套件</li>
                    <li>pages：這個資料夾是用來放置頁面的，每個檔案都會自動產生一個路由，例如pages/index.js會產生一個路由為/</li>
                    <li>public：這個資料夾是用來放置靜態資源的，例如圖片、字型等等</li>
                    <li>styles：這個資料夾是用來放置樣式的，這個資料夾內的檔案會自動被引入到每個頁面中</li>
                    <li>.gitignore：這個檔案是用來設定git忽略的檔案</li>
                    <li>.eslintrc.json：這個檔案是用來設定eslint的規則，eslint 是一種工具可以檢查 JavaScript 程式碼是否符合特定的規範和風格</li>
                    {/* 這是ESLint的設定檔，它指示ESLint遵循"core-web-vitals"範本。
                    該範本包含了與核心Web Vitals相關的規則，這使得開發人員能夠更輕鬆地確保自己的代碼符合頁面體驗和性能指標。 
                    ES Lint可以根據您的配置自動檢查您的代碼並通知您可能的問題。 */}

                    <li>next.config.js：這個檔案是用來設定next.js的設定，例如路由、Sass、Scss等等，可以通過此檔案更改預設配置以製作自己需要的應用程式。</li>
                    <li>package-lock.json：這個檔案是用來記錄npm安裝的套件版本</li>
                    <li>package.json：這個檔案是用來記錄專案的資訊，例如專案名稱、版本、作者、套件等等</li>
                    <li>README.md：這個檔案是用來記錄專案的說明</li>
                </ul>


                <h3>從頭安裝</h3>
                <p>首先建立一個資料夾，然後在資料夾內執行npm init -y，去設定基本的package.json</p>
                <CommonPrism>
                    {`npm init -y`}
                </CommonPrism>
                <p>接下來，我們安裝Next.js需要的套件(typescript使用者也請做相同的動作)</p>
                <CommonPrism>
                    {`npm install next react react-dom`}
                </CommonPrism>

                <p>接下來，我們要在package.json內的scripts加入start和build指令</p>
                <CommonPrism>
                    {`"scripts": {
  "dev": "next dev", 
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}`}
                </CommonPrism>

                <p>他們意思是分別是</p>
                <ul>
                    <li>dev: 開發模式，會自動重新編譯</li>
                    <li>build: 編譯</li>
                    <li>start: 啟動編譯後的檔案</li>
                    <li>lint: 檢查程式碼</li>
                </ul>

                <p>現在你的package.json應該是這樣</p>
                <CommonPrism>
                    {`{
  "name": "next.jstest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.2.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}
                </CommonPrism>

                <p>接著，我們要建立一個pages資料夾，裡面放入index.jsx(js)，如果你是typescript的話，要改成index.tsx(ts)</p>

                <p>這時候如果你執行npm run dev，你就可以到localhost:3000看到你的網頁了，但因為我們並沒有在index中寫任何東西，所以會是錯誤的</p>
                <p>打開我們剛剛新增的index.js(jsx、ts或tsx)，加入以下程式碼</p>
                <CommonPrism>
                    {`export default function Home() {
    return <div>Hello World</div>
}`}
                </CommonPrism>

                <p>恭喜你，你應該會在localhost:3000看到Hello World</p>
            </div>
        </Layout>
    )
}