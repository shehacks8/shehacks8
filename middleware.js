export { default } from "next-auth/middleware"

// Prevents /application page from being accessed when not
// signed in
export const config = {matcher: ["/application"]}
