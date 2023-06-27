import Head from "next/head";

const getJoke = async () => {
    return await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit`)
        .then(response => response.json())
        .catch(e => {
            console.error(e);
        })
};
export default async function SettingsPage() {
    const joke = await getJoke();
    return (
        <>
            <Head>
                <title>{'Dashboard'}</title>
            </Head>
            <div>
                <p>{joke.setup}</p>
                <p>{joke.delivery}</p>
            </div>
        </>
    )
}