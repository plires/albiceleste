import Slide from '@/components/home/Slide.jsx'
import Events from '@/components/home/Events.jsx'
import Cards from '@/components/home/Cards.jsx'

import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <Slide />
      <Events />
      <Cards />
    </section>
  )
}

export default Home
