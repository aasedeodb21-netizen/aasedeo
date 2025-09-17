export default function Page() {
    // Optional fallback content if someone visits the page directly
    return (
        <div className="flex flex-col gap-6 p-6">
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
        </div>
    );
}

// Server-side redirect
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://sites.google.com/view/aasedeo-user-login/staff-login/',
            permanent: false, // temporary redirect
        },
    };
}
