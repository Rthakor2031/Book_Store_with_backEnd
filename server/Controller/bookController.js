const Bookmodel = require("../Model/bookModel");

const bookcreateController= async (req, res) => {
    const recivedata = req.body
  
    try {
        
        const CreateBook = new Bookmodel(recivedata);
        
        await CreateBook.save();
        res.status(200).json({ Message: "Book Created Successfully" });
    } catch (error) {
        res.status(400).json({ Message: error.message });
    }
}

const bookGetController=async (req, res) => {
    try {
        const Allbooks = await Bookmodel.find();
        res.status(200).json( Allbooks );
    } catch (error) {
        res.status(404).json({ Message: error.message });
    }
}

const updateController=async(req , res)=>{
    const { isbn } = req.params;
  try {
    const updatedBook = await Bookmodel.findOneAndUpdate({ isbn },req.body , { new: true });
    if (!updatedBook) {
        return res.status(404).json({ Message: "Book not found" });
    }
    res.status(200).json({ Message: "Book updated successfully", updatedBook });
  } catch (error) {
    res.status(404).json({message:error.message})
  }
}   
   
  

const DeleteBookController=async(req , res)=>{
    const {isbn} = req.params;
    try {
        const deletedBook = await Bookmodel.findOneAndDelete({ isbn });
        if(!deletedBook){
            return res.status(400).json({message:"Not deleted book"})
        }else{
            res.status(200).json({message:"Delete Book Succesfully..."})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={bookcreateController ,bookGetController ,updateController ,DeleteBookController}