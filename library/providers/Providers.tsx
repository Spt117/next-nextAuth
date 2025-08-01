"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import BackendProvider from "./BackendProvider";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    useEffect(() => {
        const hotjar = async () => {
            // const siteId = 5261072;
            // const hotjarVersion = 6;
            // Hotjar.init(siteId, hotjarVersion);
        };
        hotjar();
    }, []);

    return (
        <>
            <SessionProvider>{children}</SessionProvider>
        </>
    );
}
