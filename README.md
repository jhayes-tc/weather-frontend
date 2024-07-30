# Get the weather

> This branch was used to confirm that this project is possible using Axios

This project requires Node (>20.10.0) and NPM to setup and run.

## Instructions

1. Clone the repo locally using Git
2. Install necessary dependencies

```bash
npm i
```

3. Copy or rename `.env.example` to `.env` and get the API Key from the instructor working with you
4. Starting in `src/pages/index.tsx` and `src/components/weather.tsx` fetch data from the [OpenWeather API](https://openweathermap.org/api) and display the current temperature for the searched latitude and longitude
5. Time permitting, use the installed `weather-icons-react` to display the current weather pictographically

## Notes

- If you don't know what Latitude/Longitude combination to use, the T-CETRA Office is (40.115280, -83.151760)
- [Open Weather API Docs](https://openweathermap.org/api/one-call-3)
- [React Weather Icons docs](https://najens.github.io/weather-icons-react/)
- This project uses [TailwindCSS](https://tailwindcss.com/docs/installation) and [DaisyUI](https://daisyui.com/docs) for easy styling, you can refer to their docs for more styling
- This project uses [NextJS](https://nextjs.org/docs) as the meta-framework and has SSR by default, the `weather.tsx` file is setup to be included in the client bundle.
- It is up to the user on how they want to fetch the data, but some options would be the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [Axios](https://axios-http.com/docs/intro), [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview), or [RTKQuery](https://redux-toolkit.js.org/rtk-query/overview)
- The Open Weather API response can be large, so I have created a TypeScript type for you to see the response

---

## Next.JS Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
