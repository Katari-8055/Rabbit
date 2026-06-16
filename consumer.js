import amqp from 'amqplib'

async function consumeMail() {
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('mail_queue', { durable: true });
        console.log("Waiting for messages in mail_queue...");
        channel.consume('mail_queue', (msg) => {
            if (msg !== null) {
                const messageContent = msg.content.toString();
                channel.ack(msg);
                console.log("Received mail message from RabbitMQ:", JSON.parse(messageContent));
            }
        })

        setTimeout(()=>{
            connection.close();
        }, 5000)
    }catch(error){
        console.error("Error occurred while consuming mail:", error);
    }
}

consumeMail()