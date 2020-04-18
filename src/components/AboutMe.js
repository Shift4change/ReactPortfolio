import React from "react";
import foodfinder from "./assets/foodfinder.png"
import workout from "./assets/workout.png"
import note from "./assets/note.png"
import team from "./assets/note.png"
import collab from "./assets/collab.jpg"
import "./style.css"
import solve1 from "./assets/solve1.png"


export default function AboutMe() {
    return (
        <div>
            <div style={{
                backgroundColor: "gray",
                color: "white",
              
            }} id="ab" className="hero hero-md bg-primary">
                <div  className="hero-body "></div>
                <h1 style={{textAlign:"center"}}>Freelance Web Developer based in Philadelphia, Pennsylvania .  </h1>
                <p style={{textAlign:"center"}}> I  develop custom functional Websites for small businesses using a diverse set of skills, ranging from HTML + CSS + JavaScript to MongoDb.</p>

            </div>

            <div id="cont" className="column col-4 col-xs-12">
                <div className="card">
                    <div className="card-image">
                        <img src={foodfinder} class="img-responsive" />
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">Food finder</div>
                        <div className="card-subtitle text-gray">Search for food around your area</div>
                    </div>

                    <div className="card-footer">
                        <a href="https://ethanl150.github.io/FoodFinder/" target="_blank" style={{ margin: "5px" }} className="btn btn-primary">Deployed</a>
                        <a href="https://github.com/Shift4change/FoodFinder" target="_blank" style={{ marginLeft: "10px" }} className="btn btn-secondary">Repo</a>
                        <div className="card-subtitle text-gray" style={{ float: "right", marginTop: "9px" }}>  Group Project  </div>
                    </div>

                </div>
            </div>
            <div id="cont"  className="column col-4 col-xs-12">
                <div  className="card">
                    <div className="card-image">
                        <img src={workout} class="img-responsive" />
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">Fitness Tracker</div>
                        <div className="card-subtitle text-gray">This application that allows the user to keep track view and create daily workouts</div>
                    </div>

                    <div className="card-footer">
                        <a href="https://dry-coast-80362.herokuapp.com/" target="_blank" style={{ margin: "5px" }} className="btn btn-primary">Deployed</a>
                        <a href="https://github.com/Shift4change/WorkoutTracker" target="_blank" style={{ marginLeft: "10px" }} className="btn btn-secondary">Repo</a>
                        <div className="card-subtitle text-gray" style={{ float: "right", marginTop: "9px" }}>  Solo Project  </div>
                    </div>

                </div>
            </div>

         
            <div id="cont"  className="column col-4 col-xs-12">
                <div  className="card">
                    <div className="card-image">
                        <img src={note} class="img-responsive" />
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">Note-Taker</div>
                        <div className="card-subtitle text-gray">Take notes save, view and delete them</div>
                    </div>

                    <div className="card-footer">
                        <a href="https://sleepy-beyond-77575.herokuapp.com/" target="_blank" style={{ margin: "5px" }} className="btn btn-primary">Deployed</a>
                        <a href="https://github.com/Shift4change/Note-Taker" target="_blank" style={{ marginLeft: "10px" }} className="btn btn-secondary">Repo</a>
                        <div className="card-subtitle text-gray" style={{ float: "right", marginTop: "9px" }}>  Solo Project  </div>
                    </div>

                </div>
            </div>


            <div id="cont"  className="column col-4 col-xs-12">
                <div  className="card">
                    <div className="card-image">
                        <img src={collab} class="img-responsive" />
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">CollabHub</div>
                        <div className="card-subtitle text-gray">This is an application that connects professionals with similar interests and skill sets so that they can work together,
                         discover new opportunities and grow their network.</div>
                    </div>

                    <div className="card-footer">
                        <a href="https://collab-hub.herokuapp.com/" target="_blank" style={{ margin: "5px" }} className="btn btn-primary">Deployed</a>
                        <a href="https://github.com/Shift4change/collabHub" target="_blank" style={{ marginLeft: "10px" }} className="btn btn-secondary">Repo</a>
                        <div className="card-subtitle text-gray" style={{ float: "right", marginTop: "9px" }}>  Solo Project  </div>
                    </div>

                </div>
            </div>

            <div id="outer"  className="column col-4 col-xs-12">
                <div id="inner" className="card">
                    <div className="card-image">
                        <img src={solve1} class="img-responsive" />
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">SolveStaking</div>
                        <div className="card-subtitle text-gray">Learn about decentralization by participating! We are bringing awareness about cryptocurrencies and offer a Staking service on the Cardano blockchain.  </div>
                    </div>

                    <div className="card-footer">
                        <a href="https://solvestaking.herokuapp.com/" target="_blank" style={{ margin: "5px" }} className="btn btn-primary">Deployed</a>
                        <a href="https://github.com/Shift4change/honey.stake" target="_blank" style={{ marginLeft: "10px" }} className="btn btn-secondary">Repo</a>
                        <div className="card-subtitle text-gray" style={{ float: "right", marginTop: "9px" }}> Group Project  </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
