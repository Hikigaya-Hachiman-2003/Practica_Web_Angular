import mongoose from 'mongoose';

let isConected = false;

const conectarAMongoDB= async () =>{
    if(!isConected){
        console.log('Conectado a MongoDB'.green);
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URI);
        isConected = true;
        console.log('Conectado a MongoDB'.green);
    } catch(error){
        console.log('Error al conectar a MongoDB'.red);
        
    }

}

const db = mongoose.connection;

db.on('error', (error)=>{
    isConected = false;
    console.log('Error al conectar a MongoDB'.red);
   
});

db.once('open', ()=>{
    isConected = true;
    
});

db.on('disconnected', ()=>{
    isConected = false;
    console.log('Desconectado de MongoDB'.yellow);

});

process.on('SIGINT',async ()=>{
    await mongoose.connection.close();
    console.log('Desconectado de MongoDB'.yellow);
    process.exit(0);
});

export {conectarAMongoDB, isConected};