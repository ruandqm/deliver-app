import { HomeContext } from "../../contexts/contexts"
import { useContext } from "react"


const ModalMarcos = () => {
    const { modalIsOpenMarcos, setIsOpenModal } = useContext(HomeContext)
    const CloseModal = () => {
        setIsOpenModal(false)
    }

    return (

        <>
            {modalIsOpenMarcos ? (<div className="modalContainer"> <span>MODAL ABERTO</span>
            </div>) : null}

        </>
    )
}

export default ModalMarcos





