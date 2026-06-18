import amqp from 'amqplib';

const pushNotification = async () => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'new_product_lauch_exchange';
        const exchangeType = 'fanout';

        await channel.assertExchange(exchange, exchangeType, { durable: true });

        const queue = await channel.assertQueue('', { exclusive: true });
        console.log(`Waiting for messages in queue: ${queue.queue}`);

        await channel.bindQueue(queue.queue, exchange, '');

        channel.consume(queue.queue, (msg) => {
            if (msg != null) {
                const product = JSON.parse(msg.content.toString())
                console.log("sending push notification for:", product.productName);
                channel.ack(msg);
            }
        });

    } catch (error) {
        console.log("Error in consuming admin mail:", error)
    }
}

pushNotification();