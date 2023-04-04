import Head from 'next/head';
import Link from 'next/link';
import Layout from "@/components/Layout"

export default function NotFoundPage() {
    return (
        <Layout className="mt-12 h-full">
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="text-center mt-8">
                <h2 className="text-2xl font-light">
                    <span className="font-medium py-2 pr-4 border-r-2 border-black">
                        404
                    </span>
                    <span className="pl-4">Page Not Found</span>
                </h2>
                <Link href="/" className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white py-1 px-4 mt-10 rounded-3xl">
                        Go back Home
                </Link>
            </div>
        </Layout>
    )
}
