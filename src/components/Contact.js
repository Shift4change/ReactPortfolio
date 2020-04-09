import React from "react"
import resume from "./assets/resume.pdf" 


export default function Contact() {
    return (
     
<div id="contact" class="card">
<div className="container">
            <div className="row">
                <div className="col-md-12 text justify-content-center">
                    <div className="contactcontainer">
                        <h1>Contact</h1>
                        <br />
                        <form action="#">
                            Name: Fodrovics Paul-Eduard <br />
                            <br />
                    Email: <a href="https://mail.google.com/mail/u/0/#inbox">Pefodrovics@gmail</a>
                            <br />
                            <br />
                    GitHUb:<a  href=" https://github.com/Shift4change" target="_blank"><i style={{fontSize:"35px", marginLeft:"15px"}} className="fab fa-github"></i></a> <br />
                            <br />

                                        LinkedIn<a href="https://www.linkedin.com/in/paul-eduard-fodrovics-bba8331a3/" target="_blank"><i style={{fontSize:"35px", marginLeft:"15px"}} className="fab fa-linkedin"></i></a>
                            <br />
                            <br />
                            <a href={resume} target="_blank"> My Resume </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  <div class="card-footer">
  
  </div>
</div>

       
      
    )
}





