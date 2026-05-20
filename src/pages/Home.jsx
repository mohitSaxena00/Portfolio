import HTML5 from "../assets/skills/HTML5.svg";
import CSS3 from "../assets/skills/CSS3.svg";
import javaScript from "../assets/skills/javaScript.svg";
import Bootstrap from "../assets/skills/Bootstrap.svg";
import CodePen from "../assets/skills/CodePen.svg";
import Express from "../assets/skills/Express.svg";
import Git from "../assets/skills/Git.svg";
import GitHub from "../assets/skills/GitHub.svg";
import MongoDB from "../assets/skills/MongoDB.svg";
import Node from "../assets/skills/Node.js.svg";
import React from "../assets/skills/React.svg";
import Tailwind from "../assets/skills/Tailwind CSS.svg";
import Vercel from "../assets/skills/Vercel.svg";
import react from "../assets/skills/react.svg";
import mohit from "../assets/skills/mohit.png";
import images from "../assets/skills/images.jpg";



function Home() {
    return ( 


     
     <div className="h-full w-full scroll-smooth">
     
     
        <div className=" navi bg-amber-300 flex justify-between   h-[70px] sticky top-0">
            <h3 className="font-bold text-[25px] ml-10 mt-4"> Portfolio</h3>
            <ul className="flex gap-10 text-[18px] font-serif mt-8">
                 <li className="hover:text-white duration-300 cursor-pointer">
                    <a href="#home">Home</a>
                 </li>
                 <li className="hover:text-white duration-300 cursor-pointer">
                    <a href="#about">About</a>
                 </li>
                 <li className="hover:text-white duration-300 cursor-pointer">
                    <a href="#skills">Skills</a>
                 </li>
                 <li className="hover:text-white duration-300 cursor-pointer">
                    <a href="#projects">Projects</a>
                 </li>
                 
            </ul> 
           <button className="font-bold text-[20px] mr-20 rounded-2xl border-1 mt-3 h-[40px] w-[100px] hover:-translate-y- hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer ">
            <a  href="#contact">Contact</a></button>

            
            </div>





        <div id="home" className='flex  bg-amber-200 h-[650px] w-full'>
          <div className=' m-[60px] h-[400px] w-[500px] '>
          <h3 className="text-[30px] ">I am Mohit </h3>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none text-gray-900 ">web developer</h1>
          <p className="mt-8">  I build modern and responsive websites with beautiful UI design,
          smooth animations and user-friendly experiences using Tailwind CSS.</p>

          {/* <div>contact</div> */}
          <div>
             <div class="flex gap-5 mt-10">
        <button class="bg-yellow-400 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-black hover:text-white duration-300">
          Download CV
        </button>
        <button class="border-2 border-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 duration-300">
          Hire Me
        </button>
      </div>
          </div>


          </div>
          
          <div className=' h-[400px] w-[300px] mt-[80px] ml-[370px] rounded-2xl '>
              
                <img src={mohit} alt="mohit" className="h-full w-full  rounded-2xl" />
            
          </div>
        </div>






           <div id="about" className=' bg-amber-200 h-[650px] w-full'>

              <h1 className=" font-bold text-[30px] ml-160 ">About Me</h1>

              <div className="font-medium font-sans pl-2 text-[40px]"></div>    

              <div className=" flex  ml-30">

            <div className='  h-[400px] w-[300px] mt-[60px] rounded-2x1 '>
                <img src={images} alt="images" className="h-full w-full rounded-2xl  " />
          </div>

          <div className=" h-[400px] w-[900px] ml-20 font-medium mt-10 ml-8 leading-10 ">I am Mohit Saxena, a passionate and dedicated Full Stack Web Developer currently pursuing my BCA degree. I have completed training in both Frontend and Backend web development and have built a strong foundation in modern web technologies. I enjoy creating responsive, attractive, and user-friendly websites that provide smooth and engaging user experiences. My skills include HTML, CSS, JavaScript, and other web development concepts that help me develop dynamic and functional web applications.

As a learner and aspiring developer, I am always excited to explore new technologies and improve my technical skills through continuous practice and real-world projects. I believe in hard work, creativity, and consistency, which motivate me to grow every day in the field of web development. My goal is to become a successful software and web developer by gaining professional experience, building innovative projects, and contributing to meaningful digital solutions.

</div>
</div>
         </div>





         <div id="skills" className="h-[620px] w-full border-0 bg-amber-200">
            <div className="font-medium font-sans pl-2 text-[40px] "></div>

              <h1 className=" font-bold text-[50px] ml-[700px] ">Skills</h1>

            <div className="flex flex-wrap justify-center gap-7 pt-6" >

                <div className="h-[120px] w-[120px] rounded-3xl ml-5 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                    <img src={HTML5} alt="HTML5" className="h-full w-full p-5" />
                </div>

                 <div className="h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                     <img src={CSS3} alt="CSS3" className="h-full w-full p-5" />
                 </div>

                 <div className="h-[120px] w-[120px] rounded-3xl ml-5 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                     <img src={javaScript} alt="javaScript" className="h-full w-full p-5" />
                 </div>

                   <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                    <img src={Bootstrap} alt="Bootstrap" className="h-full w-full p-5" />
                   </div>

                    <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={CodePen} alt="Codepen" className="h-full w-full p-5" />
                    </div>

                     <div className="h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                        <img src={Express} alt="Express" className="h-full w-full p-5" />
                     </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                        <img src={Git} alt="Git" className="h-full w-full p-5" />
                      </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={GitHub} alt="GitHub" className="h-full w-full p-5" />
                      </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                           <img src={MongoDB} alt="MongoDB" className="h-full w-full p-5" />
                      </div>
                      
                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={Node} alt="Node" className="h-full w-full p-5" />
                      </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={React} alt="React" className="h-full w-full p-5" />
                      </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={Tailwind} alt="Tailwind" className="h-full w-full p-5" />
                      </div>

                      <div className="h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={Vercel} alt="Vercel" className="h-full w-full p-5" />
                      </div>

                      <div className=" h-[120px] w-[120px] rounded-3xl ml-5  hover:-translate-y-5 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                         <img src={react} alt="react" className="h-full w-full p-5" />
                      </div>

            </div>
               
        </div>



           <div id="projects" className="h-[650px] w-full border-0 bg-amber-200">
            
            <div class="max-w-6xl mx-auto">

           <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4">
           My <span class="text-red-500">Services</span>
            </h2>
            <p class="text-gray-700 max-w-2xl mx-auto">
             I create modern and responsive websites with clean UI/UX
              and smooth user experience for clients.
            </p>
               </div>

    <div class="space-y-7">

      <div class="group border border-gray-700 rounded-2xl p-8 hover:bg-yellow-400 hover:text-black transition duration-500">
        <div class="grid md:grid-cols-3 gap-6 items-center">
          
          <h1 class="text-5xl font-bold">01</h1>

          <h2 class="text-3xl font-semibold">
            Web Development
          </h2>

          <p class="text-gray-800 group-hover:text-black">
            Modern responsive website development using HTML,
            CSS, JavaScript, React and Tailwind CSS.
          </p>

        </div>
      </div>

    
      <div class="group border border-gray-700 rounded-2xl p-8 hover:bg-yellow-400 hover:text-black transition duration-500">
        <div class="grid md:grid-cols-3 gap-6 items-center">
          
          <h1 class="text-5xl font-bold">02</h1>

          <h2 class="text-3xl font-semibold">
            UI/UX Design
          </h2>

          <p class="text-gray-800 group-hover:text-black">
            Attractive and user-friendly UI/UX design with
            clean layouts and better user experience.
          </p>

        </div>
      </div>
     
      <div class="group border border-gray-700 rounded-2xl p-8 hover:bg-yellow-400 hover:text-black transition duration-500">
        <div class="grid md:grid-cols-3 gap-6 items-center">
          
          <h1 class="text-5xl font-bold">03</h1>

          <h2 class="text-3xl font-semibold">
            Content Writing
          </h2>

          <p class="text-gray-800 group-hover:text-black">
            Professional content writing for websites,
            blogs and social media platforms.
          </p>

        </div>
      </div>

    </div>
  </div>
</div>



         <div id="projects" className="h-[650px] w-full border-0 bg-amber-200">
            
                     <h1 className=" font-bold text-[30px] ml-[700px]">My Projects</h1>

            <div className="font-medium font-sans pl-2 text-[40px]"> </div>

            <div className="flex flex-wrap justify-center gap-20 pt-6  mt-20" >



                <div className="border-2  bg-white h-[270px] w-[360px] rounded-3xl ml-5 hover:-translate-y-2 hover:scale-105 hover:shadow-2x1
                    transition-all duration-500 cursor-pointer">
                    

                    <h1 className="font-bold text-[30px] h-[60px] w-[280px]  mt-5 ml-6 ">Portfolio Website</h1>
                    
                    <p className="font-medium  text-[17px]  h-[100px] w-[300px] mt-3 ml-6 ">A personal portfoio 
                        website created using HTML and CSS to showcase my skills,education,and
                         projects</p>

                         <div className=" text-[7] font-medium  h-[40px] w-[90px] mt-3 ml-7 ">HTML+CSS</div>
                </div>




                 <div className="border-2  bg-white h-[270px] w-[360px] rounded-3xl ml-5 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
                    transition-all duration-500 cursor-pointer">

                     <h1 className="font-bold text-[30px] h-[60px] w-[280px]  mt-5 ml-6 border- ">Login Page Desigh</h1>
                    
                    <p className="font-medium  text-[17px]  h-[70px] w-[300px] mt-3 ml-6  border-">A responsive login page with clean UI desigh using HTML and CSS</p>

                         <div className=" text-[7] font-medium  h-[40px] w-[90px] mt-3 ml-7 border- ">HTML+CSS</div>
                 </div>



                 
                  <div className="border-2 bg-white h-[270px] w-[360px] rounded-3xl ml-5 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
                    transition-all duration-500 cursor-pointer">

                     <h1 className="font-bold text-[30px] h-[50px] w-[280px]  mt-5 ml-6 ">Web Page</h1>
                    
                    <p className="font-medium  text-[17px]  h-[70px] w-[300px] mt-3 ml-6 border- ">An online resume layout including About,skills, and  contact sections</p>

                         <div className=" text-[7] font-medium  h-[40px] w-[90px] mt-3 ml-7 border-">HTML+CSS+javaScript</div>
                  </div>

                
            </div>
               
        </div>



         <div id="contact" className="h-[650px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
     
        <div className="p-10 text-white flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            Contact Me
          </h1>

          <p className="text-gray-300 mb-8 leading-7">
            Agar aapko website, portfolio ya frontend project banwana hai
            to mujhe message karo 🚀
          </p>

          <div className="space-y-5">
            <div>
              <h2 className="font-semibold text-cyan-400">Email</h2>
              <p className="text-gray-300">mohit@gmail.com</p>
            </div>

            <div>
              <h2 className="font-semibold text-cyan-400">Phone</h2>
              <p className="text-gray-300">+91 9910696368</p>
            </div>

            <div>
              <h2 className="font-semibold text-cyan-400">Location</h2>
              <p className="text-gray-300">India</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-10">
          
          <form className="space-y-6">
            
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
    
    


          </div> 



     );
}

export default Home;
