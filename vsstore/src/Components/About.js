import React from 'react';


export default()=>(
    <div id="about" className="section wb">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="message-box">
                        <h2>About Nickie.</h2>
                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
                        <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <ul>
                            <li><b>Follow Me</b></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        </ul>


                    </div>
                </div>

                <div className="col-md-6">
                    <div className="right-box-pro wow fadeIn">
                        <img src={require("../images/about-1.png")} alt="" className="img-fluid img-rounded fat-ab" />
                    </div>
                </div>
            </div>
        </div>
    </div>

);
