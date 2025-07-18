const validateExtension = (ext) => {
    if(ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp" || ext === ".pdf")
    {
        return true
    }else{
        return false
    }
}

module.exports = {validateExtension};