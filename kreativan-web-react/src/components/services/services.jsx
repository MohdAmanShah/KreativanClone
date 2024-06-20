import webdev from '../../assets/webdev.jpg';
import vector from '../../assets/vector-01-01-scaled.jpg';
import android from '../../assets/Android-01-scaled.jpg';
import google from '../../assets/google-01-scaled.jpg';
import ios from '../../assets/ios-01-1-scaled.jpg';
import seo from '../../assets/seo-01-scaled.jpg';
import training from '../../assets/training-01-scaled.jpg';
import intro from '../../assets/php_11zon.jpg';
import './services.css';
function servicesgiven() {
    return (

        <section className="service">
            <div className="service wrapper">

                <div className="intro">
                    <div>
                        <div className="image">
                            <img src={intro} alt="Work" />
                        </div>
                    </div>
                    <div className="para">
                        <div className="para1">
                            <p>At Kreativan Technologies, we help small & midsize business enterprises across the globe,
                                get
                                the
                                desired ROI through our bespoke web and allied services. The whole idea is to reach out
                                to a
                                wider
                                audience locally or globally, and convert prospects to new customers. The bottomline is
                                to
                                increase
                                conversion rate, visitor footfalls, traffic, sales, revenue, leads and new subscribers
                                for
                                any
                                organization, across the board.</p>
                        </div>
                        <div className="para2">
                            As the <strong>best digital marketing agency</strong>, we’ve mastered the art of website
                            design,
                            development
                            and
                            optimization; thanks to our highly professional team of qualified web designers &
                            developers,
                            web
                            analysts, SEO strategists, IT experts and digital marketers that leave no stone unturned in
                            bolstering a
                            sites overall performance
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="services-wrapper">
                        <div className="image-wrapper service">
                            <a href="#"><img src={webdev} alt="Web development" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={vector} alt="Graphic design" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={android} alt="Android app development" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={google} alt="Google Ads Marketing" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={ios} alt="IOS Development" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={seo} alt="SEO marketers" /></a>
                        </div>
                        <div className="image-wrapper service">
                            <a href="#"><img src={training} alt="Training" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default servicesgiven;