import amqp from 'amqplib';

async function consumeAdminMail() {
    try{
        const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'mail_to_admins_queue';

    await channel.assertQueue(queue, { durable: true });

    console.log("Waiting for admin mails...");

    channel.consume(queue, (msg) => {
        if (msg) {
            console.log(
                "ADMIN:",
                JSON.parse(msg.content.toString())
            );

            channel.ack(msg);
        }
    });

    setTimeout(()=>{
        connection.close();
    },500)
    }catch(error){
        console.log("Error in consuming admin mail:", error)
    }
}

consumeAdminMail();