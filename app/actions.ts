"use server"
import nodemailer from "nodemailer"

interface FeedbackData {
  email: string
  phone: string
  feedback: string
}

export async function sendFeedback(data: FeedbackData) {
  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or app password
      },
    })

    // Email options
    const mailOptions = {
      from: data.email,
      to: "ruthjayakumaria.p.s@gmail.com",
      subject: "Feedback Received",
      text: `Phone: ${data.phone}\nFeedback: ${data.feedback}`,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)

    // Return success
    return { success: true }
  } catch (error) {
    console.error("Error sending feedback:", error)
    throw new Error("Failed to send feedback")
  }
}
