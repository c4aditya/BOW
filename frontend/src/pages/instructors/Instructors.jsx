
import "./instructors.css"
function Instructors() {

    const ourInstructors = [
        {
            id: 1,
            name: "Roshan",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },

        {
            id: 2,
            name: "AS",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },

        {
            id: 3,
            name: "Ram",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },
    ]

    return (
        <div>
            <div className="main-image-our-instructors">
                {ourInstructors.map(({ id, name, image }) => (

                   <div>
                    <div className="image-our-instructors">
                        <img src={image} />


                        <div className="more-about-instructors">
                        <h1>{name}</h1>
                        </div>

                    </div>

                 


                        </div>




                ))}
            </div>

        </div>
    )
}

export default Instructors

