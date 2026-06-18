import amqp from 'amqplib';

const receiveMessage =  async ()=>{
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const exchange = 'notification_exchange';
        const queue = "payment_queue";

        await channel.assertExchange(exchange, 'topic', { durable: true });
        await channel.assertQueue(queue, { durable: true });
        await channel.bindQueue(queue, exchange, "payment.*");

        console.log("Waiting for messages");
        channel.consume(queue, (msg)=>{
            if(msg){
                console.log("[x] Received '%s': '%s'", msg.content.toString());
                channel.ack(msg);
            }
        }, { noAck: false });
    }catch(error){
        console.log("Error in receiving message:", error);
    }
}

receiveMessage();