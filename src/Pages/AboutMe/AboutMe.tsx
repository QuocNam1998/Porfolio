import darkMe from "@/assets/Image/me.png";
import lightMe from "@/assets/Image/lightImage.png";
import darkAvatar from "@/assets/Image/avatar.jpg";
import lightAvatar from "@/assets/Image/lightAvater.png";
import "@/Pages/HomePage/HomePage.scss";
import TypeWriter from "@/components/TypeWriter";
import { useTheme } from "@/store/ReactContext/ReactContext";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const emailSchema = yup.object().shape({
  name: yup.string().required("Let me know your name ^^"),
  email: yup
    .string()
    .required("Give me an signal to back to you ~~")
    .email("Your email is not true ^^"),
  content: yup.string().required("What you want to say with me ^^"),
});
export interface emailForm {
  name: string;
  email: string;
  content: string;
}
export const AboutMe = () => {
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const { theme } = useTheme();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<emailForm>({
    resolver: yupResolver(emailSchema),
  });
  const form = useRef<any>(null);

  const onSubmit = () => {
    if (isSubmit) return;

    setSubmit(true);
    const templateParams = {
      publicKey: "38zoDNIUkuk17T9WD",
    };

    const onSuccess = () => {
      toast(<p style={{ fontSize: 16 }}>Thành công</p>, toastConfig);
      setSubmit(false);
    };

    const onError = () => {
      toast(<p style={{ fontSize: 16 }}>Thất bại</p>, toastConfig);
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

  const toastConfig = {
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
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-12 flex flex-wrap md:flex-nowrap gap-4 py-12 px-6">
          <div className="dark:text-purple-400 text-green-400 my-auto basis-full md:basis-1/2 px-4 min-h-[150px] md:min-h-max">
            <p className="text-xl">Hi there! </p>
            <p className="text-xl">I'm Đặng Quốc Nam</p>
            <TypeWriter
              strings={[
                "A react Developer",
                "Who can code all day without getting tired",
                "Fun fact: I don't know how to write code",
              ]}
            />
          </div>
          <div className="basis-full md:basis-1/2">
            {theme === "light" && <img className="w-[500px]" src={lightMe} />}
            {theme === "dark" && <img className="w-[500px]" src={darkMe} />}
          </div>
        </div>
        {/* Contaction */}
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-16 py-12 px-6">
          <div className="col-span-12 md:col-span-7 ">
            <p className="dark:text-white text-5xl text-left md:text-center mb-8">
              LET ME{" "}
              <span className="dark:text-purple-400  text-green-400">
                INTRODUCE
              </span>{" "}
              MYSELF
            </p>
            <p className="dark:text-white mb-4 text-lg">
              I am fluent in classics more than 2 years of experience in{" "}
              <span className="dark:text-purple-400 text-green-400 pl-[1px] italic ">
                Javascript and Typescript
              </span>
              .
            </p>
            <p className="dark:text-white mb-4 text-lg">
              My field of Interest's are building new{" "}
              <span className="dark:text-purple-400 text-green-400 italic">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Design.
              </span>
            </p>
            <p className="dark:text-white mb-4 text-lg">
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Node.js
              </span>{" "}
              and{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Modern Javascript Library and Frameworks like React.js and
                Next.js
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 dark:text-white flex items-center justify-center">
            {theme === "light" && (
              <img
                src={lightAvatar}
                className=" w-[200px] hover:w-[150px] transition-all duration-200"
              />
            )}
            {theme === "dark" && (
              <img
                src={darkAvatar}
                className="rounded-full w-[200px] hover:w-[250px] transition-all duration-200"
              />
            )}
          </div>
          <div className="col-span-12">
            <p className="uppercase dark:text-white text-center w-full text-5xl mb-4">
              contact
            </p>
            <p className="dark:text-white text-center w-full mb-6 text-lg">
              Get in{" "}
              <span className="dark:text-purple-400 text-green-400">touch</span>{" "}
            </p>
            <p className="dark:text-white text-left  w-full mb-2 text-lg">
              I'd love if you reached out to me. Even if it's just to say "Hey".
              Don't be hesitate ! Drop me a line i'll get back to you.
            </p>

            <p className="dark:text-purple-400 text-green-400  justify-normal flex items-center mb-6 text-lg w-full">
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
            <p className="dark:text-purple-400 text-green-400  justify-normal  flex items-center mb-6 text-lg w-full">
              Write me a MESSAGE !
            </p>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full md:w-2/4  mb-4">
                <Input label="Your Name" name="name" register={register} />
                <span className="text-red-400 text-xs ">
                  {errors.name?.message}
                </span>
              </div>
              <div className="w-full md:w-2/4 mb-4">
                <Input label="Your Email" name="email" register={register} />
                <span className="text-red-400 text-xs ">
                  {errors.email?.message}
                </span>
              </div>
              <div className="w-full md:w-2/4 mb-4">
                <TextArea label="Message" register={register} name="content" />
                <span className="text-red-400 text-xs ">
                  {errors.content?.message}
                </span>
              </div>
              <button
                className={`${
                  isSubmit && "opacity-50 cursor-not-allowed"
                } p-2 uppercase w-full md:w-2/4 dark:bg-purple-400 bg-green-400 text-white rounded flex justify-center items-center`}
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

              <ToastContainer />
            </form>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
