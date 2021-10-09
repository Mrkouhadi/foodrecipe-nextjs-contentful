import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react';

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000);
    },[]);

    return (
        <div className="not-found">
            <h4>404</h4>
            <h2>Ooops ! That page cannot be found</h2>
            <p>Redirecting to <Link href="/">Homepage</Link></p>
        <style jsx>{`
            .not-found{
                background-color:#f9f9f9;
                padding:30px;
                box-shadow:1px 3px 5px rgba(0,0,0, .1);
            };
            h1{
                font-size:3em;
            }
        `}</style>
        </div>
    )
}
export default Notfound
