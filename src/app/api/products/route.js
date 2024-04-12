import { ProductModel } from "@/lib/model/product";
import mongoose from "mongoose"

// let isConnected = false;

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


export async function GET() {
  let products = [];
  try{
    products = await ProductModel.find()
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }catch(err){
    return new Response(JSON.stringify({message:err.message}))
  }
}


//post a new product
export async function POST(req){
  const payload = await req.json();
  let newProduct = new ProductModel(payload)
  try{
    const saveProduct = await newProduct.save();
    return new Response(JSON.stringify(saveProduct))
  }catch(err){
    return new Response(JSON.stringify({message:err.message}))
  }
}

