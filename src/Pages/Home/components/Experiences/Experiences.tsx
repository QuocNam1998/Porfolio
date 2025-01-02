export const Experiences = () => {
  return (
    <div className="col-span-12 gap-4 experiences ">
      <div className="col-span-12 md:col-span-7 space-y-4 ">
        <h1 className="text-3xl font-bold">Experiences</h1>
        {/* Pareto */}
        <h2 className="text-xl font-bold text-white">
          {`${"Pareto asia ( 9/2022 - 11/2022 )"}`}
        </h2>
        <ul>
          <li>
            <p>
              &#8226; Build features and enhance user-facing applications using
              ReactJS to deliver responsive, dynamic interfaces.
            </p>
          </li>
          <li>
            <p>
              &#8226; Work closely with designers, backend developers, and other
              team members to create seamless user experiences.
            </p>
          </li>
          <li>
            <p>
              &#8226; Optimize applications to make them 20 percent faster and
              separate components for scalability and maintenance.
            </p>
          </li>
          <li>
            <p>&#8226; Create and execute unit and integration tests.</p>
          </li>
          <li>
            <p>
              &#8226; Identify and resolve bugs and performance issues in
              applications.
            </p>
          </li>
        </ul>
        <h2 className="text-xl font-bold text-white">
          {`${"IPI corp ( 6/2021 - 6/2022 )"}`}
        </h2>
        <ul>
          <li>
            <p>
              &#8226; Building responsive web applications using HTML, CSS, and
              JavaScript.
            </p>
          </li>
          <li>
            <p>&#8226; Handle user inputs, events, and animations.</p>
          </li>
          <li>
            <p>
              &#8226; Connect the front-end with back-end systems via APIs to
              fetch and display data dynamically.
            </p>
          </li>
          <li>
            <p>
              &#8226; Test and ensure the application works consistently across
              different browsers and platforms.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
