const {Category} =require('../Model/category')
exports.CreateReportCategory = async (req, res)=>{
    try {
        const IsExist = await Category.findOne({ name: req.body.name })
        if (IsExist) {
            return res.send({err:1,msg:`${req.body.name}Category is already Exist`})
        }
        else {
            const ReportCategory = new Category({
                ...req.body
            })

            await ReportCategory.save()
            return res.send({err:0,msg:`${req.body.name}Category is Sucessfully added`})
        }
    }
    catch {
        res.send("Someting Went wrong");
    }
}

exports.GetReportCategory = async (req, res) => {
    const list = await Category.find({ type: "Report Category" })
    if (list)
    {
        res.send(list)
    }
    
}
