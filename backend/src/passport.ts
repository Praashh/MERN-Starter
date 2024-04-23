import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async function (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) {
            console.log('accessToken:', accessToken);
            console.log('refreshToken:', refreshToken);
            console.log('profile:', profile);
            return done(null, profile);
        }
)
);