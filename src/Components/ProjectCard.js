import React from "react";
import './ProjectCard.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    id: 0,
    title: "Weather Application",
    imageUrl: "weather.png",
    link: "https://sauravweatherapp.netlify.app/",
    completed: true
  },
  {
    id: 1,
    title: "Meme Generator Application",
    imageUrl: "meme.png",
    link: "https://sauravmemegenerator.netlify.app/",
    completed: true
  },
  {
    id: 2,
    title: "FakeStore Application",
    imageUrl: "fakestore.png",
    link: "https://sauravfakestore.netlify.app/",
    completed: true
  },
  {
    id: 3,
    title: "Blogging Application",
    imageUrl: "blogging.png",
    completed: false
  },
];

function ImgCard() {
  const [index, setIndex] = React.useState(0);
  const images = projects.map((i) => {
    return i.imageUrl;
  });



  function handleBack() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (index === projects.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
      console.log(index);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center gap-5">
        <p className="text-xl md:text-2xl lg:text-3xl text-black font-bold pt-4 underline underline-offset-4">
          {projects[index].title}
        </p>
        {!projects[index].completed && (
          <div className="text-red-500 font-bold bg-white marque">Under Development</div>
        )}
        <div
          className="relative w-full h-full overflow-x-hidden mb-0"
        >
          <a
            href={projects[index].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              display: "block",
              height: "100%",
              width: "100%"
            }}
          >
            <button
              onClick={handleBack}
              className="absolute text-4xl left-5 top-[50%] hover:text-yellow-500 text-black"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-5 text-4xl top-[50%] hover:text-yellow-500 text-black"
            >
              <IoIosArrowForward />
            </button>
            <span className="flex absolute justify-center gap-5 w-full bottom-[15%]">
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
