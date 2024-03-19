# Api Rest Node Typescript

## How create some

step 1.
```bash
npm init -y
# dev
npm install typescript --save-dev nodemon ts-node @types/express @types/node

# prod
npm install express pg typeorm dotenv reflect-metadata --save

```

#### step 2.
create script in package json
```js
  "scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
  },
```
after, create file ts

```bash
npx tsc --init
```

## add autenticao jwt

```
npm i bcrypt --save
npm i @types/bcrypt --save-dev

npm install jsonwebtoken --save
npm install @types/jsonwebtoken --save-dev
```


#### link videos
[API REST com Node.js e TypeScript | TypeORM [Atualizado]](https://www.youtube.com/watch?v=j8cm2C5-xn8)
<br>
[Tratamento de erros no Express.js com TypeScript](https://www.youtube.com/watch?v=SnxAq9ktyuo&t=1841s)
<br>
[Login | Autenticação JWT com Node.js e TypeScript](https://www.youtube.com/watch?v=r4gjCn2r-iw&t=4501s)
