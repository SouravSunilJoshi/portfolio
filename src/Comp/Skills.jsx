import React from 'react'

const Skills = () => {
  return (
    <>
<h1 className='titlen'>Skills</h1>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h4 className='skills python'>Python (85%)</h4>
      <h4 className='skills js'>JavaScript (70%)</h4>
      <h4 className='skills rjs'>reactjs (40%)</h4>

    </div>
    <div class="col-md-6">
      <h4 className='skills sql'>SQL (65%)</h4>
      <h4 className='skills php'>Node.js (40%)</h4>
      <h4 className='skills web'>HTML , CSS (90%)</h4>
    </div>
  </div>
</div>
<br />
<br />
<div className="socials">
            <a target='_blank' href="https://github.com/SouravSunilJoshi"><img src="../src/assets/github.png" alt="" /></a>
            <a target='_blank' href="https://in.linkedin.com/in/sourav-joshi-b99aaa1b0"><img src="../src/assets/linkedin.png" alt="" /></a>
            <a href="mailto: souravjoshi2410@gmail.com"><img src="../src/assets/mail.png" alt="" /></a>
        </div>
    </>
  )
}

export default Skills
