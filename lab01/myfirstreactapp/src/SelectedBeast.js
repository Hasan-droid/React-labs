import React, { Component } from 'react'
import { Card,Modal, Button } from 'react-bootstrap'

 class SelectedBeast extends Component {
    render() {
        return (
           
                <>
                <Modal show={this.props.closeData}  >
                    <Modal.Header>
                        <Modal.Title style={{ alignItems: 'center' }}>{this.props.modaldata.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Card style={{ width: "80%", height: "100%",marginLeft: "7vh" }} bg={'primary'}>
                            <Card.Img width={200}
                                height={280}  src={this.props.modaldata.img_url} alt={this.props.title} />
                            <Card.Body>

                                <Card.Text style={{color:'wheat'}}>
                                    {this.props.modaldata.description}
                                </Card.Text>
                            </Card.Body>




                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="secondary" onClick={this.props.closeModal}>
                            Close
          </Button>
                        
                    </Modal.Footer>
                </Modal>
            </> 
           
        )
    }
}

export default SelectedBeast
