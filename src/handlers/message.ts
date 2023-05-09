import { gateway } from '../lib';

export const handler = async (event:any) => {
  const client = gateway.apiGatewayClient(`${event.requestContext.domainName}/${event.requestContext.stage}`);
  const { connectionId } = event.requestContext;
  try {
    const { action, payload } = JSON.parse(event.body);
    console.log('action received: ', action);
    console.log('payload received: ', payload);
    switch (action) {
      case 'BootNotification':
        await gateway.sendResponse(client, connectionId, 'BootNotificationResponse', {
          status: 'Accepted',
        });
        break;
      case 'StatusNotification':
        await gateway.sendResponse(client, connectionId, 'StatusNotificationResponse', {
          status: 'Acce```pted',
        });
        break;
      default:
        await gateway.sendResponse(client, connectionId, 'ErrorResponse', {
          error: `Unknown action: ${action}`,
        });
    }
    return { statusCode: 200, body: 'Data sent.' };
  } catch (error) {
    console.error('Error handling message:', error);
    gateway.sendResponse(client, connectionId, 'ErrorResponse', { error });
    return { statusCode: 500, body: { error: 'Error handling action.' } };
  }
};
