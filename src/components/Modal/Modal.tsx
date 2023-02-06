import './style.scss'
import Vector from "../../assets/images/vector.svg"
import { IModal } from "../../interfaces/interfaces"
import axios from "axios"
import { useFormik } from "formik"
import { useContext } from 'react'
import { HomeContext } from '../../contexts/contexts'


const Modal = () => {
    const { modalIsOpen, setIsOpen } = useContext(HomeContext)
    const CloseModal = () => {
        setIsOpen(false)
    }

    const overflowHidden = `
    body {
        overflow-y: hidden;
    }
`
    const overflowAuto = `
body {
    overflow-y: auto;
}
`
    const formik = useFormik({
        initialValues: {
            url: '',
            nome: '',
            categoria: '',
            sobre: '',
        },
        onSubmit: (values) => {
            axios.post("https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes", values)
            alert('Restaurante cadastrado com sucesso!')
        },
        validate: (values) => {
            const errors: { url?: string, nome?: string, categoria?: string, sobre?: string } = {}
            if (values.sobre.length > 50) {
                errors.sobre = "Limite de caracteres ultrapassado!"
            }

            return errors

        }
    })

    return (
        <>
            {modalIsOpen ? (
                <div className='modalContainer'>
                    <style>{overflowHidden}</style>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="head">
                            <h2 className="title">Cadastrar Restaurante</h2>
                            <span onClick={CloseModal}><img src={Vector} className="btnExit" /></span>

                        </div>

                        <div className="leftDiv formDiv">
                            <div className="formItem">
                                <label htmlFor="">Nome:</label>
                                <input type="text" name="nome" onChange={formik.handleChange} value={formik.values.nome} required />
                                {formik.errors.nome}
                            </div>
                            <div className="formItem">
                                <label htmlFor="">Categoria:</label>
                                <input type="text" name="categoria" onChange={formik.handleChange} value={formik.values.categoria} required />
                                {formik.errors.categoria}
                            </div>
                            <div className="formItem">
                                <label htmlFor="">Url do logo:</label>
                                <input type="text" name="url" onChange={formik.handleChange} value={formik.values.url} required />
                                {formik.errors.url}
                            </div>
                        </div>

                        <div className="rightDiv formDiv">
                            <div className="formItem">
                                <label htmlFor="">Sobre:</label>
                                <textarea name="sobre" onChange={formik.handleChange} value={formik.values.sobre} required></textarea>
                                {formik.errors.sobre}
                            </div>

                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>) : <style>{overflowAuto}</style>}
        </>
    )

}

export default Modal