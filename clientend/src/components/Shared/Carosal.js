import React, { useState } from 'react'

const Carosal = () => {
    const [active, setActive] = useState(1)

    const handleNextCarosal = (e) => {
        e.preventDefault()
        if (active === 3) {
            setActive(1)
        } else {
            setActive(active + 1)
        }
    }

    const handlePrevCarosal = (e) => {
        e.preventDefault()
        if (active === 1) {
            setActive(3)
        } else {
            setActive(active - 1)
        }
    }
    return (
        <div>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ objectFit: "contain" }}>
                <div className="carousel-inner" style={{ width: "100%", height: "548px" }}>
                    <div class="carousel-caption" style={{ zIndex: "10" }}>
                        <form class=" d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
                        </form>
                    </div>
                    <div className={`carousel-item  ${active === 1 ? 'active' : ''}`}>
                        <img className="d-block w-100 " src="https://source.unsplash.com/random/700×600/?burger" style={{ filter: "brightness(0.5)" }} alt="First slide" />
                    </div>
                    <div className={`carousel-item  ${active === 2 ? 'active' : ''}`}>
                        <img className="d-block w-100" src="https://source.unsplash.com/random/700×600/?piza" alt="Second slide" style={{ filter: "brightness(0.5)" }} />
                    </div>
                    <div className={`carousel-item  ${active === 3 ? 'active' : ''}`}>
                        <img className="d-block w-100" src="https://source.unsplash.com/random/700×600/?coffee" alt="Third slide" style={{ filter: "brightness(0.5)" }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="." role="button" data-slide="prev" onClick={handlePrevCarosal}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="." role="button" data-slide="next" onClick={handleNextCarosal}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >
    )
}

export default Carosal