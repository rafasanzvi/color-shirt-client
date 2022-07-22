/* import { useEffect } from "react" */
import { useParams } from "react-router-dom"
import { useState } from "react"

const EditShirtForm = () => {

    const [editShirt, setEditShirt] = useState({
        name: '',
        origin: '',
        style: '',
        colors: '',
        images: '',
        fabric: '',
        sizes: '',
        description: ''
    })

    const { shirt_id } = useParams()

    return (
        <h1>dfsdfs</h1>
    )


}


export default EditShirtForm