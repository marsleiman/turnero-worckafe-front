import React from 'react';


const Home = ({ title, subtitle, children, backgroundImage }) => {
  return (
    <section className="bg-[#fefae0] min-h-screen flex items-center justify-center">
      <div className="bg-[#79B473] flex rounded-2xl shadow-lg max-w-3xl p-5">
        {/* login container */}
        <div className="md:w-1/2 px-12">
          <form className="flex flex-col gap-4">
            <h2 className="font-mono text-2xl flex items-center justify-center">{title}</h2>
            <h2 className="font-mono text-2xl flex items-center justify-center">{subtitle}</h2>
            {/* Resto del formulario */}
            {children}
          </form>

        </div>

        {/* image container */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={backgroundImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;