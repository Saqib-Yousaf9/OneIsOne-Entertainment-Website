import React, { useRef, useEffect, useState } from 'react';


const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;
      const section = sectionRef.current;
      const text = textRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const totalScroll = sectionHeight + windowHeight;
      // Calculate how much the section has been scrolled (0 to 1)
      let progress = 1 - (rect.bottom / totalScroll);
      progress = Math.max(0, Math.min(1, progress));
      // Calculate horizontal translation from right (0%) to left (100%)
      const containerWidth = section.offsetWidth;
      const textWidth = text.offsetWidth;
      const maxTranslate = containerWidth - textWidth;
      setTranslateX(maxTranslate * (1 - progress));
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated Gradient Background for the entire hero */}
      <div className="animated-gradient-bg absolute inset-0 w-full h-full z-0 pointer-events-none" />
      {/* Main Content */}
      <main id="home" className="oio-visible oio-page-- relative z-10">
        <section className="oio-section--split oio-full-height">
          {/* Grid Column 2 - Stretch Column with Content */}
          <div className="oio-grid__column">
            <div className="css-181x8d7">
              <div className="oio-grid__column">
                {/* Two Column Grid Layout - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-6 lg:gap-0">
                  {/* Grid Item 1 - Left */}
                  <div className="oio-carousel__slide oio-subgrid border-r-0 lg:border-r border-white/20 mt-10 lg:mt-20 ml-0 lg:ml-20">
                    <div className="oio-grid__column p-4 lg:p-6">
                      <div className="css-yah2wy">
                        <h3 className="raleway-600 oio-text--upper text-white text-xl lg:text-4xl font-bold mb-3 leading-relaxed text-center lg:text-left">
                          Welcome To <span className="oio-animated-gradient-text bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}>OneIsOne Entertainment</span> Where Dreams Shift The Culture!!
                        </h3>
                        <div className="text-center lg:text-left">
                          <a
                            className="transition-all font-semibold oio-animated-gradient-text bg-clip-text text-transparent"
                            href="/cmg-studios/"
                            style={{
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent'
                            }}
                          >
                            Learn More
                          </a>
                        </div>
                        
                        {/* Mobile: Stacked layout */}
                        <div className="mt-12 lg:mt-80 flex flex-col lg:flex-row items-center lg:items-center justify-center">
                          {/* Vertical Heading for large screens */}
                          <h6
                            className="raleway-600 oio-text--upper font-bold mb-4 lg:mb-0 lg:mr-6 bg-clip-text text-transparent hidden lg:block"
                            style={{
                              fontSize: '30pt',
                              writingMode: 'vertical-lr',
                              textOrientation: 'mixed',
                              letterSpacing: '0.2em',
                              minHeight: '220px',
                              transform: 'rotate(180deg)',
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              minWidth: '120px',
                              textAlign: 'center',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            WHAT WE DO ?
                          </h6>
                          {/* Mobile version of the title */}
                          <h6
                            className="raleway-600 oio-text--upper font-bold mb-4 text-center lg:hidden bg-clip-text text-transparent"
                            style={{
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              textAlign: 'center'
                            }}
                          >
                            WHAT WE DO ?
                          </h6>
                          <div className="flex-1 flex flex-col items-center lg:items-start justify-center mt-10">
                            <p className="text-white mb-8 text-sm text-center lg:text-left">
                              What began as a modest independent record label has transformed into a cutting-edge music technology and digital distribution enterprise, all while remaining committed to our core mission: to empower creators to thrive and adapt within the ever-evolving global music landscape. For years, we have diligently researched and analyzed top-tier technologies designed to streamline the processes for artists and labels. Our tech team tirelessly works around the clock to enhance our products and services. From accounting and digital distribution to data analytics, copyright detection, and content monetization, these are just a few of the many solutions we provide.
                            </p>
                          </div>
                        </div>

                        {/* New grid row below */}
                        <div className="grid grid-cols-1 gap-8 mt-12 lg:mt-24">
                          <div className="p-4 lg:p-6 rounded-lg">
                            <h4 className="raleway-600 text-lg font-bold mb-2 text-center lg:text-left bg-clip-text text-transparent" style={{
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent'
                            }}>WORK WITH US</h4>
                            <p className="text-white/80 text-left">OneIsOneEnt serves clients worldwide, continuously seeking innovative methods to broaden our reach, penetrate new markets, and provide our clients with global opportunities. We proudly represent leading brands in the music and media industries, positioning ourselves as key players in the independent music sector and actively shaping the future for our clients within the music landscape.
                            </p>
                          </div>
                        </div>

                        {/* News & Articles Section
                        <div className="mt-12 lg:mt-24">
                          <h4 className="oio-sub text-lg font-bold text-white mb-4 text-center lg:text-left">News & Articles</h4>
                          <div className="bg-black rounded-lg p-6 lg:p-8" style={{ minHeight: '200px', maxHeight: '300px' }}>
                            <div className="flex items-center justify-center h-full">
                              <p className="text-white/60 text-left">Slideshow of News Articles - Coming Soon</p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 2 - Right */}
                  <div className="oio-carousel__slide oio-subgrid">
                    <div className=" oio-grid__column oio-show--sm-up mt-12 lg:mt-24 mb-12 lg:mb-24">
                      <div className="flex items-center justify-center" style={{ minHeight: '150px', maxHeight: '200px' }}>
                        <img
                          src="/assets/logo.gif"
                          alt="Logo"
                          className="pointer-events-none"
                          style={{ 
                            width: '300px', 
                            height: '300px', 
                            background: 'transparent',
                            maxWidth: '100%',
                            height: 'auto'
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-start h-full">
                      <div className="oio-carousel__slide oio-subgrid flex flex-col justify-center">
                        <div className="oio-grid__column p-4 lg:p-6 text-center lg:text-left">
                          <h2 className="raleway-600 text-white text-lg lg:text-xl font-bold mb-3 transition-all duration-300 oio-animated-gradient-text bg-clip-text text-transparent"
                            style={{
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              minWidth: '120px'
                            }}>
                            ARTIST-CENTRIC PHILOSOPHY
                          </h2>
                          <p className="epsilon text-white/80 text-sm mb-0 text-align-left">
                            At OneIsOneEnt, our philosophy centers around an Artist-Centric approach. We offer bespoke services designed to cultivate an environment that supports you and your team, all while ensuring that you retain full ownership of your content.
                            We focus on optimizing revenue opportunities across various platforms, granting you access to exclusive technology that enables real-time tracking of your earnings. Additionally, we provide top-tier label services, all while preserving your ownership and 
                            creative freedom.
                          </p>
                        </div>
                      </div>
                      <div className="oio-carousel__slide oio-subgrid flex flex-col justify-center">
                        <div className="oio-grid__column p-4 lg:p-6">
                        <h2 className="raleway-600 text-white text-lg lg:text-xl font-bold mb-3 transition-all duration-300 oio-animated-gradient-text bg-clip-text text-transparent"
                            style={{
                              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              minWidth: '120px'
                            }}>
                            Label Bridge
                          </h2>
                          <p className="epsilon text-white/80 text-sm mb-4 text-left">
                            Label Bridge is a dynamic music technology ecosystem created by OneIsOneEnt aimed at empowering independent artists and labels to distribute, monetize, and manage their music more efficiently. Specifically crafted for independent musicians, producers, and small labels, Label Bridge offers a straightforward solution for getting music onto streaming platforms. It also provides essential tools for maximizing revenue and tracking royalties. With all the resources you need to build and manage your career like a major label, you can easily access everything from your mobile device or computer.
                          </p>
                        </div>
                      </div>

                      {/* Songwriters & Producer's Section for Right Column */}
                      <div className="oio-carousel__slide oio-subgrid flex flex-col justify-center">
                        <div className="oio-grid__column p-4 lg:p-6">
                          <h4 className="raleway-600 text-lg font-bold mb-4 text-center lg:text-left bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}>Songwriters & Producer's</h4>
                          <p className="epsilon text-white/80 text-sm text-left">
                            OneIsOneEnt is dedicated to providing transformative opportunities for songwriters and producers at every stage of their career journey. In the music realm, the term "placement" signifies the successful licensing or sale of a songwriter's or producer's work to various platforms, including artists, films, television shows, and other media. For songwriters, this typically means having their original compositions recorded and made available by an artist. For producers, it could entail having their beats or production featured in songs, commercials, or other creative projects. Achieving placements can represent a significant milestone, unlocking pathways to royalties, increased visibility, and additional opportunities. We collaborate closely with our clients to help them realize this ambition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Release Strategy Section */}
      <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center mt-12">
        {/* Main Heading Above Video */}
        <div className="w-full max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="raleway-600 text-2xl lg:text-3xl font-bold text-white mb-6 transition-all duration-300 bg-clip-text text-transparent"
          style={{
              backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
              fontSize: '32pt',
              letterSpacing: '0.05em',
              lineHeight: '1.2'
            }}>
            🚀 Release Strategy
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto mb-8"></div>
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            An effective strategy for launching music requires careful planning and implementation, spanning from generating excitement before the release to maintaining engagement afterward. This process involves assembling a capable team to support your release, which is where our exceptional marketing professionals come into play.
          </p>
        </div>
        
        {/* Video and Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 lg:px-8">
          {/* Video on the left */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="relative group w-full h-full flex items-center justify-center">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              
              {/* Video container */}
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:border-white/30 transition-all duration-500 w-full max-w-lg">
            <video
                  src="/assets/RELEASE STRATEGY.mp4"
              autoPlay
              loop
              muted
              playsInline
                  className="rounded-xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
                  style={{ minHeight: '450px', maxHeight: '500px' }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="raleway-600 text-2xl lg:text-3xl font-bold text-white mb-4 bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Key Components
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-6"></div>
              </div>
              
              
              
              <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-6">
                Key components include designing captivating artwork, developing a pre-save initiative, crafting a press release, pitching to playlists, leveraging social media for promotion, refreshing your electronic press kit (EPK), and analyzing performance metrics to enhance future campaigns.
              </p>
              
              <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-6">
                Prioritizing the creation of anticipation, connecting with fans, and maximizing exposure across diverse platforms is essential for a successful launch.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/80 text-sm">AI-Powered Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white/80 text-sm">Smart Distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/80 text-sm">Real-time Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white/80 text-sm">Automated Processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Two Column Grid Section */}
      <div className="relative w-full py-12 px-4 lg:px-0 flex flex-col items-center mt-12 oio-animated-gradient" style={{overflow: 'hidden'}}>
        {/* Animated Gradient Background */}
        <div className="animated-gradient-bg absolute inset-0 w-full h-full z-0 pointer-events-none" />
        <section className="relative w-full max-w-5xl mx-auto text-justify z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column One */}
            <div className="bg-black/70 rounded-lg p-8 flex flex-col h-full shadow-lg items-center justify-center text-center min-h-[380px]">
          <h4 className="raleway-600 text-3xl font-bold mb-4 oio-animated-gradient-text bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Artist Development</h4>
          <p className="text-white/90 text-lg max-w-prose">
            Artist development involves nurturing an artist's talent, cultivating their brand, and laying the groundwork for a successful career. This strategic approach aims to help artists evolve beyond their creative skills, integrating business knowledge, marketing expertise, and comprehensive brand management. It's an area we are deeply familiar with and genuinely passionate about.
          </p>
            </div>
      
          
            {/* Column Two */}
            <div className="bg-black/70 rounded-lg p-8 flex flex-col h-full shadow-lg">
              <div className="flex flex-col lg:flex-row items-center lg:items-start h-full w-full">
                {/* Vertical Heading for large screens */}
                <h3
                  className="raleway-600 oio-text--upper font-bold mb-4 lg:mb-0 lg:mr-6 bg-clip-text text-transparent hidden lg:block"
                  style={{
                    fontSize: '30pt',
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                    letterSpacing: '0.2em',
                    minHeight: '180px',
                    transform: 'rotate(180deg)',
                    backgroundImage: 'linear-gradient(90deg,#3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    minWidth: '60px'
                  }}
                >
                  News & Articles
                </h3>
                {/* Horizontal Heading for mobile */}
                <h3
                  className="raleway-600 oio-text--upper font-bold mb-4 text-center lg:hidden bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Creative Space
                </h3>
              
              
                <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
                  <div className="text-center mb-4">
                    <h5 className="text-white font-bold text-lg mb-3 bg-clip-text text-transparent" style={{
                      backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      ✨ Featured Article ✨
                    </h5>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <img 
                      src="https://24hip-hop.com/wp-content/uploads/2024/07/oneisone-entertainment-redefining-the-rhythm-of-tomorrows-hits.jpg" 
                      alt="OneIsOne Entertainment Article" 
                      className="relative w-64 h-40 object-cover rounded-xl shadow-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/assets/thumbnail.png";
                        e.target.className = "relative w-64 h-40 object-contain rounded-xl shadow-2xl border-2 border-white/20 bg-white/10";
                      }}
                    />
                  </div>
                  
                  <div className="text-center max-w-sm">
                    <h6 className="text-white font-semibold text-base mb-3 leading-tight">
                      OneIsOne Entertainment: Redefining the Rhythm of Tomorrow's Hits
                    </h6>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      Discover how OneIsOneEnt is transforming the music industry with innovative technology and artist-centric services.
                    </p>
                    <a 
                      href="https://24hip-hop.com/oneisone-entertainment-redefining-the-rhythm-of-tomorrows-hits/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span>Read Full Article</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                            </div>
             
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Distribution Section - Two Column Grid */}
      <section className="w-full py-12 px-4 lg:px-0 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Videos Section Above */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-15 mb-12">
            {/* Music Distribution Video */}
            <div className="w-full flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:border-white/30 transition-all duration-500 w-full max-w-lg">
                  <video
                    src="/assets/MUSIC DISTRIBUTION.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
                    style={{ minHeight: '300px', maxHeight: '350px' }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Publishing Video */}
            <div className="w-full flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:border-white/30 transition-all duration-500 w-full max-w-lg">
                  <video
                    src="/assets/PUBLISHING.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
                    style={{ minHeight: '300px', maxHeight: '350px' }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Distribution Text */}
            <div className="bg-black/70 rounded-lg p-8 flex flex-col h-full shadow-lg border-r-0 lg:border-r border-white/20">
              <div className="flex flex-col lg:flex-row items-center lg:items-start h-full w-full">
                {/* Vertical Heading for large screens */}
                <h4
                  className="raleway-600 oio-text--upper font-bold mb-4 lg:mb-0 lg:mr-6 bg-clip-text text-transparent hidden lg:block"
                  style={{
                    fontSize: '30pt',
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                    letterSpacing: '0.2em',
                    minHeight: '180px',
                    transform: 'rotate(180deg)',
                    backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    minWidth: '60px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Distribution
                </h4>
                {/* Horizontal Heading for mobile */}
                <h4
                  className="raleway-600 oio-text--upper font-bold mb-4 text-center lg:hidden bg-clip-text text-transparent "
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center'
                  }}
                >
                  Distribution
                </h4>
                <div className="flex-1 flex flex-col items-center lg:items-start justify-center mt-10">
                  <p className="text-white/90 text-lg text-center lg:text-left">
                    Music distribution involves the process of making music accessible across multiple platforms, particularly streaming services and digital stores, for both listening and purchasing. OneIsOneEnt serves as an intermediary, linking artists and labels with these platforms. We manage the technical details of uploading, formatting, and delivering music, along with the collection and distribution of royalties.
                  </p>
                </div>
              </div>
            </div>
              {/* Artist Development Section - Separate */}
      
              <div className="bg-black/70 rounded-lg p-8 flex flex-col h-full shadow-lg">
              <h3 className="raleway-600 text-2xl lg:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent text-left" style={{backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Publishing
              </h3>
              <p className="text-white/90 text-base mb-4 text-left">Music publishing involves the oversight, safeguarding, and monetization of musical compositions. This process includes securing copyrights, licensing songs for diverse applications, and gathering royalties whenever these works are commercially exploited. Essentially, it embodies the commercial side of songwriting, ensuring that artists receive just compensation for their creative efforts.</p>
              <p className="text-white/90 text-base mb-2 text-left">We are here to assist you in claiming the royalties you deserve by:</p>
              <ul className="list-disc list-inside text-white/80 text-base pl-4 text-left">
                <li>Collecting your royalties on a global scale</li>
                <li>Monitoring your publishing royalties from platforms like Spotify, YouTube, TikTok, Radio, and many other revenue sources</li>
                <li>Providing detailed analytics on the origins of your performance and mechanical royalties.</li>
              </ul>
        </div>
      
          </div>
        </div>
      </section>

      {/* Client Catalog Section - At Bottom */}
      <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center mt-12">
        <h2 className="raleway-600 oio-text--upper text-white text-2xl lg:text-4xl font-bold mb-8 text-center">
          <span className="oio-animated-gradient-text bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(90deg, #3b00ff, #FF06C1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>CLIENT CATALOG</span>
        </h2>
        
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Calboy */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-top flex items-center justify-center" style={{ backgroundImage: 'url(/assets/2.jpg)' }}>
             
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">LeeLee BaBii </h3>
              </div>
            </div>

            {/* 03Greedo */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/assets/3.jpg)' }}>
               
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">Calboy</h3>
              
              </div>
            </div>

            {/* 03Greedo */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-top flex items-center justify-center" style={{ backgroundImage: 'url(/assets/4.jpg)' }}>
            
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">03Greedo</h3>
            
              </div>
            </div>

            {/* K Shiday */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/assets/6.jpg)' }}>
             
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">K Shiday</h3>
              
              </div>
            </div>

          </div>

          {/* Center the last two cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-6xl mt-6">
            {/* Empty space for centering on large screens */}
            <div className="hidden lg:block"></div>
            
            {/* Parris Ladame */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-teal-600/20 to-green-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/assets/7.jpg)' }}>
              
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">Parris Ladame</h3>

              </div>
            </div>

            {/* Stunna Girl */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/assets/5.jpg)' }}>
                
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-sm">Stunna Girl</h3>
              
              </div>
            </div>
            
            {/* Empty space for centering on large screens */}
            <div className="hidden lg:block"></div>
          </div>

        
        </div>
      </section>
   
    </section>
  );
};

export default Hero; 

<style>{`
.animated-gradient-bg {
  background: linear-gradient(90deg, rgba(59,0,255,0.18) 0%, rgba(255,6,193,0.18) 100%);
  background-size: 200% 200%;
  animation: gradientMove 8s ease-in-out infinite;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`}</style> 