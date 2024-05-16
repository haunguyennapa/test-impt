This project's techstack is [next:13.4.12](https://nextjs.org/), [eact:18.2.0](https://react.dev) with [typescript:4.9.5](https://www.typescriptlang.org/).

- API Service: [axios:1.2.0](https://axios-http.com/) and [@tanstack/react-query:5.36.0](https://tanstack.com/query/v5/docs/framework/react/overview)
- UI Library: [antd:5.17.2](https://ant.design/), [tailwindcss:3.4.3](https://tailwindcss.com/)

## Getting Started

Firstly, rename `.env.example` into `.env` then update enviroment variables file: `.env`

```bash
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_API_KEY=
```

Secondly, open your terminal and run 
```bash
npm i -g yarn

yarn

yarn dev
```

Thirdly, open your browser at `http://localhost:3000` to test the response of the api.

## Feature

Main screen: using api `{API_URL}/advertisers` to get all advertisers with request params

```bash
{
    page?: number,
    pageSize?: number,
    ProgramStatus: "Approved" | "Deactivated",
    name: string \* advertiser name *\
}
```

## Example screenshot

![alt screenshot](./screenshot.png)
