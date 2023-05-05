const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const addConnection = async (tableName, payload) => {
  const params = {
    TableName: tableName,
    Item: {
      ...payload,
    },
  };
  try {
    await dynamoDb.put(params).promise();
    return params.Item;
  } catch (e) {
    console.error('Error in addConnection:: ', e);
    throw e;
  }
};

const deleteConnection = async (tableName, connectionId) => {
  const params = {
    TableName: tableName,
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

const getConnections = async (tableName) => {
  const params = {
    TableName: tableName,
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
