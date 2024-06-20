import "./about.css"
import Image from '../../../../../public/aboutme.jpg'
import { useEffect } from "react";


export function Stats() {

    useEffect(() => {
       
        const event = window.addEventListener("scroll",async (e) => {
            const container = document.querySelector(".stats");
            const containerBoundary = container.getBoundingClientRect();
            if (containerBoundary.y < window.innerHeight) {
                const stats = document.querySelectorAll('[data-value]');
                Array.from(stats).forEach(async stat => {
                    for (let i = 0; i <= stat.dataset['value']; ++i) {
                        stat.innerText = i;
                        await sleep(25);
                    }
                })
            }
        })
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },[]);


    return (
        <div className="stats">
            <div className="stat">
                <div className="amount" data-value="89">
                </div>
                <strong>
                    <p>Buisness Parteners</p>
                </strong>
            </div>
            <div className="stat">
                <div className="amount" data-value="130"></div>
                <strong>
                    <p>Finished Projects</p>
                </strong>
            </div>
            <div className="stat">
                <div className="amount" data-value="78"></div>
                <strong>
                    <p>Happy Clients
                    </p>
                </strong>
            </div>
            <div className="stat">
                <div className="amount" data-value="24"></div>
                <strong>
                    <p>Awards Winning</p>
                </strong>
            </div>
        </div>);
}

function About() {

    


    return (
        <section className="about-company">
            <div className="wrapper">
                <div>
                    <h2>
                        Among the Top Digital Marketing Companies in North India
                    </h2>
                </div>

                <div className="image-desp">
                    <div className="image">
                        <img src={Image} alt="About Us" />
                    </div>
                    <div className="desp">
                        <p>
                            It all starts with a project feasibility study, and thereafter a team is allocated with an
                            experienced project manager, looking into the critical aspects of software development,
                            testing
                            and final delivery. A custom software that looks into the needs of a client or business, and
                            streamlines the work processes, is what matters the most. Whether it is a highly responsive
                            mobile App development with the best-in-className UI/UX features or a standard company software,
                            it
                            must encompass all the aspects of product & service life-cycle, shopping cart features, and
                            other vital information, as specified by the client. Being the <strong>best digital
                                marketing
                                company</strong> in
                            Chandigarh, we deliver custom software & mobile application development solutions in an
                            affordable way.
                        </p>
                    </div>
                </div>
                <Stats/>

            </div>
        </section>
    );
}

export default About;