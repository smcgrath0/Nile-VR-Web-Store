import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="mt-5 pt-4" style={{ backgroundColor: '#1A5D81' }}>
        <div className="footerContent text-light mb-4">
          <div className="social d-flex align-items-center ">
            <h3></h3>
            <div className="d-flex justify-content-around" style={{ width: '100%' }}>
              <h5 className="sociallink"><a href="https://www.linkedin.com/in/shane-mcgrath-014266179/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in sociallink"></i></a></h5>
              <h5 className="sociallink"><a href="https://www.shanemcgrath.live" target="_blank" rel="noopener noreferrer"><i className="fas fa-chalkboard sociallink"></i></a></h5>
              <h5 className="sociallink"><a href="https://github.com/smcgrath0/Nile-VR-Web-Store" target="_blank" rel="noopener noreferrer"><i className="fab fa-github sociallink"></i></a></h5>
            </div>
          </div>
          <div className="about">
            <h3>Contact</h3>
            <h5 className="sociallink"><i className="far fa-envelope"></i><a href="mailto:smcgrath7777@gmail.com" rel="noopener noreferrer" className="sociallink"> smcgrath7777@gmail.com</a></h5>
            <h5><i className="fas fa-phone"></i> +1 (949)-554-9515</h5>
            <h5></h5>
          </div>
        </div>

        <div className="d-flex justify-content-center pb-3 cr">
          <p className="m-0">Copyright &copy; 2019 Shane Mcgrath</p>
        </div>
      </div>
    );
  }
}
