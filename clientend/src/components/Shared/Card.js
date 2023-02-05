import React from 'react'

const Card = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div className='m-3'>
                        <div className="card mt-3" style={{ width: "18rem", maxHeight: "350px" }}>
                            <img src="https://source.unsplash.com/random/100×100/?burger" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on th.</p>
                                <div className='container w-100'>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        {Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            )
                                        })}
                                    </select>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        <option value={'Half'}>Half</option>
                                        <option value={'Full'}>Full</option>
                                    </select>
                                    <div className='d-inline h-100'>
                                        Total Price 100
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div className='m-3'>
                        <div className="card mt-3" style={{ width: "18rem", maxHeight: "350px" }}>
                            <img src="https://source.unsplash.com/random/100×100/?sandwich" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on th.</p>
                                <div className='container w-100'>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        {Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            )
                                        })}
                                    </select>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        <option value={'Half'}>Half</option>
                                        <option value={'Full'}>Full</option>
                                    </select>
                                    <div className='d-inline h-100'>
                                        Total Price 100
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">

                    <div className='m-3'>
                        <div className="card mt-3" style={{ width: "18rem", maxHeight: "350px" }}>
                            <img src="https://source.unsplash.com/random/100×100/?pasta" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on th.</p>
                                <div className='container w-100'>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        {Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            )
                                        })}
                                    </select>
                                    <select className='m-2 h-100  bg-success rounded'>
                                        <option value={'Half'}>Half</option>
                                        <option value={'Full'}>Full</option>
                                    </select>
                                    <div className='d-inline h-100'>
                                        Total Price 100
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
