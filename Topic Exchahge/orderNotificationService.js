import amqp from 'amqplib';

const receiveMessage = async ()=>{
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const exchange = 'notification_exchange';
        const queue = 'order_queue';

        await channel.assertExchange(exchange, 'topic', { durable: true });
        await channel.assertQueue(queue, { durable: true });
        await channel.bindQueue(queue, exchange, "order.*");
        console.log("Waiting for messages");
        channel.consume(queue, (msg) => {
            if (msg) {
                console.log("[x] Received '%s': '%s'", msg.content.toString());
                channel.ack(msg);
            }
        }, { noAck: false });

        // setTimeout(()=>{
        //     connection.close();
        // }, 500);
    }catch(error){
        console.log("Error in receiving message:", error)
    }
}

receiveMessage();