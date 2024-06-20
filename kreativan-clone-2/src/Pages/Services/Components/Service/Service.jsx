import './Service.css'


function Service({ service }) {
    return (
        <div className="ServiceWrapper" >
            <div>
                <h1>
                    {service.title}
                </h1>
                <p>
                    {service.content}
                </p>
            </div>
            <div>
                <img src={service.img} alt="something" />
            </div>
        </div>
    );
}
export default Service;