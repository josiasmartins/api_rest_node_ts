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


#### link videos
[API REST com Node.js e TypeScript | TypeORM [Atualizado]](https://www.youtube.com/watch?v=j8cm2C5-xn8)
