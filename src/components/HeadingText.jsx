import React from "react";

function HeadingText() {
  return (
    <div className="w-[50%] 2xl:w-[60%] xl:w-[50%] hidden md:flex items">
      <div className="xl:col-span-3 lg:col-span-2 lg:mx-10 my-auto">
        <div>
          <h3 className="text-xl/tight mb-3 font-semibold text-heading">
            <span className="text-background">BIMBINGAN BELAJAR</span> MALES
          </h3>
        </div>
        <div className="mt-8">
          <h1 className="text-5xl/tight mb-3 font-semibold text-heading">
            <span className="text-background">Kami Menawarkan</span> Layanan Bimbingan Belajar Private
          </h1>
        </div>
        <div className="mt-8">
          <p className="text-sm/tight mb-3 font-normal text-background">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in ante augue. Cras in risus vitae magna ullamcorper mollis at sit amet lorem.</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
          <button className="bg-secondary text-heading text-sm font-semibold rounded-[30px] p-4">LAYANAN KAMI</button>
        </div>
      </div>
    </div>
  );
}

export default HeadingText;
