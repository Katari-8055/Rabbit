import amqp from 'amqplib';

async function consumeUserMail() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'mail_to_user_queue';

    await channel.assertQueue(queue, { durable: true });

    console.log("Waiting for user mails...");

    channel.consume(queue, (msg) => {
        if (msg) {
            console.log(
                "USER:",
                JSON.parse(msg.content.toString())
            );

            channel.ack(msg);
        }
    });

    setTimeout(()=>{
        connection.close();
    },5000)
}

consumeUserMail();