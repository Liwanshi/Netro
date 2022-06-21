const { createClient } = require("@astrajs/rest");

exports.handler = async function(event,context) {


  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/billamount`

  try{
    // const result = await accountCollection.find()
    const { data, status } = await astraClient.get(basePath, {
      params: {
        where: {
          billgroup: { $eq: 101}
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
      body: JSON.stringify(e),
    }
  }

  
}