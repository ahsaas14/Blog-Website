import mongoose from 'mongoose';


const Connection = async () => {
    try {
        const URL = 'mongodb://user:Ahsaaskalra@blogweb-shard-00-00.1vxjc.mongodb.net:27017,blogweb-shard-00-01.1vxjc.mongodb.net:27017,blogweb-shard-00-02.1vxjc.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-at5vce-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('Database connection success')
    } catch (error) {

        console.log('Error while connecting to mongodb', error);
    }
}


export default Connection;