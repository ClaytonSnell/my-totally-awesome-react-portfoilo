import image from '../../src/media/profile.png'

const styles = {
  card: {
    width:'400px',
    height:'600px'
  },
  aside: {
    flex: 1,
    backgroundColor: '#b9c6ae',
    padding: 20
  },
  section: {
    flex: 3,
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap'
  },
}

function About() {
    return (
      <section style={styles.section} class="page-section" id="about" >
          <h1>About Me</h1>
          <img style={styles.card} src={image} alt= "pic of myself"/>
        <aside style={styles.aside}>
          <p>
          My name is Clayton Snell. I was born and riased in the Salt Lake Valley of Utah and have lived there for the majority of my life. Though my roots are in Utah, I am currently living with my wife and kids in Maryland. I completed a coding bootcamp offered by the University of Utah to change careers and directions in my life path.
          </p>
          <p>
            I am really excited to see how far I can go with coding. I have been taking after course work and will continue to add to my github repositories. I have learned so much in the coding bootcamp which consisted of basic knowledge of
            HTML, CSS, JavaScript, node.js, learned how to use and build API's, Object Oreiented Programing, Express, SQL, noSQL, ORM, MVC, PWA, React.js, MERN stack, State. Also studied after class Python.js, AWS, 
          </p>
        </aside>
      </section>
    )
}


export default About