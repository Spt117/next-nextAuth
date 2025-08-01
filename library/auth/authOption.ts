import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { authSecret, email, googleId, googleSecret } from "../utils/uri";
import { getClientNextAuth } from "./authUser";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: googleId as string,
            clientSecret: googleSecret as string,
        }),
        EmailProvider({
            server: {
                host: email.host,
                port: email.port,
                auth: {
                    user: email.server,
                    pass: email.password,
                },
            },
            from: email.server,
        }),
    ],
    adapter: MongoDBAdapter(getClientNextAuth(), {
        databaseName: "NextAuth",
    }),
    secret: authSecret,
};
