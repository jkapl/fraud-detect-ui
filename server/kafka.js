const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test' })

const messages = [];

const getMessages = () => messages

const run = async () => {
    await consumer.connect()
    // can optionally start from beginning of the topic
    await consumer.subscribe({ topic: 'test', fromBeginning: true })
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
        messages.push({value: message.value.toString()})
        console.log(`messages array: ${messages}`)
      },
    })
}

run().catch(e => console.error(e.message))

module.exports = {
    messages,
    getMessages
}
    
