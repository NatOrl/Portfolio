import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import "./Experience.css";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerPoint = document.getElementById('experience').offsetTop - window.innerHeight / 2;

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="experience" className={`experience ${isVisible ? 'visible' : ''}`}>
      <div className="title-box d-flex justify-content-center my-5">
        <h1 className='title-experience text-white'>EXPERIENCE</h1>
      </div>
      <div className="container py-5">
        <div className="main-timeline-4 text-white">
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-brain fa-2x mb-3"></i>
                <h4 className='text-white'>Feb 2019 - Present</h4>
                <p className="small text-white-50 mb-4">Receptionist - Meritum Verus Sp. z o.o | Poznań</p>
                <p className='text-white' >Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-camera fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2021 - May 2021</h4>
                <p className="small text-white-50 mb-4">Apprenticeships - University of Adam Mickiewicz | Poznań</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-campground fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2020 -Feb 2020</h4>
                <p className="small text-white-50 mb-4">Animator - Housing Association Grunwald" | Poznań</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-sun fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2020 -Feb 2020</h4>
                <p className="small text-white-50 mb-4">Lorem ipsum dolor sit amet.</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-palette fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2020 -Feb 2020</h4>
                <p className="small text-white-50 mb-4">Lorem ipsum dolor sit amet.</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-laugh-beam fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2020 -Feb 2020</h4>
                <p className="small text-white-50 mb-4">Lorem ipsum dolor sit amet.</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-pizza-slice fa-2x mb-3"></i>
                <h4 className='text-white'>Jan 2020 -Feb 2020</h4>
                <p className="small text-white-50 mb-4">Lorem ipsum dolor sit amet.</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Experience
