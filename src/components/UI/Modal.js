
import classes from './Modal.module.css';
//import ReactDOM from 'react-dom/client';
import reactDom from 'react-dom';//=> current format

const Backdrop =  props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}


 const ModalOverlay =  props =>{
    return <div className={classes.modal}>
        <div className={classes.modal}>{props.children}</div>
    </div>
 }
const portalElement = document.getElementById('overlays')

const Modal = props =>{
    return <>
    {reactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
    {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
    
 }
 export default Modal