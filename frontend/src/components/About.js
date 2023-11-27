// import React from 'react'
// import "./about.css"
// import Navbar from "./Navbar";
// function About() {
//     return (
//         <>
//         <Navbar/>
//             <section className='first background'>
//                 <div >
//                 <div className='firsthalf'>
//                          <img src={require('./arjun and krishna.jpg')} alt='Picture'></img> 
//                          </div>
//                     <div className='main'>
                        
//                          <div className='secondhalf'>
//                         <p>
//                             Welcome to our page dedicated to using the Bhagavad Gita to solve real-life problems! Here, we combine the ancient wisdom of the Gita with the cutting-edge technology of OpenAI to generate insightful responses to the challenges that people face in their everyday lives.

//                             Our page is built on the concept of prompt engineering, where we use carefully crafted prompts to generate AI-generated responses from the Bhagavad Gita. Our team of experts has curated a collection of common problems that people face, ranging from relationships to career to personal growth. We then use OpenAI's GPT-3 language model to generate responses based on the prompts.

//                             The Bhagavad Gita is one of the most revered scriptures in the Hindu religion, offering guidance and inspiration for millions of people around the world. Its teachings are timeless and universal, offering insights that are just as relevant today as they were thousands of years ago.

//                             At our page, we aim to apply the wisdom of the Gita to the problems that people face in their lives. Whether you are seeking advice on how to navigate a difficult relationship, looking for guidance on finding your life's purpose, or simply seeking inspiration to overcome a challenge, our AI-generated responses can offer a fresh perspective and a source of comfort.

//                             We invite you to explore our page and discover the transformative power of the Bhagavad Gita. Join us on a journey of self-discovery and personal growth as we apply the ancient wisdom of the Gita to the challenges of modern life.
//                         </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About


import React from 'react';
import './about.css';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <Navbar />
      <section className='about-section background'>
        <div className='container'>
          <div className='firsthalf'>
            <img src={require('./arjun and krishna.jpg')} alt='Picture' />
          </div>
          <div className='main'>
            <div className='secondhalf'>
            <h2>About GitGPT</h2>
              <p>
                Welcome to GitGPT, your virtual guide inspired by the timeless
                wisdom of the Bhagavad Gita. Our page functions as a unique
                chatbot, where you can ask questions and receive answers
                aligned with the teachings of the Bhagavad Gita.
              </p>
              <br></br>
              <p>
                The Bhagavad Gita, often referred to as the "Song of God," is a
                sacred scripture that imparts profound insights into life's
                challenges, purpose, and the path to spiritual fulfillment.
                GitGPT brings this ancient wisdom to the modern age, providing
                personalized responses based on the principles of the Bhagavad
                Gita.
              </p>
              <br></br>
              <p>
                How it Works:
                Simply ask your questions, seek guidance, or explore topics
                that matter to you. GitGPT uses state-of-the-art language
                models to analyze your queries and deliver responses inspired
                by the teachings of the Bhagavad Gita.
              </p>
              <br></br>
              <p>
                Our Vision:
                GitGPT aims to make the timeless wisdom of the Bhagavad Gita
                accessible to everyone, offering a virtual space for reflection,
                guidance, and inspiration. Whether you're navigating personal
                challenges, seeking clarity, or simply exploring spiritual
                insights, GitGPT is here to assist you on your journey.
              </p><br></br>
              <p>
                Join us in this exploration of ancient wisdom in a modern
                context. Ask, learn, and discover the transformative power of
                the Bhagavad Gita through the virtual conversation with GitGPT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

