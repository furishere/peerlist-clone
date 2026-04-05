import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Navbar } from "./components/Nabar";
import { QandA } from "./components/QandA";
import { BottomInput } from "./components/BottomInput";
import jobs from "./assets/job-hunt-light.webp"
import launchpad from "./assets/project-light.webp"
import scroll from "./assets/scroll-light.webp"
import thumbnail from "./assets/thumbnail-light.webp"
import { Sectionbottom } from "./components/Sectionbottom";
import integrations from "./assets/integrations-light.webp"
import domain from "./assets/custom-domain-light.webp"
import article from "./assets/article-light.webp"
import collections from "./assets/collections-light.webp"
import resume from "./assets/resume-light.webp"
import { Profile } from "./components/Profile";

export default function App(){
  return <div className="flex justify-center bg-white">
    <div className="w-full max-w-xl  h-screen">
      <Navbar />
      <Hero/>
      <Profile />
      <Sectionbottom heading={"All your work at one place"}
      paragraph={"Showcase your proof-of-work from different platforms and keep your Peerlist profile always updated with your latest work."}
      image={integrations}/>
      <Sectionbottom heading={"Collection of Favorites"}
      paragraph={"Bring your professional personality to life by adding collections of your favorite books, podcasts, videos, and links."}
      image={collections}/>
      <Sectionbottom heading={"Your Profile. Your Domain!"}
      paragraph={"Use your Peerlist profile as a personal portfolio website by hosting it on your own custom domain. It's free!"}
      image={domain}/>
      <Section heading={"Launchpad"}
      subHeading={"Working on a project?"} 
      button={"Launchpad"}
      paragraph={"If you're building projects and are looking for the first 100 users who will share genuine feedback with you, then launch your projects on Peerlist Launchpad on Monday, every week!"}
      image={launchpad}/>
      <Section heading={"Scroll"}
      subHeading={"Share your work!"} 
      button={"Go to Scroll"}
      paragraph={"This is not your typical content feed. It's a place to show what you are working on, share feedback, ask questions, give answers, share opportunities, and more!"}
      image={scroll}/>
      <Section heading={"Jobs"}
      subHeading={"Looking for a job?"} 
      button={"Startup Jobs"}
      paragraph={"Find exciting job opportunities, from fast-growing early-stage startups to the unicorns you know & love."}
      image={jobs}/>

      <QandA heading={"Very frequently asked questions"} />
      <QandA heading={"How is Peerlist different from LinkedIn?"} 
      paragraph1={"Peerlist is a community for all tech professionals, especially designers and developers. The platform is built with tech professionals in mind, offering a comprehensive profile to showcase your work across the internet—whether it's projects, open-source contributions, design work, or more."}
      paragraph2={"Peerlist emphasizes a community-driven experience, promoting knowledge sharing, collaboration, and credibility among tech professionals. It also ensures authenticity with verified accounts, making it a more niche and purposeful space compared to LinkedIn's broader, generalist approach."}/>
      <QandA heading={"What is a Peerlist profile & why do I need one?"}
      paragraph1={"Your work might be spread across GitHub, Dribbble, Medium, and other platforms. Peerlist brings everything together into one profile with seamless integrations. You can also highlight your verified work experience, education, and bootcamp credentials in the Resume section, write articles, and showcase your interests—all on a single page."}
      paragraph2={"So when applying for jobs, you only need to share your Peerlist profile."}/>
      <QandA heading={"I joined Peerlist, what's next?"}
      paragraph1={"Share what you're working on, learnings, and your projects. You can collaborate with other tech professionals by giving feedback, offering help, or even trying out their projects. You might also find opportunities to collaborate on different projects. Plus, you can discover relevant job opportunities or post a job if you're hiring. It's a community of tech professionals where you can network with like-minded individuals."}/>
      <BottomInput/>
    </div>
  </div>
}