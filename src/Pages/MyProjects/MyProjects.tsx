import React from "react";
import paretoEcom from "@/assets/Image/ecompareto.png";
import cmsPareto from "@/assets/Image/cmsPareto.png";
import Project from "./Project";
export const MyProjects = () => {
  return (
    <div className="container px-4 py-8">
      <div className="gap-x-4 gap-y-16  grid grid-cols-1">
        <h5 className="dark:text-purple-400 text-green-400 text-center text-4xl font-bold">
          My Projects
        </h5>
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <h5 className="dark:text-purple-400 text-green-400 text-center text-3xl font-bold b block md:hidden w-full">
            Pareto ecom
          </h5>
          <div className=" basis-full md:basis-1/2 lg:basis-2/3">
            <h5 className="dark:text-purple-400 text-green-400 text-center text-3xl font-bold hidden md:block">
              Pareto ecom
            </h5>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-8">
              A B2C and B2B e-commerce website,{" "}
              <i>
                utilizing React, Redux, Mui, TailWindcss, and TypeScript
                frontend technologies.
              </i>
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-4">
              You can experience it through an existing account or sign up for a
              new one.
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-4">
              Username: 0121220021
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-2">
              Password: 123456
            </p>
          </div>
          <Project link="http://ecom2.pareto.asia/" src={paretoEcom} />
        </div>
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <h5 className="dark:text-purple-400 text-green-400 text-center text-3xl font-bold block md:hidden w-full">
            Pareto cms
          </h5>
          <div className="basis-full md:basis-1/2 lg:basis-2/3">
            <h5 className="dark:text-purple-400 text-green-400 text-center text-3xl font-bold hidden md:block">
              Pareto cms
            </h5>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-8">
              One tool used for management, coordination, and production,{" "}
              <i>
                utilizing React, Redux, Antd, Bootstrap frontend technologies.
              </i>
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-4">
              You can experience it through an existing account below.
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-4">
              Username: admin001
            </p>
            <p className="dark:text-purple-400 text-green-400 text-lg mt-2">
              Password: 123456
            </p>
          </div>
          <Project link="http://admin1.pareto.asia" src={cmsPareto} />
        </div>
      </div>
    </div>
  );
};
