import React, {useRef} from 'react'
import { useObserver } from '../../../../../hooks/useObserver';
import "./Gallery.css"

const Gallery = () => {
    const topRef = useRef();
    const bottomRef = useRef();
    const bottomColRef = useRef();
    const {inView} = useObserver(topRef)
     const {inView:inView2} = useObserver(bottomRef)
     const {inView:inView3} = useObserver(bottomColRef)
   
  return (
    <div className="gallery-parent">
        <div ref={topRef} className="top-gallery-row">
            <div className="top-gallery-col mobile-col">
            <picture>
                <source media="(min-width:1050px)" srcSet="assets/desktop/image-grid-1.jpg"/>
                <source media="(min-width:450px)" srcSet="assets/tablet/image-grid-1.jpg"/>
                <img className="mobile-img" src="assets/mobile/image-grid-1.jpg" alt="img"/>
            </picture>
            </div>
            <div className="top-gallery-col top-gallery-content-col">
                <div className="top-gallery-content">
                <h3 style={{"--i":".25s"}} className={inView ? "uppercase relative gallery-top-header slide-in-dash" : "uppercase gallery-top-header slide-out"}>Your day at the gallery.</h3>
                <p style={{"--i":".5s"}} className={inView ? "relative gallery-blurb slide-in-dash" : "relative gallery-blurb slide-out"}>Wander through our
    distinct collections and find new insights about our artists. Dive into the
    details of their creative process.</p>
    </div>
            </div>
            <div className="top-gallery-col desktop-col">
            <picture>
                <source media="(min-width:1050px)" srcSet="assets/desktop/image-grid-1.jpg"/>
                <source media="(min-width:650px)" srcSet="assets/tablet/image-grid-1.jpg"/>
                <img className={inView ? "gallery-img clearblur" : "gallery-img"} src="assets/mobile/image-grid-1.jpg" alt="img"/>
            </picture>
            </div>
        </div>
        <div ref={bottomRef} className="bottom-gallery">
            <div className="bottom-left-col">
            <picture>
                <source media="(min-width:1050px)" srcSet="assets/desktop/image-grid-2.jpg"/>
                <source media="(min-width:650px)" srcSet="assets/tablet/image-grid-2.jpg"/>
                <img className={inView2 ? "bottom-gallery-img scaleup" : "bottom-gallery-img"} src="assets/mobile/image-grid-2.jpg" alt="img"/>
            </picture>
            </div>
            <div className="bottom-right-col">
                <div className="bottom-img-row">
            <picture>
                <source media="(min-width:1050px)" srcSet="assets/desktop/image-grid-3.jpg"/>
                <source media="(min-width:650px)" srcSet="assets/tablet/image-grid-3.jpg"/>
                <img className={inView2 ? "bottom-small-gallery-img pancake" :"bottom-small-gallery-img"}  src="assets/mobile/image-grid-3.jpg" alt="img"/>
            </picture>
                </div>
                <div ref={bottomColRef} className={inView3 ? "bottom-col-row reverse-colors" : "bottom-col-row"}>
                    <div className="bottom-content">
                        <h3 className="uppercase gallery-bottom-header">Come & be inspired</h3>
                        <p>We're excited to welcome you to our gallery and see how our collections influence you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery