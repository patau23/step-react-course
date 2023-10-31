function Modal({ isShown, children, closeModal }) {
  if (!isShown) return <></>;
  return (
    <div className="modal" onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <button onClick={closeModal}>close</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;