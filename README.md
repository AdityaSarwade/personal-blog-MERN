# personal-blog-MERN

This repository contains the server and client files to create a personal blog using the MERN stack.

## Installation

- git clone the repository in your local system
- open the personal-blog-MERN folder
- type in the below commands in your terminal
```powershell
npm install
cd client
npm install
cd ..
```
- create a MongoDB cluster and database
![mongo1.png](/assets/mongo1.png)
- ensure the same schema is followed

```
-> database name - blog
-> collection name - articles
```

- now create a new file dotenv in the personal-blog-MERN folder\
![dotenv.png](/assets/dotenv.png)\
![dotenv1.png](/assets/dotenv1.png)
- replace the <password> with your mongoDB password


## Usage

```powershell
#runs both server and client
npm run dev

# runs only server
npm run server

# runs only client
npm run client

```

## Contributing

Any pull requests and improvements are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
