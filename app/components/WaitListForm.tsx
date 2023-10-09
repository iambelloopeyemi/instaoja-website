"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

export default function WaitListForm() {
  const [email, setEmail] = useState<string>("");
  const EMAILJS_SERVICE_ID = "service_l5ogsxk";
  const EMAILJS_TEMPLATE_ID = "template_slld4ur";
  const EMAILJS_PUBLIC_KEY = "I98yeEZ-r8LPso1uF";
  const emailSchema = Yup.object().shape({
    email: Yup.string().email(),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const templateParams = {
        email,
      };
      await emailSchema.validate(templateParams, { abortEarly: false });
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Failed to send email.", error);
      toast.error("Failed to send email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setEmail("");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border-b border-b-olive py-1"
      >
        <div className="w-auto h-auto">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmailChange}
            className="block outline-0 placeholder:text-yellow-green font-light text-clip"
          />
        </div>
        <div>
          <button
            type="submit"
            className="font-semibold py-1 px-3 bg-olive text-white rounded hover:scale-105"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
