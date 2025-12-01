import ReactDom from 'react-dom'

export default function Modal(props) {

    const { showExerciseDescription, handleCloseModal } = props
    const { name, description } = showExerciseDescription || {}

    return ReactDom.createPortal((
        <div className='modal-container'>
            <button className='modal-underlay' onClick={handleCloseModal} />
        </div>
    ),
        document.getElementById('portal')
    )

}