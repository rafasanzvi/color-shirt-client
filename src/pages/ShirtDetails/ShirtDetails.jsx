import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import shirtsService from "../../services/shirt.services"


const ShirtDetails = () => {

    const [shirt, setShirt] = useState({})

    const { shirt_id } = useParams()

    useEffect(() => {

        shirtsService
            .getOneShirt(shirt_id)

            .then(({ data }) => {
                console.log(data)
                setShirt(data)
            })
            .catch(err => console.error(err))

    }, [])

    return (

        <Container>
            <h1>{shirt.name}</h1>
        </Container>

    )


}

export default ShirtDetails
