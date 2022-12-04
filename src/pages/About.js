import image from '../../src/media/profile.jpeg'

function About() {
    return (
        <section class="page-section" id="about">
        <h1>About Me</h1>
        <div>
          <img src={image} alt= "pic of myself"/>
          <p>
          My name is Clayton Snell. I was born and riased in the Salt Lake Valley of Utah and have lived there for the majority of my life. Though I still own property in Utah, I am currently living with my wife and kids in Maryland. I haveattended a coding bootcamp offered by the University of Utah to change careers and directions in my lifes path.
          </p>
          <p>
            Let me holla at ya partner, spit this game up in ya ear for a minitue. Quit comlpaining bout' how you can't stand it becuase you ain't got it. Got what it takes but not enough to get started,
            I hope you get the message, no its not a test this, just me hollerin' legit they can't arrest me or bust me. I'm still hungry, I want some more stuff.
            Get fat and watch my whole crew blow up. So get yours and buy my new album peep the game and don't be like calvin. 
          </p>
        </div>
      </section>
    )
}


export default About