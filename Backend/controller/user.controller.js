import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({
            message: 'User created successfully', user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Error signing up', error });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }); // check if user exists in db        

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!user || !passwordMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({
            message: 'Login successful', user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}