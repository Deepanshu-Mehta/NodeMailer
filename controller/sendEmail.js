require('dotenv').config();
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    try {
        const { userEmail, userName } = req.body;
        if (!userEmail || !userName) {
            return res.status(400).json({
                status: 'error',
                message: 'Email and username are required'
            });
        }

        const config = {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        };
     
        const transporter = nodemailer.createTransport(config);
    
        const message = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: `Welcome to Our Platform! ${userName}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Welcome ${userName}! 🎉</h2>
                    <p>Thank you for joining our platform. We're excited to have you on board!</p>
                    <p>Here are some things you can do to get started:</p>
                    <ul>
                        <li>Complete your profile</li>
                        <li>Explore our features</li>
                        <li>Connect with others</li>
                    </ul>
                    <p>If you have any questions, feel free to reach out to our support team.</p>
                    <p>Best regards,<br>Your Platform Team</p>
                </div>
            `
        };
    
        await transporter.sendMail(message);
        
        res.status(200).json({
            status: 'success',
            message: 'Welcome email sent successfully'
        });

    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to send welcome email',
        });
    }
};

module.exports = sendEmail;