import image from '../../src/media/profile.png'

const styles = {
  card: {
    width:'450px',
    height:'450px'
  },
  aside: {
    flex: 2,
    backgroundColor: '#b9c6ae',
    padding: 20,
  },
  section: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap'
  },
}

function About() {
    return (
      <body style={styles.section}   class="page-section" id="about" >
           <header>
    <h1>About Me</h1>
    <img style={styles.card} src={image} alt= "pic of myself"/>
  </header>
        <aside style={styles.aside}>
          <p>
          My name is Clayton Snell. I was born and riased in the Salt Lake City, Utah and have lived there for the majority of my life. I am currently living with my wife and kids in Maryland.
          I have recently completed a coding bootcamp with the University of Utah, in order to change my career and hopefully life's path.
          </p>
          <p>
            I am beyond excited to see how far I can go with coding. I have been taking after course work and will continue to add to my github repositories.
            I learned a ton in the coding bootcamp which consisted of knowledge in HTML, CSS, JavaScript, node.js, using/building API's,
            Object Oreiented Programing, Express, SQL, noSQL, ORM, MVC, PWA, React.js, MERN stack, State. I have studied Python, AWS, C#, and Java using continuation
            curriculum and internet resouces. I continually strive to learn more and more of the field. I feel this is a move I should have made years ago and have
            truely immersed myself in becoming an expert. I have become profiecient enough to realize how much more there is to learn. I feel any aspect in life
            where people are passoinate, there is a point in the learning curve where you begin to see your knowlege is the tip of an iceburg. Once you get that perspective
            a decision is made to step off or dig deeper. I've got a shovel and am ready to dig as deep as I need to make this work.
          
          </p>
        </aside>
      </body>
    )
}


export default About