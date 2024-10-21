import Navigation from "./Navigation";

export default function RootLayout({children}) {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
        </>
    );
}