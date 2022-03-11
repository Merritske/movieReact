import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

function Card(props) {

    useEffect(()=>{
        AOS.init()
    },[])


    return (
        <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
        <div data-aos={props.aos} data-aos-offset={props.offset} data-aos-easing="ease-in"
        data-aos-duration="500"
        className="card p-0 overflow-hidden h-100 shadow" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>

            </div>
        </div>
        </div>
    )
}

export default Card