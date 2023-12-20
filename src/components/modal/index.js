import React from 'react'

const modal =() => {
    state = {
      showModal: false
    };
    handleOpenModal = this.handleOpenModal.bind(this);
    handleCloseModal = this.handleCloseModal.bind(this);
    
 const handleOpenModal = () => {
    setState({ showModal: true });
  }
  
  const handleCloseModal = () => {
    setState({ showModal: false });
  }
    
    return (
        <div>
            <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        </div>
    )
}

export default modal


  
