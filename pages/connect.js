import Head from 'next/head';
import Link from 'next/link';
import Layout from "@/components/Layout"

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Connect | Raj Thombare</title>
            </Head>
            <Layout className="mt-12 h-[90vh] flex flex-col justify-center">
                <div className="text-center mt-8">
                    <h2 className="text-2xl font-light">
                        <span className="font-medium py-2 pr-4 border-r-2 border-black">
                            Email
                        </span>
                        <span className="pl-4">Rajthombare3524@gmail.com</span>
                    </h2>
                    <Link href="/" className="px-1 py-2.5 block m-auto mt-14 text-white bg-black w-[120px] rounded-lg hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200">
                        Say Hi!
                    </Link>
                </div>
            </Layout>
        </>
    )
}
