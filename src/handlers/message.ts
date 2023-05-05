import { gateway } from '../lib';

const sendResponse = async (client, connectionId, action, payload) => {
  const body = {
    action,
    payload,
  };

  await client.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify(body),
  }).promise();
};

export const handler = async (event, context) => {
  // const client = gateway.apiGatewayClient(`${event.requestContext.domainName}/${event.requestContext.stage}`);
  const { connectionId } = event.requestContext;
  try {
    const { action, payload } = JSON.parse(event.body);
    console.log('action received: ', action);
    // switch (action) {
    //   case 'BootNotification':
    //     // Handle bootnotification message
    //     console.log('Received BootNotification message:', payload);
    //     // Send response back to client
    //     await sendResponse(client, connectionId, 'BootNotificationResponse', {
    //       status: 'Accepted',
    //     });
    //     break;
    //   case 'StatusNotification':
    //     // Handle statusnotification message
    //     console.log('Received statusnotification message:', payload);
    //     // Send response back to client
    //     await sendResponse(client, connectionId, 'StatusNotificationResponse', {
    //       status: 'Accepted',
    //     });
    //     break;
    //   default:
    //     // Handle unknown message
    //     console.log('Received unknown message:', payload);
    //     // Send response back to client
    //     await sendResponse(client, connectionId, 'ErrorResponse', {
    //       error: `Unknown action: ${action}`,
    //     });
    // }
  } catch (error) {
    console.error('Error handling message:', error);
    // sendResponse(client, connectionId, 'ErrorResponse', { error });
  }
  return {
    statusCode: 200,
    body: 'connect',
  };
};
