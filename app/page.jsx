import { Card } from 'components/card';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

export default function Page() {
    // Optional fallback content if someone visits the page directly
    return (
        <div className="flex flex-col gap-12 sm:gap-16 p-6">
            <h1 className="text-2xl font-bold">Redirecting to Staff Login...</h1>
            <p>
                If you are not redirected automatically,{' '}
                <a 
                    href="https://sites.google.com/view/aasedeo-user-login/staff-login/" 
                    className="text-blue-600 underline"
                >
                    click here
                </a>.
            </p>

            <RuntimeContextCard />
        </div>
    );
}

// Server-side redirect
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://sites.google.com/view/aasedeo-user-login/staff-login/',
            permanent: false, // false = 302 redirect
        },
    };
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
