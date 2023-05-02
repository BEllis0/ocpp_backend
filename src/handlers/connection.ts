export const handler = async (event, context) => {
  const { connectionId } = event.requestContext;

  if (event.requestContext.eventType === 'CONNECT') {
    console.log(`WebSocket connected with connection ID ${connectionId}`);
    // Handle $connect event
  } else if (event.requestContext.eventType === 'DISCONNECT') {
    console.log(`WebSocket disconnected with connection ID ${connectionId}`);
    // Handle $disconnect event
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Connection established.' }),
  };
};
