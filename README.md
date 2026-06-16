# 🐇 RabbitMQ Learning Journey

> Learning RabbitMQ through hands-on examples using Node.js and Docker.

![RabbitMQ](https://img.shields.io/badge/RabbitMQ-Learning-orange?style=for-the-badge&logo=rabbitmq)
![Node.js](https://img.shields.io/badge/Node.js-amqplib-green?style=for-the-badge&logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge&logo=docker)

---

## 📖 About

This repository contains my RabbitMQ learning journey. The objective is to understand how asynchronous communication works and how RabbitMQ is used in real-world applications and microservice architectures.

Rather than focusing only on theory, every concept is implemented with practical examples.

---

## 🎯 Learning Goals

- Understand RabbitMQ architecture
- Learn how producers and consumers communicate
- Explore different exchange types
- Implement messaging patterns using Node.js
- Run RabbitMQ using Docker
- Understand message durability and acknowledgements
- Build a foundation for microservices communication

---

## 🛠️ Tech Stack

- Node.js
- RabbitMQ
- Docker
- amqplib

---

## 📂 Project Structure

```text
.
├── producer/
│   ├── single-producer.js
│   └── multi-queue-producer.js
├── consumer/
│   ├── user-consumer.js
│   └── admin-consumer.js
├── package.json
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 📚 Concepts Covered

### ✅ RabbitMQ Fundamentals

- What is RabbitMQ?
- Why Message Queues?
- Exchanges
- Queues
- Bindings
- Routing Keys
- Producers
- Consumers

### ✅ Implementations

- Single Producer → Single Queue → Single Consumer
- Single Producer → Direct Exchange → Multiple Queues
- Multiple Consumers
- JSON Message Publishing
- Queue Bindings
- Durable Queues
- Durable Exchanges
- Manual Acknowledgements

### ✅ Docker

- Running RabbitMQ with Docker
- RabbitMQ Management Dashboard
- Container Management

---

## 🐳 Running RabbitMQ Using Docker

```bash
docker run -d \
  --name rabbitmq \
  -p 5672:5672 \
  -p 15672:15672 \
  rabbitmq:management
```

### RabbitMQ Dashboard

Open:

```
http://localhost:15672
```

Default Credentials:

```
Username: guest
Password: guest
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running Examples

### Start Producer

```bash
node producer/multi-queue-producer.js
```

### Start User Consumer

```bash
node consumer/user-consumer.js
```

### Start Admin Consumer

```bash
node consumer/admin-consumer.js
```

---

## 💡 What I Learned

- How asynchronous communication works
- Difference between exchanges and queues
- Importance of routing keys
- Why acknowledgements matter
- How RabbitMQ enables decoupled architectures
- Docker basics for local development
- Debugging RabbitMQ workflows

---

## 🚀 Future Topics

- Fanout Exchange
- Topic Exchange
- Headers Exchange
- Dead Letter Queues (DLQ)
- Retry Mechanisms
- Publisher Confirms
- Prefetch Count
- Delayed Messages
- Priority Queues
- RPC Pattern
- RabbitMQ in Microservices
- Monitoring & Observability

---

## 📈 Learning Progress

- [x] RabbitMQ Basics
- [x] Producer & Consumer
- [x] Direct Exchange
- [x] Multiple Queues
- [x] Docker Setup
- [x] Message Acknowledgements
- [ ] Fanout Exchange
- [ ] Topic Exchange
- [ ] Dead Letter Queues
- [ ] Publisher Confirms
- [ ] RPC Pattern

---

## 🌱 Philosophy

> "Learn by building. Break things, debug them, understand them, and build again."

This repository represents my practical journey toward mastering RabbitMQ and distributed systems.

---

## ⭐ Support

If you found this repository helpful, consider giving it a ⭐.

Happy Learning! 🐇🚀
