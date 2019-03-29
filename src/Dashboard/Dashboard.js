import React, { Component, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
import DriverMap from '../components/DriverMap'
import axios from 'axios';




const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')
// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Fist Dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};



// Main Chart


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      dates: new Date().toLocaleString(),
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    axios.get('/driver-data')
      .then((result)=>{
        console.log(result)
      })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

//   componentDidMount() {
//     axios.get(`stores.json`)
//         .then(({
//             data
//         }) => {
//             // console.log(data)
//             this.setState({
//                 stores: data.stores
//             });
//         })
//         .catch(error => console.log(error.response));
// }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">5</div>
                <div>Quaterly Orders</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">$43.22</div>
                <div>Cash Refunded</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">2</div>
                <div>Pending Orders</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">1</div>
                <div>Refund Issues</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Order Map</CardTitle>
                    <div className="small text-muted">{this.dates}</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>

                <DriverMap />

              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Completion Rate</div>
                    <strong> 40 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Acceptance Rate</div>
                    <strong>10 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Average Customer Ratings</div>
                    <strong> 10 Ratings (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Cancelled Orders</div>
                    <strong>8 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Commission Rate</div>
                    <strong>Average Rate (15.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <div className="chart-wrapper">
              </div>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <div className="chart-wrapper">
              </div>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>

              <div className="chart-wrapper">

              </div>

            </Suspense>
          </Col>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <div className="chart-wrapper">
              </div>
            </Suspense>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Dashboard
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    <br />
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                      <thead className="thead-light">
                        <tr>
                          <th className="text-center"><i className="icon-people"></i></th>
                          <th>Dropoff Location</th>
                          <th className="text-center">Pickup Location</th>
                          <th>Estimated Value</th>
                          <th className="text-center">Refund Type</th>
                          <th>Driver Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                              <strong>John Doe</strong>
                            </div>
                          </td>
                          <td>
                            <div>Fry's Electronics</div>
                            <div className="small text-muted">
                              <span>Delivered</span> | Address: 11565 US-59, Houston, TX 77031
                      </div>
                          </td>
                          <td className="text-center">
                            <div>
                              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                                <ModalBody>
                                  <DriverMap className="ModalMap" />
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                              </Modal>
                            </div>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$330</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">Dell 15.6" Touchscreen 7th Gen...</small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="success" value="50" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                            <strong>Mike Hill</strong>
                              
                            </div>
                          </td>
                          <td>
                            <div>Walmart</div>
                            <div className="small text-muted">

                            <span>Delivered</span> | Address: 111 Yale St, Houston, TX 77007
                      </div>
                          </td>
                          <td className="text-center">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                              <ModalBody>
                                <DriverMap className="ModalMap" />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$79</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">Roku Ultra Streaming Player </small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="info" value="10" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                            <strong>Josh Milk</strong>
                              
                            </div>
                          </td>
                          <td>
                            <div>Walmart</div>
                            <div className="small text-muted">
                            <span>Pending</span> | Address: 5405 S Rice Ave, Houston, TX 77081
                      </div>
                          </td>
                          <td className="text-center">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                              <ModalBody>
                                <DriverMap className="ModalMap" />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$830</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted"> VIZIO E-Series 70" Class 4K HDR... </small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="warning" value="74" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                            <strong>Mark Rack</strong>
                            </div>
                          </td>
                          <td>
                            <div>Fry's Electronics</div>
                            <div className="small text-muted">
                            <span>Cancelled</span> | Address: 11565 US-59, Houston, TX 77031
                      </div>
                          </td>
                          <td className="text-center">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                              <ModalBody>
                                <DriverMap className="ModalMap" />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$999</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">Samsung Galaxy S10+ (128GB)</small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="danger" value="98" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                            <strong>Ye West</strong>
                            </div>
                          </td>
                          <td>
                            <div>Target</div>
                            <div className="small text-muted">
                            <span>Delivered</span> | Address: 8500 S Main St, Houston, TX 77025
                      </div>
                          </td>
                          <td className="text-center">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                              <ModalBody>
                                <DriverMap className="ModalMap" />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$289</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">Bissell CrossWave Pet Pro Floor ...</small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="info" value="22" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                            <strong>Mike Jone</strong>
                            </div>
                          </td>
                          <td>
                            <div>Best Buy</div>
                            <div className="small text-muted">
                            <span>Delivered</span> | Address: 5133 Richmond Ave, Houston, TX 77056
                      </div>
                          </td>
                          <td className="text-center">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Location Information</ModalHeader>
                              <ModalBody>
                                <DriverMap className="ModalMap" />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Route</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>$429</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">LG 55" Class 2160p 4K Ultra ...</small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="success" value="43" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
                          </td>
                          <td>
                            <strong>Pablo Houston</strong>
                          </td>
                        </tr>
                      </tbody>

                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
