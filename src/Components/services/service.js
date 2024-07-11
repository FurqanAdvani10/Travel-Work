import React from 'react'
import './service.css'

function Services() {
    return (
        <div className='service   section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                        <div className='service-heading'>
                            <h4>
                                <span>-</span> SERVICES
                            </h4>
                            <h1>
                                Your Spiritual Voyage
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='service-card-box'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                            <div className='service-card'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Umrah</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                    <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                        <div className='service-card hajj'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Hajj</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                    <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                        <div className='service-card tour'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Tour</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                    <i class="ri-arrow-right-up-line"></i>
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

export default Services