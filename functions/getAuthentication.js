const { createClient } = require("@astrajs/rest");

exports.handler = async function(event,context) {
  const username = event.queryStringParameters.username;

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });


  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/login`

  try{
    // const result = await accountCollection.find()
    const {data,status} = await astraClient.get(`${basePath}/${username}`);
    console.log(data)
    return {
      statusCode: status,
      body: JSON.stringify(data[0].account),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(false),
    }
  }
}
