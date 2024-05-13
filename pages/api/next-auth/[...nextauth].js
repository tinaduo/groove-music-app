import NextAuth from 'next-auth';
import providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
});