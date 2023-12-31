import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:["true","Please provide a collection name"],
            trim:true,
            maxLength:[
                120,
                "Collection should not be more than 120 chars"
            ]
        }
        
    },
    {timestamps:true}
)

export default mongoose.model("collection", collectionSchema)

//collections it is how converted into database