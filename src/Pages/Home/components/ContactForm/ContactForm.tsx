import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastOptions, toast } from "react-toastify";
import { emailForm } from "../../Home";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef<any>(null);
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const emailSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required("Let me know your name ^^"),
        email: yup
          .string()
          .required("Give me an signal to back to you ~~")
          .email("Your email is not true ^^"),
        content: yup.string().required("What you want to say with me ^^"),
      }),
    []
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<emailForm>({
    resolver: yupResolver(emailSchema),
  });

  const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
  };
  const onSubmit = () => {
    if (isSubmit) return;

    setSubmit(true);
    const templateParams = {
      publicKey: "x1LAOZl_yRMOgkppX",
    };

    const onSuccess = () => {
      toast(<p style={{ fontSize: 16 }}>Thành công</p>, toastConfig);
      setSubmit(false);
    };

    const onError = () => {
      toast(<p style={{ fontSize: 16 }}>Thất bại</p>, {
        ...toastConfig,
        type: "error",
      });
      setSubmit(false);
    };

    emailjs
      .sendForm(
        "service_t0pyu7r",
        "template_i1ryl6i",
        form.current,
        templateParams
      )
      .then(onSuccess)
      .catch(onError);
  };

  return (
    <div className="col-span-12 grid grid-cols-12 gap-y-8 md:p-2 lg:p-0 contact-form">
      <div className="col-span-12">
        <h1 className="dark:text-white  w-full mb-4">Contact</h1>
        <p className="dark:text-white text-xl w-full mb-6 font-semibold">
          Get in touch
        </p>
        <p className="dark:text-white text-left  w-full mb-2 text-lg">
          I'd love if you reached out to me. Even if it's just to say "Hey".
          Don't be hesitate ! Drop me a line i'll get back to you.
        </p>

        <p className="  justify-normal flex items-center mb-6 text-lg w-full">
          <svg
            className="w-5 h-5 dark:text-purple-600 mr-2"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
          >
            <path
              strokeLinejoin="round"
              strokeWidth="0"
              d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
            />
          </svg>{" "}
          nam.quoc.dang.98@gmail.com
        </p>
        <p className="  justify-normal  flex items-center mb-6 text-lg w-full">
          Write me a MESSAGE !
        </p>
        <form
          className="space-y-2"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full md:w-2/4  ">
            <Input label="Your Name" name="name" register={register} />
            <span
              className={`text-red-400 text-xs transition-opacity duration-300 ${
                errors.name?.message ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "1em", display: "inline-block" }}
            >
              {errors.name?.message || ""}
            </span>
          </div>
          <div className="w-full md:w-2/4 ">
            <Input label="Your Email" name="email" register={register} />
            <span
              className={`text-red-400 text-xs transition-opacity duration-300 ${
                errors.email?.message ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "1em", display: "inline-block" }}
            >
              {errors.email?.message || ""}
            </span>
          </div>
          <div className="w-full md:w-2/4 ">
            <TextArea label="Message" register={register} name="content" />
            {/* <Input label="Your Email" name="email" register={register} /> */}

            <span
              className={`text-red-400 text-xs transition-opacity duration-300 ${
                errors.content?.message ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "1em", display: "inline-block" }}
            >
              {errors.content?.message || ""}
            </span>
          </div>
          <button
            className={`${
              isSubmit && "opacity-50 cursor-not-allowed"
            } p-2 uppercase w-full md:w-1/3 dark:bg-purple-400 bg-green-400 text-white rounded flex justify-center items-center`}
          >
            Send
            {isSubmit && (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-green-400 animate-spin dark:text-purple-400 ml-4 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
