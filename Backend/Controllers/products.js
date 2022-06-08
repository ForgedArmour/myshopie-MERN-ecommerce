const Products = require("../Models/products")

exports.AddProduct = (req,res)=>{
    try{
        const product = new Products({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.body.image,
            rating:req.body.rating
        })
        product.save();

        return res.json({status:"ok",product:product});
    }
    catch(err){
        return res.json({status:"error",msg:err.message})
    }
}

exports.GetProducts = async(req,res)=>{
    try{
        const products = await Products.find({})
        return res.json({status:"ok",products:products});
    }catch(err){
        return res.json({status:"error",msg:err.message})
    }
}