import {
  Container, 
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  Button, 
  Row, 
  Col,
  Breadcrumb, 
  Table, 
  Spinner, 
  Tab, 
  Tabs,
  ProgressBar, 
  Pagination, 
  OverlayTrigger, 
  Popover, 
  Accordion, 
  useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

function App() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Informasi Website</Popover.Header>
      <Popover.Body>
        Website ini dibuat untuk mempermudahkan dalam pencarian Informasi terkini tentang berita olahraga
      </Popover.Body>
    </Popover>
  );



  return (
    <div >
          <Navbar bg="dark" expand="lg" variant="dark">

            <Navbar.Brand href=".">Akses Sport</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Col>
                  <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Berita</Nav.Link>
                    <Nav.Link href="">Live Scores</Nav.Link>
                    <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action1">Piala 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action2">Piala 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Piala 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="">Transfer Pemain</Nav.Link>
                    <Nav.Link href="">Tim</Nav.Link>
                  </Nav>
                </Col>

                <Col md='auto'>
                  <Form >
                      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />  
                  </Form>
                </Col>

                <Col md='auto'>
                  <Button variant="outline-info">Search</Button>
                </Col>
            </Navbar.Collapse>
          </Navbar>

    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs={4}>
          <Breadcrumb style={{backgroundColor: '#e9ecef', padding: '5px'}}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
  <br/>
  <br/>
      <Row>
        <Col><h4>Rumor Transfer Pemain</h4></Col>
        <Col md='auto'>
          <Spinner animation="border" variant="success" />
          <Spinner animation="grow" variant="success" />
        </Col>
      </Row>
    <br/>
      <Row>
        <Tabs
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="1" title="Semua Transfer"></Tab>
          <Tab eventKey="2" title="Liga Premier Inggris"></Tab>
          <Tab eventKey="3" title="Series A"></Tab>
          <Tab eventKey="4" title="Devisi Primera"></Tab>
          <Tab eventKey="5" title="Bundesliga"></Tab>
          <Tab eventKey="6" title="Liga 1 Indonesia"></Tab>
        </Tabs>
      </Row>
      <Row>
        <Table responsive>
          <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={85} label={'85%'} /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td><ProgressBar animated now={55} label={'55%'} /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td><ProgressBar animated now={95} label={'95%'} /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETERSBURG</td>
                    <td><ProgressBar animated now={100} label={'100%'} /></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PALACE</td>
                    <td><ProgressBar animated now={50} label={'50%'} /></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PIAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td><ProgressBar animated now={100} label={'100%'} /></td>
                  </tr>
                </tbody>
        </Table> 
      </Row>
      <Row>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row> 
      <Row>
        <Col md='auto'>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button>Informasi</Button>
          </OverlayTrigger>

        </Col>


        <Col md='auto'>
          <Accordion >
            <CustomToggle eventKey="0">Versi Website</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <p>Akses Sport 1.0</p>
            </Accordion.Collapse>
          </Accordion>
        </Col>
      </Row>
     </Container>    
     <br/>
     <br/>
    </div>
  );
}

export default App;
