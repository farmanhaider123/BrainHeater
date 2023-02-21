
const { User} = require('../Model/userReport')

exports.CreateUserReport = async (req, res) => {
  const requestBody = req.body
  
   const url = req.protocol + '://' + req.get('host') + '/Videos/' + req.file.filename

    data = { ...requestBody, 'videoPath': url }
    const UserReport = new User({
      ...data

    });
    
   const response = await UserReport.save()
    if (response){
        res.send({ err: 0, msg: "Your Report Submitted Sucessfully" })
              }

}