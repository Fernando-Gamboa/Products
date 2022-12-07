# Products

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">![-javascript](https://user-images.githubusercontent.com/103979716/199113123-04739e76-7bf1-4ce8-a19b-68228ebabc5f.svg)</a>
<a href="https://expressjs.com/">![-express](https://user-images.githubusercontent.com/103979716/199112780-09753942-cce4-4551-9b0d-91d391a5d0fe.svg)</a>
<a href="https://www.postgresql.org/">![-postgres](https://user-images.githubusercontent.com/103979716/205512689-b6ec7696-0e88-407a-96f7-3b42bdf9d5a7.svg)</a>
<a href="https://aws.amazon.com/">![-aws (1)](https://user-images.githubusercontent.com/103979716/199112786-2dcb17cd-0650-478b-b1f7-aa7394574d8c.svg)</a>
##

In this project I worked on optimizing an API for an e-commerce website that was a bit outdated. The API was split between components in a team of 3, the three components of this API revolved around questions and answers, reviews and ratings, and products. This is the products side of the API, and optimization was the main focus, we wanted to handle a larger amount of traffic. The goal was a less than 1% error rate and a latency that was less than 2000 milli seconds. With indexing and caching I was able to achieve 5000 rps over 1 minute with 0% error rate at 62ms, resulting in response speeds that were over 200% better than the previous API.

### Setting up data environment
1) create database and connect to it on terminal (DB = postgres)
2) run db.js/server files to create tables with queryAsync
3) copy csv files in terminal using psql -d postgres -f data.sql (make sure youre in project directory)
