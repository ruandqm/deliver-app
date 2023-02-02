import "../Modal/style.scss"
import Vector from "../../assets/images/vector.svg"
import { IModal } from "../../interfaces"
import axios from "axios"
import { useFormik } from "formik"

const Modal: React.FC<IModal> = (props) => {    

    const formik = useFormik({
        initialValues: {
            url: '',
            nome: '',
            categoria: '',
            avaliacao: '',
            sobre: '',
        },
        onSubmit: (values) => {
            axios.post("https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes", values)
        }
    })

    if (props.isOpen) {
        return (
            <form className="modalContainer" onSubmit={formik.handleSubmit}>
                <div className="modalCard">
                    <p><img src={Vector} className="exit" /></p>
                    <h2 className="title">Cadastrar Restaurante</h2>
                    <label htmlFor="">Nome:</label>
                    <br></br>
                    <input type="text" name="nome" onChange={formik.handleChange} value={formik.values.nome}/>
                    <br></br>
                    <label htmlFor="">Categoria:</label>
                    <br></br>
                    <input type="text" name="categoria" onChange={formik.handleChange} value={formik.values.categoria}/>
                    <br></br>
                    <label htmlFor="">URL:</label>
                    <br></br>
                    <input type="text" name="url" onChange={formik.handleChange} value={formik.values.url}/>
                    <br></br>
                    <label htmlFor="">Sobre:</label>
                    <br></br>
                    <textarea name="sobre" onChange={formik.handleChange} value={formik.values.sobre}></textarea>
                    <br></br> 
                    <button type="submit">Cadastrar</button>               
                </div>
            </form>
        )
    }

    return null

}

export default Modal