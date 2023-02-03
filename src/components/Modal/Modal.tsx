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
            sobre: '',
        },
        onSubmit: (values) => {
            axios.post("https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes", values)
        },
        validate: (values) => {
            const errors: {url?: string, nome?: string, categoria?: string, sobre?: string} = {}

            if(!values.url){
                errors.url = "Campo vazio!"
            }

            if(!values.nome){
                errors.nome = "Campo vazio!"
            }

            if(!values.categoria){
                errors.categoria = "Campo vazio!"
            }

            if(!values.sobre){
                errors.sobre = "Campo vazio!"
            }else if(values.sobre.length > 50){
                errors.sobre = "Limite de caracteres ultrapassado!"
            }


            return errors

        }
    })

    if (props.isOpen) {
        return (
            <form className="modalContainer" onSubmit={formik.handleSubmit}>
                <div className="modalCard">
                    <p><img src={Vector} className="btnExit" /></p>
                    <h2 className="title">Cadastrar Restaurante</h2>
                    <label htmlFor="">Nome:</label>
                    <br></br>
                    <input type="text" name="nome" onChange={formik.handleChange} value={formik.values.nome}/>
                    {formik.errors.nome}
                    <br></br>
                    <label htmlFor="">Categoria:</label>
                    <br></br>
                    <input type="text" name="categoria" onChange={formik.handleChange} value={formik.values.categoria}/>
                    {formik.errors.categoria}
                    <br></br>
                    <label htmlFor="">Url do logo:</label>
                    <br></br>
                    <input type="text" name="url" onChange={formik.handleChange} value={formik.values.url}/>
                    {formik.errors.url}
                    <br></br>
                    <label htmlFor="">Sobre:</label>
                    <br></br>
                    <textarea name="sobre" onChange={formik.handleChange} value={formik.values.sobre}></textarea>
                    {formik.errors.sobre}
                    <br></br> 
                    <button type="submit">Cadastrar</button>               
                </div>
            </form>
        )
    }

    return null

}

export default Modal