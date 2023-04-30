import React from 'react'

const Projects = () => {
  return (
<>
<h1 className='titlen'>Projects</h1>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="pro" style={{backgroundColor:"#F65680"}}>
        <h2 className='bold'>ML Based Comprehensive Application to Enhance Soft Skills</h2>
        <h4>Flutter,ML,Firebase</h4>
        <p>Final Year BE project</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/BE-Major-Project-Sem-VII">Github</a>
      </div>

      <div className="pro" style={{backgroundColor:"#563BC1"}}>
        <h2 className='bold'>Youtube Downloader</h2>
        <h4>HTML,CSS,JavaScript</h4>
        <p>Download Youtube Music on system</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/YT-downloader">Github</a>
      </div>
      <div className="pro" style={{backgroundColor:"#21A0B1"}}>
        <h2 className='bold'>Multipurpose Calculator</h2>
        <h4>HTML,CSS,JavaScript</h4>
        <p>Hosted on : netlify</p>
        <a target='_blank' className='linktoview' href="https://calculatorbysourav.netlify.app/">Live Demo</a>
      </div>
      <div className="pro" style={{backgroundColor:"#F65680"}}>
        <h2 className='bold'>Password Genrated</h2>
        <h4>HTML,CSS,JavaScript</h4>
        <p>Hosted on : Firebox Add-ons</p>
        <a target='_blank' className='linktoview' href="https://addons.mozilla.org/en-US/firefox/addon/sj-s-password-generator/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">Live Demo</a>
      </div>
    </div>

    <div class="col-sm">
    <div className="pro" style={{backgroundColor:"#C15E2C"}}>
        <h2 className='bold'>Synthaize</h2>
        <h4>React js , API</h4>
        <p>AI which can give solution to any problem</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/Synthaize">Github</a>
        {" "}
        <a target='_blank' className='linktoview live' href="https://synthaize.netlify.app/">Live Demo</a>
      </div>
      <div className="pro" style={{backgroundColor:"#F65680"}}>
        <h2 className='bold'>WorkPilot</h2>
        <h4>React.js,Node.js,Express.js,Mysql</h4>
        <p>WorkPilot is HR Employee management tool</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/WorkPilot">Github</a>
      </div>
    <div className="pro" style={{backgroundColor:"#C15E2C"}}>
        <h2 className='bold'>Twitter Bot</h2>
        <h4>Python</h4>
        <p>Twitter bot which tweet automatically</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/twitterbot">Github</a>
      </div>
      <div className="pro" style={{backgroundColor:"#563BC1"}}>
        <h2 className='bold'>Youtube Downloader</h2>
        <h4>HTML,CSS,JavaScript</h4>
        <p>Download Youtube Music on system</p>
        <a target='_blank' className='linktoview' href="https://github.com/SouravSunilJoshi/YT-downloader">Github</a>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Projects
