import { ProductModel } from "@/lib/model/product";
import mongoose from "mongoose";
import {writeFile} from "fs/promises"

if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.url)
      .then(() => {
        console.log('Database connected!');
        isConnected = true;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


//get a single product
export async function GET(request, content){
    let productId = content.params.product[0];
    try{
        const product = await ProductModel.findById(productId)
        return new Response(JSON.stringify(product))
    }catch(err){
    return new Response(JSON.stringify({message:err.message}))
    }
}

//upload a product
export async function PUT(request, content){
    let productId = content.params.product[0];
    const payload = await request.json();
    try{
        const product = await ProductModel.findByIdAndUpdate(productId, {
            $set : payload
        },{
            new : true
        })
        return new Response(JSON.stringify(product))
    }catch(err){
        return new Response(JSON.stringify(err.message))
    }
}

//upload the image
export async function POST(req){
    let data = await req.formData()
    const file = data.get('file')
    if(!file){
        return new Response(JSON.stringify({message:"no file found"}))
    }
    try{
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData)
        const path = `./public/${file.name}`
        await writeFile(path, buffer);
        return new Response(JSON.stringify({message:"image uploaded successfully !"}))
    }catch(err){
        return new Response(JSON.stringify({message:err.message}))
    }
}