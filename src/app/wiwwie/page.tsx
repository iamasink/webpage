import Image from "next/image";

import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Iamasink</title>
                <meta
                    name="description"
                    content="iamasink's homepage"
                    key="desc"
                />
                <meta property="og:title" content="Iamasink" />
                <meta property="og:description" content="iamasink" />
            </Head>
            <main className="items-left flex min-h-screen flex-col justify-between p-24">
                <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
                    <Header></Header>
                    <div className="text-3xl bg-clip-text animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-purple-500 to-pink-700 bg-[length:400px_200px]">
                        <h2
                            className={`text-transparent`}
                            style={{}}
                        >
                            Wiwwie
                        </h2>
                    </div>
                    <p><Link className="underline text-purple-300" href="https://github.com/iamasink/lilysbot">Wiwwie</Link></p>                </div>
            </main>
        </div>
    );
}
