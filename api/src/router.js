const Router = require('express').Router
const m = require('gm')
const multer = require('multer')
const { response, request } = require('../app')
const storage = multer.diskStorage({
    destination:'api/uploads',
    filename:filename
})

const router = Router()

router.post('/upload',upload.single('photo'),(req,res)=>{
    if(req.hasOwnProperty(fileValidationError)){

        return response.status(400).json({error:req.fileValidationError})
    }else{
        return response.status(201).json({success:true})
    }
})

function filename(request,file,callback){
    callback(null, file.originalName)
}

function fileFilter(request,file,callback){
    if(file.mimetype !== 'image/png'){
        request.fileValidationError("Wrong file type")
        callback(null, false, new Error("Wrong file type"))
    }else{
        callback(null,true)
    }
}

const upload = multer({fileFilter:fileFilter,storage:storage})


module.exports = router