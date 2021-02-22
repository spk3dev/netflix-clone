import Head from 'next/head'

export default function Layout({ children }) {
    return (

        <div>
            <Head>
                    <title>Netflix Clone</title>
            </Head>
                <h4>Netflix Clone</h4>
                <div>
                    {children}
                </div>
                <h4>footer</h4>
        </div>
       
    )
}