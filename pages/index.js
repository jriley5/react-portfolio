import { useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from 'next/image'


// import {render} from 'react-dom';
// import {VideoScroll} from 'react-video-scroll';

// Local Data
import data from "../data/portfolio.json";


// thrash animation
// const currentFrame = (index) => {
//   let padding = "0";
//   if (index >= 10) {
//     padding = "";
//   }

//   return "../jack-thrash-frames/jack-thrash" + padding + index + ".jpg";
// }


export default function Home() {
  // Ref 
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // State
  const [readMoreWorkCards, setReadMoreWorkCards] = useState(false);
  const [readMoreAbout, setReadMoreAbout] = useState(false);

  let filteredWorkJSON = (readMoreWorkCards? data.projects : data.projects.slice(0,4));
  let filteredAboutParas = (readMoreAbout? data.aboutpara : [data.about.aboutpara[0], data.about.aboutpara[1]]);
  let aboutParasStyle = "tablet:m-10 mt-2 text-lg text-stone-300	";
  let aboutBullets = data.about.bullets;

  const profImageSource = 'https://i.imgur.com/vWM6rjk.jpg'
    
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`} id="entire-page">
      {data.showCursor && <Cursor />}

      <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      </div>
      

      <div className="gradient-circle"></div>
      {/* <div className="gradient-circle-bottom"></div> */}

      <div className="container mx-auto">

        <Header 
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />

        <div className="laptop:mt-40 mt-10" id="section-intro">
          <div id="intro-flex">
            <div id="intro-text">
            <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-6xl py-1 tablet:py-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl py-1 tablet:py-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-4xl py-1 tablet:py-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-4xl py-1 tablet:py-2 text-bold w-full laptop:w-4/5 mb-9"
            >
              {data.headerTaglineFour}
            </h1>
            <Socials className="" />
          </div>
          </div>

          
          <Image loader={() => profImageSource} src={profImageSource} id="intro-prof-pic" width="300px" height="400px" alt="profile picture" />
          </div>
          
          
        </div>



        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" id="section-work" ref={workRef}>
          <h1 className="text-3xl text-bold">My Work</h1>

          <div className="mt-5 mb-10 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {filteredWorkJSON.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                artist={project.artist}
                credits={project.credits}
                spotifyURL={project.spotifyURL}
                viewMore={readMoreWorkCards}
                playlistURLs={project.playlistURLs}
                onClick={() => 0}//window.open(project.spotifyURL)}
              />
            ))}
          </div>

              <div className="flex justify-center ">
              <Button type={"primary"} onClick={()=>{
                setReadMoreWorkCards(!readMoreWorkCards);
                workRef.current.scrollIntoView();
                }}>
                  {(readMoreWorkCards? "show less" : "show more" )}
              </Button>
              </div>

        </div>



        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-3xl text-bold mb-5">About Me</h1>
          
          <div id="about-paras">
            <div className="about-column">
            <p className={aboutParasStyle}>
            Hi! I&apos;m Jack Riley, a senior at Brown University studying Music and Computer Science.  
            I&apos;m a music producer, audio engineer, songwriter, drummer and bassist from Los Angeles, 
            and I focus on production in pop, folk, r&b, rap, and indie rock. I&apos;ve put out over 45 songs with 15 
            different artists which total over 4.3 million streams, and my productions have been placed on Spotify&apos;s 
            New Music Friday, Fresh Finds, and 12 other editorial playlists without management.
          </p>

          <p className={aboutParasStyle} style={{"marginBottom" : "11px"}}>
          Here&apos;s what I&apos;ve been up to in the past year:
          </p>

          <ul className="list-disc" style={{"marginLeft" : "40px"}}>
            {aboutBullets.map(bullet => 
              <li key={bullet} className="text-med mb-1 text-stone-300">{bullet}</li>)}
          </ul>

          <p className={aboutParasStyle}>
          In 2022, I released FLORA, a joint project with fellow Brown classmate 
          Luc Espinosa that features an assortment of vocalists and writers, 
          including DAP The Contract, Chance Emerson, Lauren Juzang, Truvi, 
          Prettyboyworldwyde,  Jackson Jones, and Gus Benson. FLORA has collected 
          over 850k streams and been featured on 7+ Spotify editorial playlists 
          as of December 2022. ​

          </p>


          </div>

          

          <div className="about-column">

            <p className={aboutParasStyle}>
            In 2021, &quot;Lullabies&quot; by Prettyboyworldwyde, a song I produced and mixed, 
            was featured on Spotify&apos;s &quot;New Music Friday&quot; and &quot;anti pop&quot; playlists, now 
            topping 426k streams from a previous listener base of under 10,000. Another 
            song of ours,&quot;Know You&apos;re Different,&quot; was also featured as the first track of 
            over 50 others on Spotify&apos;s &quot;Fresh Finds&quot; editorial playlist. &quot;Unimpressed,&quot; 
            another PBW release, was featured on &quot;anti pop&quot; as well and now holds near 230k streams. 
            </p>

            <p className={aboutParasStyle}>
            At Brown, I&apos;m a co-founder of the Brown Organization of Producers and Songwriters (BOPS), 
            an executive board member for Tunes for Change, a Brown organization that hosts charitable 
            benefit concerts, and the President of the Brown Music Cooperative, which organizes band 
            rehearsal spaces on campus. In 2021, I was a recipient of the Brown Department of 
            Music Margery MacColl Award for outstanding musicianship. 
            </p>

            <p className={aboutParasStyle}>
            In summer 2021, I mixed a classical/jazz fusion album written by Ben Beckman, a composer 
            who has had pieces played by the LA Philharmonic and the National Youth Orchestra of the 
            United States of America on the BBC Proms. &quot;VOYAGE&quot; released in October 2021.
            </p>

            <p className={aboutParasStyle}>
            I also love to teach — I designed and co-taught a series of remote music production 
            workshops for high schoolers at Curious Cardinals and REACH Academy with Chance Emerson 
            throughout summer 2021. I currently work at Curious Cardinals as a music production and 
            coding instructor, teaching 7 students weekly. 
            </p>

            <p className={aboutParasStyle}>
            I&apos;m available for more projects! Feel free to message me on Instagram or email me at <a href="mailto:jackbriley@me.com"><u>jackbriley@me.com</u>.</a>
            </p>
            </div>
          </div>


          {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-4xl text-bold">Session Walkthroughs</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                name={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div> */}
          
          

{/* 
          {filteredAboutParas.map(para => 
            <p key={para.key} className="tablet:m-10 mt-2 text-xl  w-full laptop:w-3/5">
              {para}
            </p>
          )} */}

          {/* <Button type={"primary"} onClick={()=>setReadMoreAbout(!readMoreAbout)}>{(readMoreAbout? "read less" : "read more" )}</Button> */}
        </div>
        <Footer refs={contactRef}/>
      </div>
    </div>
  );
}