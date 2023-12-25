
# Money-Track Web App




## Authors

- [@Kamilismayilzade](https://www.github.com/Kamilismayilzade)


## Documentation

Money tracking app is built using the MERN stack, which includes a [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&cq_cmp=14412646455&gclid=CjwKCAjw5pShBhB_EiwAvmnNV4k66VB5v5wKgReGu4166hKksJGPKW3poYDBLTlILVgMPCim0HBFiBoCG5MQAvD_BwE) database, an [Express](https://expressjs.com/) server, a [React](https://react.dev/) client-side interface, and [Node.js](https://nodejs.org/en) as the runtime environment.

The app allows you to track your expenses and income, and to view your transaction history in a user-friendly interface.
## Features

- Search for a cryptocurrency and view its details
- View the latest price of a cryptocurrency and its price trend using a chart
- View the top cryptocurrencies sorted by market cap
- View the news related to cryptocurrencies


## File Structure

- ***src/main.js***: The main entry point of the application.
- ***src/App.jsx***: The main component of the application.
- ***backend/models***: Contains all schema for database
- ***backend/index.js***: Server file for Express


## Usage
Once the app is running, you can start tracking your money:

- To add a new transaction fill out the form with the transaction details and click "Add" button to save it to the database.
- You can view your transaction history below the form. This will display a list of all your transactions, with the most recent ones at the top.
- To view your balance, check the "Balance" section in the header. This displays the total of all your income transactions minus the total of all your expense transactions.

## API Endpoints
The money tracking app has the following API endpoints:

- ***GET*** /api/transactions: returns all transactions in the database.
- ***POST*** /api/transactions: adds a new transaction to the database.



## Conclusion

Explore for more about the [MERN Stack](https://www.mongodb.com/mern-stack). With this app, you can easily keep track of your expenses and income, and make informed decisions about your finances. 
## Run Locally

Clone the project

```bash
  git clone https://github.com/Kamilismayilzade/money-tracking-mern-stack
```

Go to the project directory

```bash
  cd money-tracking-mern-stack
```

Install dependencies

```bash
  npm i
  npm i nodemon
  npm i express
  npm i mongoose
  npm i dotenv
  npm i cors
```

Install devDependencies

```bash
  npm create vite@latest
```

Start the server

```bash
  npm run dev
```

- Set up your MongoDB database and make sure it is running.

- In the project root directory, create a .env file and set the following environment variables:

```
MONGODB_URI=<your_mongodb_uri>
PORT=<your_server_port>
```


## Badges

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
## Tech Stack

**Client:** *****React*****

**Server:** *****Express*****


## 🛠 Skills

****React****, ****Express****, ****Node****, ****MongoDB****, ****MERN STACK****


## Feedback


## Screenshots



![screencapture-localhost-5173-2023-03-30-22_08_18](https://user-images.githubusercontent.com/84046930/228959293-973ac81a-8a3d-4f50-83dc-e79a3c561c13.png)
