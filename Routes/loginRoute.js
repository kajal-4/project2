const app=require('express').Router()

const loginmodel= require('../model/login');

// Register Route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    // Basic validation to check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user (password stored directly - not recommended for production)
      const newUser = new User({
        email,
        password
      });
  
      // Save the new user to the database
      await newUser.save();
  
      // Respond with success message
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      // Catch and respond to server errors
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

app.post ('/login',async (request,response)=>{
    const{ username,password}= request.body;
    // console.log(request.body)
    try{
        const user =await loginmodel.findOne({username,password});
        console.log(user)
        if(user){
            response.json({success:true,message:'Login successful'});
                }
                else{
                    response.json({success:false,message:'Invalid password and username'});

                }
            }catch(error){
                    response.status(500).json({success:false,message:'Error during login'});
                
    }
});

module.exports=app