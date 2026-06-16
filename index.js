//Single producer single exchange single queue and single consumer example for RabbitMQ using amqplib in Node.js

import amqp from 'amqplib';

// async function sendMail() {
//     try {
//         const connection = await amqp.connect('amqp://localhost');
//         const channel = await connection.createChannel();
//         const exchange = 'mail_exchage';
//         const routingkey = "mail_key";

//         const message = {
//             "to": "recipient@example.com",
//             "cc": "",
//             "bcc": "",
//             "subject": "Regarding [Purpose of Email]",
//             "body": {
//                 "greeting": "Dear [Name],",
//                 "introduction": "I hope you are doing well.",
//                 "mainContent": "I am writing to [state the purpose of the email briefly]. [Provide necessary details here.]",
//             }
//         }
//         await channel.assertExchange(exchange, 'direct', { durable: true });
//         await channel.assertQueue('mail_queue', { durable: true });
//         await channel.bindQueue('mail_queue', exchange, routingkey);
//         channel.publish(exchange, routingkey, Buffer.from(JSON.stringify(message)));
//         console.log("Mail message sent to RabbitMQ", message);

//         setTimeout(()=>{
//             connection.close();
//         }, 500);
//     } catch (error) {
//         console.log("Error in sending mail:", error)
//     }
// }


//Single producer single exchange double queue and double consumer example for RabbitMQ using amqplib in Node.js

async function sendMail() {
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'mail_exchage'
        //Queues Name
        const mailtoUser = 'mail_to_user_queue'
        const mailToAdmins = 'mail_to_admins_queue';
        //Routing Keys
        const routingkeyUser = "mail_to_user_key";
        const routingkeyAdmin = "mail_to_admins_key";

        const message = {
            "to": "recipient@example.com",
            "cc": "",
            "bcc": "",
            "subject": "Regarding"
        }

        await channel.assertExchange(exchange, 'direct', { durable: true });

        await channel.assertQueue(mailtoUser, {durable: true})
        await channel.assertQueue(mailToAdmins, {durable: true})

        await channel.bindQueue(mailtoUser, exchange, routingkeyUser);
        await channel.bindQueue(mailToAdmins, exchange, routingkeyAdmin);

        // channel.publish(exchange, routingkeyUser, Buffer.from(JSON.stringify(message)));
        channel.publish(exchange, routingkeyAdmin, Buffer.from(JSON.stringify(message)));
        console.log('mail sent succesfully')

        setTimeout(()=>{
            connection.close();
        }, 500);
    }catch(error){
        console.log("Error in sending mail:", error)
    }
}

sendMail();