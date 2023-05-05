const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.CONNECTION_TABLE;

const addConnection = async (connectionId:string, metadata?:any) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      connectionId,
      metadata,
    },
  };
  try {
    await dynamoDb.put(params).promise();
  } catch (e) {
    console.error('Error in addConnection:: ', e);
    throw e;
  }
};

const deleteConnection = async (connectionId) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      connectionId,
    },
  };
  try {
    await dynamoDb.delete(params).promise();
  } catch (e) {
    console.error('Error in deleteConnection:: ', e);
    throw e;
  }
};

const getConnections = async () => {
  const params = {
    TableName: TABLE_NAME,
    ProjectionExpression: 'connectionId',
  };
  try {
    const result = await dynamoDb.scan(params).promise();
    return result.Items.map((item) => item.connectionId);
  } catch (e) {
    console.error('Error in deleteConnection:: ', e);
    throw e;
  }
};

export {
  addConnection,
  getConnections,
  deleteConnection,
};
