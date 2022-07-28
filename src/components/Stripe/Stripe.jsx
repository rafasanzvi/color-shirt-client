import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Card, Button, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { MessageContext } from "../../context/userMessage.context"

const stripePromise = loadStripe("pk_test_51LQASvFt66ClOg5rS1UO0NjCGmRe1DyvnwJsimoKzFWQM13XPkGiZvEwAR9jiRHogO4PMVgHLDjTuOmCxAnmS9Rl00PuJ59rR1")

const CheckoutForm = ({ setSuscriptionModal, closeModal }) => {

    const { setShowMessage } = useContext(MessageContext)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    }

    const fireFinalActions = () => {
        setSuscriptionModal(false)
        setShowMessage({ show: true, title: 'Welcome to Policroma', text: 'Your new style is in progress' })
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} className="CreditCard">

            <CardElement className='form-control' />

            <Button onClick={fireFinalActions} variant="primary">Pay the subscription</Button>
        </form>)
}

const Stripe = ({ setSuscriptionModal }) => {

    const [showModal, setShowModal] = useState(true)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (

        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Suscription payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Elements stripe={stripePromise}>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <CheckoutForm setSuscriptionModal={setSuscriptionModal} closeModal={closeModal} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Elements>

            </Modal.Body>
        </Modal>
    )
}



export default Stripe