## Setup

```bash
npm install next@latest react@latest react-dom@latest 

npm install @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion

npm install next-auth bcrypt json mongoose
npm install bcryptjs --save 

npm i node@lts
```

Create a .env file with the following information and replace <username> and <password> with your MongoDB Atlas credentials 
```bash
MONGODB_URI=mongodb+srv://<username>:<password>@shehacks8.2yspub2.mongodb.net/Application?retryWrites=true&w=majority&appName=AtlasApp/shehacks8_db
NEXTAUTH_SECRET=temp
NEXTAUTH_URL=http://localhost:3000
```

## Getting Started


Run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



