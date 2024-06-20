import './Services.css'
import { ServicesData } from './Assets/Ser.js'
import Service from './Components/Service/Service'
export default function ServicesPage() {


    function MapServices(_service, index) {
        return (
            <Service
                key={index}
                service={_service} />
        );

    }

    return (
        <div className="container">
            <div className="top">
                <h1>
                    Internet Marketing & Company Branding Solutions
                </h1>
                <p>
                    Let us shed light on some of our core web service deliverables in the field of SEO, SMM, SMO, email marketing and PPC, apart from our bespoke web design & development.
                </p>
            </div>
            <div className="serData">
                {ServicesData.map(MapServices)}
            </div>
        </div>
    )
}