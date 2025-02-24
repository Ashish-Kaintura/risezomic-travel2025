import emailjs from "@emailjs/browser";

export const sendEmail = async (form) => {
  try {
    const response = await emailjs.sendForm(
      "YOUR_SERVICE_ID",  // Replace with actual EmailJS Service ID
      "YOUR_TEMPLATE_ID", // Replace with actual EmailJS Template ID
      form,
      "YOUR_PUBLIC_KEY"   // Replace with actual EmailJS Public Key
    );

    console.log("Email sent successfully!", response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
};
