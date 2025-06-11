import app from "./app";
const port = 3000


let server: any;

const bootstrap = async() => {
    server = app.listen(port, () => {
        console.log(`✅ Server is runing on port ${port}`)
      })
}

bootstrap()
