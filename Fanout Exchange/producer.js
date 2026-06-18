//Single producer single exchange single queue and single consumer example for RabbitMQ using amqplib in Node.js

import amqp from 'amqplib';

const announceNewProduct = async(product)=> {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'new_product_lauch_exchange';
        const exchangeType = 'fanout';

        await channel.assertExchange(exchange, exchangeType, { durable: true });

        const message = JSON.stringify(product)

        channel.publish(exchange, '', Buffer.from(message), { persistent: true });

        console.log("Sent =>", message);


        setTimeout(()=>{
            connection.close();
        }, 500);
    } catch (error) {
        console.log("Error in sending mail:", error)
    }
}
announceNewProduct({
    "productId": 1,
    "productName": "Product 1",});