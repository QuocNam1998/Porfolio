import { UseFormRegister } from "react-hook-form";

interface textAreaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}
export const TextArea = ({ label, register, name }: textAreaProps) => {
  return (
    <div className="w-full flex flex-col">
      <p className="dark:text-purple-400 text-green-400 mb-2">{label}</p>
      <textarea
        aria-label={label}
        {...register(name)}
        autoComplete="off"
        className="outline-none rounded focus:drop-shadow-green-sm dark:focus:drop-shadow-purple-sm dark:border-purple-400 border-green-400 border-[1px] px-[6px] py-[3px] w-full"
      />
    </div>
  );
};
