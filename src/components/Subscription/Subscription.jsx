import usersService from "../../services/user.services"
import { useState } from "react"
import { useEffect } from "react"


const Subscription = () => {

    const [suscription, setSuscription] = useState([])

    useEffect(() => {
        loadSubscription()
    }, [])

    const loadSubscription = () => {
        usersService
            .addToSubscribed()
            .then(({ data }) => {
                setSuscription(data)
            })
            .catch(err => console.error(err))
    }

    const subscribed = () => {
        usersService
            .addToSubscribed()
            .then(() => {
                loadSubscription()
            })
            .catch(err => console.error(err))
    }

    return (
        <h1>Soy la Subscription</h1>
    )

}


export default Subscription