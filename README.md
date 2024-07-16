To run from dev side,
#cd ofac-backend
#npm run dev

Open another terminal,
#cd ofac-screening
#npm start

I'm using OFAC API (provided in assignment doc) as backend API. However, this API is limited in built in query and advanced query request need to be contact OFAC team as OFAC documentation pointed out. 

In OFAC API examples (https://docs.ofac-api.com/screening-api/examples), "name" field is nessesary for each search, so my logic is passing batch search for (name)(name, year)(name,country)