import { UseFormRegister } from "react-hook-form";

interface inputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

export const Input = ({ label, register, name }: inputProps) => {
  return (
    <div className="w-full">
      <p className="dark:text-purple-400 text-green-400 mb-2">{label}</p>
      <input
        autoComplete="off"
        {...register(name)}
        className="w-full outline-none focus:drop-shadow-green-sm dark:focus:drop-shadow-purple-sm rounded dark:border-purple-400 border-green-400 border-[1px] px-[6px] py-[3px]"
      />
    </div>
  );
};
