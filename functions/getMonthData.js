const { createClient } = require("@astrajs/rest");

exports.handler = async function(event,context) {

  const account = event.queryStringParameters.account;
  console.log(account)

// Create client connection
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/monthly`

  try{
    const { data, status } = await astraClient.get(basePath, {
      params: {
        where: {
          accountno: { $eq: 101}
          }
        }
      }); 
    return {
      statusCode: status,
      body: JSON.stringify(data),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}