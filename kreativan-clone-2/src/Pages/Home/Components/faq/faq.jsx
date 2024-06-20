import "./faq.css"
import Image from '../../../../../public/videothumbnail.jpg'

function Faq() {

    function handleevent(e) {
        console.log(e.target.closest('div'));
        console.log(e.target.closest('div').firstElementChild);
        e.target.closest('div').firstElementChild.classList.toggle('arrowmoved');
        e.target.closest('div').nextElementSibling.classList.toggle('showed');
    }

    return (
        <section className="faq">
            <div className="wrapper">

                <div className="left faqs">
                    <div className="wrapper">
                        <h3>
                            FAQ
                        </h3>
                        <div className="ques">
                            <div onClick={handleevent}>
                                <div className="iconcontainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor"
                                        className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </div>
                                <p>What skills should a web developer have?</p>
                            </div>
                            <article className="content">

                                <div>
                                    A web developer should have a strong understanding of the following skills:
                                </div>
                                <ul className="content list">
                                    <li>Front-end development: This includes languages like HTML, CSS, and
                                        JavaScript, as well as libraries and frameworks like React, Vue, and
                                        Angular. Front-end developers are responsible for the look, feel, and
                                        functionality of the website.
                                    </li>
                                    <li>
                                        Back-end development: This includes languages like Python, Java, PHP,
                                        and Ruby, as well as frameworks like Django, Spring, and Rails. Back-end
                                        developers are responsible for the server-side logic that powers the
                                        website, such as databases, user authentication, and e-commerce.
                                    </li>
                                    <li>
                                        Version control: Version control systems like Git and Mercurial are
                                        essential for tracking changes to code and collaborating with other
                                        developers.
                                    </li>
                                    <li>
                                        Debugging: Web developers need to be able to debug their code to find
                                        and fix errors.
                                    </li>
                                    <li>
                                        Problem-solving: Web developers need to be able to solve problems
                                        creatively and efficiently.
                                    </li>
                                </ul>

                                <p>
                                    Kreativan Technologies is a leading digital marketing and web development
                                    training company in India. They offer a variety of training programs for both
                                    beginners and experienced professionals. Kreativan Technologies’ training
                                    programs are designed to help you learn the skills you need to succeed in a
                                    career in web development.
                                </p>
                            </article>
                        </div>

                        <div className="ques">
                            <div onClick={handleevent}>
                                <div className="iconcontainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor"
                                        className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </div>
                                <p>
                                    Can I be a digital marketer and web developer?</p>
                            </div>
                            <article className="content">


                                <p>
                                    Yes, it is possible to be both a digital marketer and a web developer. In
                                    fact, many people find that these two roles complement each other well.
                                </p>
                                <p>
                                    Digital marketers are responsible for promoting and growing businesses
                                    online. They use a variety of channels, such as search engine optimization
                                    (SEO), social media marketing, and email marketing, to reach their target
                                    audiences.
                                </p>
                                <p>
                                    Web developers are responsible for building and maintaining websites. They
                                    use a variety of programming languages and tools to create websites that are
                                    both functional and visually appealing.
                                </p>
                            </article>
                        </div>

                        <div className="ques">
                            <div onClick={handleevent}>
                                <div className="iconcontainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor"
                                        className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </div>
                                <p>
                                    Is Digital Marketing a stable carrier?</p>
                            </div>
                            <article className="content">


                                <p>
                                    Yes, digital marketing is a stable career. The digital marketing industry is
                                    growing rapidly, and there is a high demand for skilled digital marketers.
                                    In fact, the Bureau of Labor Statistics projects that the employment of web
                                    developers and digital designers will grow 23% from 2020 to 2030, much
                                    faster than the average for all occupations.
                                </p>
                                <p>
                                    There are a number of reasons why digital marketing is a stable career
                                    choice. First, digital marketing is essential for businesses of all sizes.
                                    In today’s digital world, businesses need to have a strong online presence
                                    in order to reach their target audience and grow their business. This means
                                    that there is a high demand for digital marketers who can help businesses
                                    develop and implement effective digital marketing campaigns
                                </p>
                            </article>
                        </div>
                        <div className="ques">
                            <div onClick={handleevent}>
                                <div className="iconcontainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor"
                                        className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </div>
                                <p>
                                    How long do digital marketers have to work?</p>
                            </div>
                            <article className="content">
                                <p>
                                    Whether or not it is easy to get a job as a digital marketer depends on a
                                    number of factors, including your skills and experience, the job market in
                                    your area, and the company you are applying to.
                                </p>
                                <p>
                                    However, in general, the digital marketing industry is growing rapidly, and
                                    there is a high demand for skilled digital marketers. In fact, the Bureau of
                                    Labor Statistics projects that employment of web developers and digital
                                    designers will grow 23% from 2020 to 2030, much faster than the average for
                                    all occupations.
                                </p>
                                <p>
                                    This means that there are many opportunities for people to get jobs in
                                    digital marketing. However, it is important to have the necessary skills and
                                    experience in order to be competitive in the job market.
                                </p>
                            </article>
                        </div>

                    </div>
                </div>

                <div className="right video faqs">
                    <div className="video-container">
                        <img src={Image} alt="Video" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Faq;