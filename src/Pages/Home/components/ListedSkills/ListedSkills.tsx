import Slider from "./components/Slider";

export const ListedSkills = () => {
  return (
    <div className="col-span-12 gap-4 listed-skills ">
      <div className="col-span-12 md:col-span-7 space-y-4 ">
        <h1 className="text-3xl font-bold">Listed skills</h1>
        <Slider />
      </div>
    </div>
  );
};
