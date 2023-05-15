import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='section__about'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        assumenda nam voluptas ab magnam doloremque dolore sit quidem harum
        quisquam eius quo nesciunt amet consectetur iste, necessitatibus illum
        repudiandae fugit ut. A culpa eius est nam, dignissimos at velit
        excepturi nobis molestias minus quae officia voluptas eos quam non
        repellendus expedita consectetur sapiente. Consectetur velit est ut
        reprehenderit? Fugit sapiente nihil in expedita fugiat, ut voluptatem
        deleniti eum. Delectus odio laborum quos. Est praesentium eaque
        asperiores molestiae eos beatae enim, modi esse ullam aliquid delectus
        explicabo totam repellendus? Aliquid, enim!
      </p>
      <Link className='single__btn' to='/'>
        Back home
      </Link>
    </section>
  )
}

export default About
