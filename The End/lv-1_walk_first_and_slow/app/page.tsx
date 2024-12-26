import Image from "next/image";

export default function Home() {
  return (

    <>
    <head>
      <title>About Walking.</title>
    </head>
  <main >
    <div className="h-[450px] W-[100%] text-white bg-slate-900 flex justify-center items-center "> 
      <h1 className="text-6xl font-semibold tracking-wider text-white font-mono"><span className="text-orange-400">Walking</span> is good<span className="text-orange-400">.</span></h1>
    </div>
    <div className="p-12 w-full md:w-[80%] mx-auto ">
      <h1 className="text-5xl font-semibold ">About walking.</h1>
      <div className="px-4 flex-col flex gap-4">
        <p className="p-4 mb-8 text-xl text-slate-200 w-3/4">
          Walking is one of the simplest, most accessible forms of exercise. It requires no special equipment and can be done almost anywhere, making it an ideal activity for people of all ages and fitness levels.
        </p>
        <h3 className="text-3xl font-semibold">Key Highlights:</h3>

        <h4 className="text-2xl px-2">Definition: </h4>
        <p className="px-6 text-slate-300">
          Walking is a low-impact, rhythmic, aerobic activity that cardiovascular health and overall well-being.
        </p>
        <h4 className="text-2xl px-2 text-slate-100 font-semibold">Types of Walking: </h4>
        <p className="px-6 text-slate-300 *:text-slate-200 ">
          <span className="font-semibold text-lg"> Casual Walking: </span> For relaxation or light exercise.<br/>
          <span className="font-semibold text-lg"> Brisk Walking:</span> At a faster pace, often for fitness.<br/>
          <span className="font-semibold text-lg">Power Walking:</span> Intense walking with vigorous arm movement.<br/>
          <span className="font-semibold text-lg">Nordic Walking:</span> Using poles to engage the upper body.<br/>
          <span className="font-semibold text-lg">Trekking: </span>Long-distance walking on trails or mountains.
        </p>

      </div>
    </div>
  </main>
    </>
  );
}
