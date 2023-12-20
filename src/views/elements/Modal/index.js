import React  from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, UncontrolledCollapse, Button, ModalHeader, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {index} from "../../../config/pluginsInit";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model1:false,
            model2:false,
            model3:false,
            model4:false,
            model5:false,
            model6:false,
            model7:false,
            model8:false,
            model9:false,
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    toggle = (model_id) => {
        this.setState({
            [model_id]:!this.state[model_id]
        });
    };

    render() {

        return (
            <>
                <Row>
                    <Col sm="12" lg="6">
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Modal components</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model1-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model1-code">
                                                    {
                                                        `
<!---------- Button trigger modal---------->
<Button color="primary" onClick={ () => this.toggle("model1") }> Launch demo modal </Button>

<!---------- Modal---------->
<Modal isOpen={this.state.model1} toggle={ () => this.toggle("model1") }>
    <ModalHeader toggle={ () => this.toggle("model1") }>Modal title</ModalHeader>
    <ModalBody>
        ...
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model1") }>Save changes</Button>
        {' '}
        <Button color="secondary" onClick={ () => this.toggle("model1") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>Below is a <em>static</em> modal example (meaning
                                    its <code>position</code> and <code>display</code> have been overridden). Included
                                    are the modal header, modal body (required for <code>padding</code>), and modal
                                    footer (optional). We ask that you include modal headers with dismiss actions
                                    whenever possible, or provide another explicit dismiss action.</p>

                                {/*Button trigger modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model1") }> Launch demo modal </Button>

                                {/*Modal*/}
                                <Modal isOpen={this.state.model1} toggle={ () => this.toggle("model1") }>
                                    <ModalHeader toggle={ () => this.toggle("model1") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        ...
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model1") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model1") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Modal Scrolling </h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model2-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model2-code">
                                                    {
                                                        `
<!----------Button trigger modal---------->
<Button color="primary" onClick={ () => this.toggle("model2") }> Launch demo modal </Button>

<!----------Modal---------->
<Modal isOpen={this.state.model2} toggle={ () => this.toggle("model2") } className="modal-dialog-scrollable">
    <ModalHeader toggle={ () => this.toggle("model2") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model2") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model2") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>When modals become too long for the user’s viewport or device, they scroll
                                    independent of the page itself. Try the demo below to see what we mean.</p>

                                {/*Button trigger modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model2") }> Launch demo modal </Button>

                                {/*Modal*/}
                                <Modal isOpen={this.state.model2} toggle={ () => this.toggle("model2") } className="modal-dialog-scrollable">
                                    <ModalHeader toggle={ () => this.toggle("model2") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model2") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model2") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Optional sizes</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model2-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model2-code">
                                                    {
                                                        `
<!---------- Extra large modal ---------->
<Button color="primary" onClick={ () => this.toggle("model3") }> Extra large modal </Button>{' '}

<!---------- Modal ---------->
<Modal isOpen={this.state.model3} toggle={ () => this.toggle("model3") } className="modal-xl">
    <ModalHeader toggle={ () => this.toggle("model3") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Modal body text goes here.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model3") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model3") }>Cancel</Button>
    </ModalFooter>
</Modal>

<!---------- Large modal ---------->
<Button color="primary" onClick={ () => this.toggle("model4") }> Large modal </Button>{' '}

<!---------- Modal ---------->
<Modal isOpen={this.state.model4} toggle={ () => this.toggle("model4") } className="modal-lg">
    <ModalHeader toggle={ () => this.toggle("model4") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Modal body text goes here.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model4") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model4") }>Cancel</Button>
    </ModalFooter>
</Modal>


<!---------- Small modal ---------->
<Button color="primary" onClick={ () => this.toggle("model5") }> Small modal </Button>{' '}

<!---------- Modal ---------->
<Modal isOpen={this.state.model5} toggle={ () => this.toggle("model5") } className="modal-sm">
    <ModalHeader toggle={ () => this.toggle("model5") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Modal body text goes here.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model5") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model5") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>Modals have three optional sizes, available via modifier classes to be placed on a
                                    .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal
                                    scrollbars on narrower viewports.</p>
                                {/*Extra large modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model3") }> Extra large modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model3} toggle={ () => this.toggle("model3") } className="modal-xl">
                                    <ModalHeader toggle={ () => this.toggle("model3") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Modal body text goes here.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model3") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model3") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                                {/*Large modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model4") }> Large modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model4} toggle={ () => this.toggle("model4") } className="modal-lg">
                                    <ModalHeader toggle={ () => this.toggle("model4") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Modal body text goes here.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model4") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model4") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>


                                {/*Small modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model5") }> Small modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model5} toggle={ () => this.toggle("model5") } className="modal-sm">
                                    <ModalHeader toggle={ () => this.toggle("model5") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Modal body text goes here.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model5") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model5") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Scrolling long content</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model6-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model6-code">
                                                    {
                                                        `
<!--------- Button trigger modal ---------->
<Button color="primary" onClick={ () => this.toggle("model6") }> Launch demo modal </Button>{' '}

<!--------- Modal ---------->
<Modal isOpen={this.state.model6} toggle={ () => this.toggle("model6") }>
    <ModalHeader toggle={ () => this.toggle("model6") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model6") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model6") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>When modals become too long for the user’s viewport or device, they scroll
                                    independent of the page itself. Try the demo below to see what we mean.</p>
                                {/*Button trigger modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model6") }> Launch demo modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model6} toggle={ () => this.toggle("model6") }>
                                    <ModalHeader toggle={ () => this.toggle("model6") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model6") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model6") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Vertically centered</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model7-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model7-code">
                                                    {
                                                        `
<!---------- Button trigger modal ---------->
<Button color="primary" onClick={ () => this.toggle("model7") }> Launch demo modal </Button>{' '}

<!---------- Modal ---------->
<Modal isOpen={this.state.model7} toggle={ () => this.toggle("model7") } className="modal-dialog-centered">
    <ModalHeader toggle={ () => this.toggle("model7") }>Modal title</ModalHeader>
    <ModalBody>
        ...
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model7") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model7") }>Cancel</Button>
    </ModalFooter>
</Modal>

<!---------- Button trigger modal ---------->
<Button color="primary" onClick={ () => this.toggle("model8") }> Vertically centered scrollable modal </Button>{' '}

<!---------- Modal ---------->
<Modal isOpen={this.state.model8} toggle={ () => this.toggle("model8") } className="modal-dialog-scrollable modal-dialog-centered">
    <ModalHeader toggle={ () => this.toggle("model8") }>Modal title</ModalHeader>
    <ModalBody>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model8") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model8") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>Add <code className="highlighter-rouge">.modal-dialog-centered</code> to <code
                                    className="highlighter-rouge">.modal-dialog</code> to vertically center the modal.
                                </p>
                                {/*Button trigger modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model7") }> Launch demo modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model7} toggle={ () => this.toggle("model7") } className="modal-dialog-centered">
                                    <ModalHeader toggle={ () => this.toggle("model7") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        ...
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model7") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model7") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                                {/*Button trigger modal*/}
                                <Button color="primary" onClick={ () => this.toggle("model8") }> Vertically centered scrollable modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model8} toggle={ () => this.toggle("model8") } className="modal-dialog-scrollable modal-dialog-centered">
                                    <ModalHeader toggle={ () => this.toggle("model8") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model8") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model8") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Using the grid</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#model9-code" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true"> Copy </span>
                                            <pre className="text-white">
                                                <code id="model9-code">
                                                    {
                                                        `
<!--------- Button trigger modal ---------->
<Button color="primary" onClick={ () => this.toggle("model9") }> Launch demo modal </Button>{' '}

<!--------- Modal ---------->
<Modal isOpen={this.state.model9} toggle={ () => this.toggle("model9") }>
    <ModalHeader toggle={ () => this.toggle("model9") }>Modal title</ModalHeader>
    <ModalBody>
        <div className="iq-example-row">
            <div className="container-fluid">
                <Row className="mb-3">
                    <Col md="4">.col-md-4</Col>
                    <Col md="4" className="ml-auto">.col-md-4 .ml-auto</Col>
                </Row>
                <Row className="mb-3">
                    <Col md="3" className="ml-auto">.col-md-3 .ml-auto</Col>
                    <Col md="2" className="ml-auto">.col-md-2 .ml-auto</Col>
                </Row>
                <Row className="mb-3">
                    <Col md="6" className="ml-auto">.col-md-6 .ml-auto</Col>
                </Row>
                <Row>
                    <Col sm="9">
                        Level 1: .col-sm-9
                        <Row>
                            <Col xs="8" sm="6">
                                Level 2: .col-8 .col-sm-6
                            </Col>
                            <Col xs="4" sm="6">
                                Level 2: .col-4 .col-sm-6
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={ () => this.toggle("model9") }>Save changes</Button>{' '}
        <Button color="secondary" onClick={ () => this.toggle("model9") }>Cancel</Button>
    </ModalFooter>
</Modal>
                                                        `
                                                    }
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>Utilize the Bootstrap grid system within a modal by
                                    nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use
                                    the normal grid system classes as you would anywhere else.</p>
                                <Button color="primary" onClick={ () => this.toggle("model9") }> Launch demo modal </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.model9} toggle={ () => this.toggle("model9") }>
                                    <ModalHeader toggle={ () => this.toggle("model9") }>Modal title</ModalHeader>
                                    <ModalBody>
                                        <div className="iq-example-row">
                                            <div className="container-fluid">
                                                <Row className="mb-3">
                                                    <Col md="4">.col-md-4</Col>
                                                    <Col md="4" className="ml-auto">.col-md-4 .ml-auto</Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col md="3" className="ml-auto">.col-md-3 .ml-auto</Col>
                                                    <Col md="2" className="ml-auto">.col-md-2 .ml-auto</Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col md="6" className="ml-auto">.col-md-6 .ml-auto</Col>
                                                </Row>
                                                <Row>
                                                    <Col sm="9">
                                                        Level 1: .col-sm-9
                                                        <Row>
                                                            <Col xs="8" sm="6">
                                                                Level 2: .col-8 .col-sm-6
                                                            </Col>
                                                            <Col xs="4" sm="6">
                                                                Level 2: .col-4 .col-sm-6
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={ () => this.toggle("model9") }>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={ () => this.toggle("model9") }>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
