import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

interface ResendAPIResponse{
    success: boolean;
    email?: string;
}

export async function sendEmail(email: string,):Promise<ResendAPIResponse>{
   try {
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to X-Peerience!",
        html: "<strong>Thank you for signing up with us!</strong>",
      });
      if (error) {
        return {success: false};
      }
    
      return {success: true};
   } catch (error) {
        return {success: false};
   }
 }