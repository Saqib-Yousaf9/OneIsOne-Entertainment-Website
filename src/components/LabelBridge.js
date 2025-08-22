import React from 'react';
import { FaSpotify, FaApple, FaAmazon, FaTiktok, FaInstagram, FaYoutube, FaItunesNote, FaSoundcloud,FaHeart } from 'react-icons/fa';
import { SiTidal, SiAudiomack } from 'react-icons/si';

const LabelBridge = () => (
  <>
  <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center oio-animated-gradient">
    <img src="/assets/label_bridge.png" alt="Label Bridge Logo" style={{ maxWidth: '220px', marginBottom: '1.5rem', display: 'block' }} />
    <div className="max-w-5xl w-full mx-auto">
      <div className="max-w-4xl w-full mx-auto  ">
        <h2 className="raleway-600 text-4xl font-extrabold text-center mb-8 text-white uppercase">What is Label Bridge?</h2>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          Label Bridge is a dynamic music technology ecosystem aimed at empowering independent artists and labels to distribute, monetize, and manage their music more efficiently. Specifically crafted for independent musicians, producers, and small labels, Label Bridge offers a straightforward solution for getting music onto streaming platforms. It also provides essential tools for maximizing revenue and tracking royalties. With all the resources you need to build and manage your career like a major label, you can easily access everything from your mobile device or computer.
        </p>
      </div>
      </div>
  </section>
  <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center">
      <div >
        <h3 className="raleway-600 text-2xl font-bold text-white mb-4 mt-12 text-center uppercase">What Instruments Shape Our Ecosystem?</h3>
      </div>

      <div className="max-w-4xl w-full mx-auto flex flex-row flex-wrap justify-center items-center gap-6 bg-transparent p-0 mb-8">
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg,#3b00ff, #FF06C1) 1'}} >Digital Distribution</div>
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg, #3b00ff, #FF06C1) 1'}} >Accounting</div>
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg, #3b00ff, #FF06C1) 1'}} >Analytics & Data</div>
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg, #3b00ff, #FF06C1) 1'}} >Catalogue Arrangement</div>
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg, #3b00ff, #FF06C1) 1'}} >Release Management</div>
        <div className="text-white/90 text-lg font-semibold px-6 py-4 rounded-full shadow-none bg-transparent" style={{border: '2px solid', borderImage: 'linear-gradient(90deg, #3b00ff, #FF06C1) 1'}} >Split Sheet Administration</div>
      </div>
 {/* Distribution Section - Two Column Grid */}
      <section className="w-full py-12 px-0 flex flex-col items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Distribution Text */}
            <div className="bg-black/70 rounded-lg p-8 flex flex-col h-full shadow-lg border-r-0 lg:border-r border-white/20 w-full">
              <div className="flex flex-col items-center h-full w-full">
                <h4
                  className="raleway-600 oio-text--upper font-bold mb-4 text-center bg-clip-text text-transparent uppercase"
                  style={{
                    fontSize: '1.6rem',
                    backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center',
                  }}
                >
                 For Our Label Clients
                </h4>
               
                  <p className="text-white/90 text-lg text-center">
                  For our independent label clients, our release management tools enable their artists to submit demos for consideration. Clients can quickly accept and distribute tracks, reject submissions, or mark them as pending. Additionally, our portal facilitates private messaging, allowing seamless communication between clients and their artists.
                  </p>
                
              </div>
            </div>
            {/* Artist Development Section - Separate */}
            <div className="bg-black/70 rounded-lg p-8 shadow-lg flex flex-col items-center w-full">
              <h4 className="raleway-600 oio-text--upper font-bold mb-4 text-center bg-clip-text text-transparent uppercase"   style={{
                    fontSize: '1.6rem',
                    backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center',
                  }}>For Our Independent Artists</h4>
              <p className="text-white/90 text-lg text-center">
              We take a hands-on approach with our clients' data and analytics, allowing us to identify opportunities before they become apparent to others. This proactive strategy enables us to support our clients' marketing needs and ensure their records receive the recognition they truly deserve. If a record starts to gain traction and could benefit from a financial boost, OneIsOneEnt is open to discussing a marketing budget in exchange for a percentage of its masters. We're here to help you every step of the way!
              </p>
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-5xl w-full py-16 px-4 lg:px-0 flex flex-col items-center">
        <h3 className="raleway-600 text-2xl font-bold mb-4 mt-12 text-center uppercase bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Split Sheet Administration</h3>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          As a songwriter, collaborator, or producer, having a split sheet is essential to establish proof of ownership and your percentage share for each song you create. Without it, your Performing Rights Organization (PRO), publisher, or publishing administrator may struggle to verify your ownership percentage and collect your music royalty earnings. Label Bridge simplifies this process with our in-house Split Sheet Administration. Now, you can complete your split sheet anytime and anywhere, and ensure that all parties involved in the creation of the record can sign off via email confirmation.
        </p>
      </div>
      <div className="max-w-5xl w-full py-16 px-4 lg:px-0 flex flex-col items-center">
        <h3 className="raleway-600 text-2xl font-bold mb-4 mt-12 text-center uppercase bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Digital Distribution</h3>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          As an independent record label or artist, navigating the process of getting your music into top online music stores can often be daunting and time-consuming. Label Bridge's distribution service streamlines this process, allowing you to maintain control while saving both time and money. No matter the size of your label or the stage of your career, Label Bridge is here to help you reach your goals.<br/>
          Once your release is distributed across our network of digital stores and streaming services, you can start generating revenue without any hidden fees or additional costs. Furthermore, you will gain full access to Label Bridge's innovative music technology ecosystem with no subscription fees required. With over 100 partner stores and a dedicated support team, we are committed to helping you achieve priority placements for your releases and elevate your music career to new heights!
        </p>
      </div>
      <div className="max-w-5xl w-full py-16 px-4 lg:px-0 flex flex-col items-center">
        <h3 className="raleway-600 text-2xl font-bold mb-4 mt-12 text-center uppercase bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Accounting</h3>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          Managing a budget can be one of the most exhausting aspects of running a label or being an artist. There's no need to waste money on complex systems or overpriced accountants! The Label Bridge accounting and royalty processing system was crafted by real record label executives to simplify your workload. With Label Bridge, you can manage everything by the click of a button.<br/>
          Our platform enables you to process royalty statements from any digital store quickly, no matter how intricate or extensive they may be. Need to pay an advance? Keep track of expenses? License your music? We equip you with the tools necessary to manage additional income and deals, while also providing our clients with clear visibility into their profit and loss statements.
        </p>
      </div>
      <div className="max-w-5xl w-full py-16 px-4 lg:px-0 flex flex-col items-center">
        <h3 className="raleway-600 text-2xl font-bold mb-4 mt-12 text-center uppercase bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Analytics & Data</h3>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          In the fast-paced world of today's music industry, the use of music analytics and data has become essential for artists, labels, and marketers. By tapping into the wealth of information provided by streaming platforms, social media interactions, and sales figures, industry players can develop a thorough understanding of their audience's listening habits and preferences. This data-centric approach allows artists to refine their marketing campaigns, connect more meaningfully with their fans, and spot new trends in the constantly changing musical scene. Additionally, the application of cutting-edge technologies like machine learning and artificial intelligence facilitates a more nuanced examination of musical trends, paving the way for innovative ideas and an enriched listening experience. At Label Bridge, we firmly believe that embracing music analytics not only supports informed decision-making but also equips artists and brands to excel in a competitive market.
        </p>
      </div>
      <div className="max-w-5xl w-full py-16 px-4 lg:px-0 flex flex-col items-center">
        <h3 className="raleway-600 text-2xl font-bold mb-4 mt-12 text-center uppercase bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Catalogue Arrangement</h3>
        <p className="text-white/90 text-base lg:text-lg mb-8 text-center">
          At Label Engine, we firmly believe that the organization of a music catalog is essential for effectively managing an artist’s or label’s collection. A well-structured catalog ensures that tracks are systematically arranged and readily available for distribution and sales. Each track is typically assigned an International Standard Recording Code (ISRC), which serves as a unique identifier, facilitating the efficient tracking of audio recordings across multiple platforms and aiding in royalty management. Furthermore, albums and compilations receive a Universal Product Code (UPC), which plays a similar role in retail, helping with sales tracking and inventory oversight.<br/>
          Effective catalog organization, complete with precise metadata and coding, not only streamlines the distribution process but also boosts visibility on streaming platforms and in retail spaces, thereby maximizing an artist's exposure and revenue potential. By keeping a meticulously organized catalog, music creators can ensure their works are properly managed and promoted in an increasingly competitive landscape.
        </p>
      </div>
  </section>
  <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center">
    <div className="  h-full w-full oio-animated-gradient">
    <h2 className="raleway-600 text-4xl font-extrabold text-center mb-12 text-white mt-16">Digital Service Providers</h2>
    <div className="grid grid-cols-2 md:grid-cols-7 gap-6 w-full max-w-6xl mx-auto mb-12 ">
       <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaHeart className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">iHeart Radio</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaSpotify className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">Spotify</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaApple className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">MUSIC</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaAmazon className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg text-center">Amazon Music</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <SiTidal className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">TIDAL</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <SiAudiomack className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">Audiomack</span>
      </div>
       <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaItunesNote className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">iTunes</span>
      </div>
      
       <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
      <img src="/assets/Anghami.png" alt="Anghami" className="w-13 h-12 mb-2 object-contain" />
        <span className="text-black font-semibold text-lg">Anghami</span>
      </div>
      
      
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaTiktok className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">TikTok</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaInstagram className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">Instagram</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaYoutube className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">YouTube</span>
      </div>
      <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaItunesNote className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">pandora</span>
      </div>
            <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
        <FaSoundcloud className="text-white text-4xl mb-2" />
        <span className="text-black font-semibold text-lg">SoundCloud</span>
      </div>
        <div className="bg-white/30 rounded-lg shadow flex flex-col items-center justify-center py-4 px-4">
         <img src="/assets/Napster.png" alt="Napster" className="w-13 h-12 mb-2 object-contain" />
        <span className="text-black font-semibold text-lg">Napster</span>
      </div>
      
    </div>
    <div className="text-center mt-8 mb-12">
      <button className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ">
        50+ Top Digital Stores
      </button>
    </div>
  </div>
</section>
  </>
);

export default LabelBridge;