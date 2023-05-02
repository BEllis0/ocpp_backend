import { aws } from './src/lib';

export const handler = async (event, context) => {
    const {message} = JSON.parse(event.body)
    // console.log(`Received message:`, JSON.parse(message));

    const client = aws.apiGatewayClient(event.requestContext.domainName + '/' + event.requestContext.stage);

    // console.log('client', client)

    const payload = {
        statusCode: 200,
        body: JSON.stringify({ message: `Received message: ${message}` })
    };

    await client.postToConnection({
        ConnectionId: event.requestContext.connectionId,
        Data: payload
    });

    // return {
    //   statusCode: 200,
    //   headers: {
    //     'Content-Type': 'text/plain',
    //   },
    //   body: JSON.stringify({ message: 'default'}),
    // };
};
