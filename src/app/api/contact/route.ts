import { MongoClient } from "mongodb"
import { NextResponse } from "next/server"

interface Data {
    email: string
    name: string
    message: string
}
export async function POST(request: Request) {
    const data: Data = await request.json()
    const {email, name, message} = data
    if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
        return NextResponse.json({message: 'Input is invalid'}, {status: 422})
    }
    const newMessage = {
        email,
        name,
        message
    }
    console.log(newMessage)
    let client

    try {
         client = await MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.lmcdpf1.mongodb.net/?retryWrites=true&w=majority`)
    }catch(error){

    return NextResponse.json({message: 'Could not connect to database'}, {status: 500})

    }
    try {
        const db = client.db(`${process.env.mongodb_database}`)
        db.collection('messages').insertOne(newMessage)

    }catch(error){
    return NextResponse.json({message: 'Could not added data to database'}, {status: 500})
    }
   
    return NextResponse.json({message: 'Message added successfully'})

    
}