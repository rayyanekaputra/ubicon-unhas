
import Image from 'next/image'
import styles from '@styles/home.css'
import bg from '@assets/img_hero_overlay.png'
import { RendererResearch } from '@components/research/rendererResearch'
import { RendererNews } from '@components/news/rendererNews'

export default function Home() {
  return (
    <div>
      <section className="hero" style={{
        //pake back-quote ` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}>
        <div className='logo-ubicon-container'>
          <div className='logo-ubicon'>
            <Image 
            src="/logo512.png"
            // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
            width = {80}
            height = {80}
            alt='Logo UBICON'
              ></Image>
          </div>

        </div>
        
        <h1>Ubicon Lab</h1>
        <h2>Ubiquitous Computing & Networking Lab.</h2>
        <p>@HASANUDDIN UNIVERSITY </p>
      </section>

      <div className="carousel-running-container">
        {/* infinite slider, duplikat supaya seamless */}
        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
          <li>
            <div className="carousel-img"></div>
          </li>
        </ul>
      </div>

      <section className="research-type">
        <h1>Connecting Devices with Our Research</h1>
        <p className="p1">
          Our lab have multiple concentration that surrounds internet
          engineering
        </p>

        <ul className="list-research-wrapper">
          <RendererResearch />
        </ul>
      </section>

      <section className="our-people">
        <div className="our-people-container">
          <h1>Our People</h1>
          <button >
            <p>Read more</p>
          </button>
        </div>
        <div className="preview-img-wrapper">
          <div className="preview-img" id="ubicon-1"></div>
          <div className="preview-img" id="ubicon-2"></div>
          <div className="preview-img" id="head-of-ubicon"></div>
          <div className="preview-img" id="ubicon-3"></div>
          <div className="preview-img" id="ubicon-4"></div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-header">
          <div className="news-header-left">
            <h1>What's Up?</h1>
            <p className="p1">
              Read our latest news and stories in our blog!
            </p>  
          </div>
          
          <button>
            <p>Read more</p>
          </button>
        </div>
        <div className="news-content-container">
          {/* TODO: bikinkan renderer function untuk newsnya, usahakan pake fetch API */}
          <ul className="news-content-renderer">
            <RendererNews/>
          </ul>
        </div>
      </section>
    </div>
  )
}
