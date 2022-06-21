const { createClient } = require("@astrajs/rest");

exports.handler = async function(event,context) {

  const account = event.queryStringParameters.account;
  console.log(account)

  //create client connection
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/accountinfo`

  try{
    const { data, status } = await astraClient.get(basePath, {
      params: {
        where: {
          account: { $eq: 101}
          }
        }
      });  
    console.log(data)
    return {
      statusCode: status,
      body: JSON.stringify(data),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(false),
    }
  }
}