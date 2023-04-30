import React from "react";
import cx from 'classnames';
import { v4 as uuidv4 } from "uuid";
import {
    Col,
    Row,
    Table,
    Progress,
    Button,
    Card,
    CardGroup,
    CardTitle,
    CardBody,
    CardText,
    CardImg,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
  } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import champion from "../../assets/dashboard/champion.svg";
import cours1 from "../../assets/dashboard/cours-1.svg";
import cours2 from "../../assets/dashboard/cours-2.svg";
import cours3 from "../../assets/dashboard/cours-3.svg";
import arrow from "../../assets/tables/arrow.svg";

const Cours = () => {

    const cours = [cours1, cours2, cours3];


  return (
    <div>
      <Row>
        <Col className="mb-4">
            <Widget className="widget-p-none"
                title={
                  <div className="d-flex align-items-center">
                    <h5 >
                      Mes cours
                    </h5>

                    <div className="d-flex justify-content-between widget-p-md">
                      <div className="d-flex align-items-center pull-rigth
                      ">
                        <UncontrolledDropdown>
                          <DropdownToggle caret>
                            &nbsp; Categorie de cours &nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Option 01</DropdownItem>
                            <DropdownItem>Option 02</DropdownItem>
                            <DropdownItem>Option 03</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex align-items-center">
                        <UncontrolledDropdown>
                          <DropdownToggle caret>
                            &nbsp; Durée &nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Option 01</DropdownItem>
                            <DropdownItem>Option 02</DropdownItem>
                            <DropdownItem>Option 03</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex align-items-center">
                        <UncontrolledDropdown>
                          <DropdownToggle caret>
                            &nbsp; Difficulté &nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Option 01</DropdownItem>
                            <DropdownItem>Option 02</DropdownItem>
                            <DropdownItem>Option 03</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      
                      <Button color="success" size="sm">
                        <i className={'eva eva-refresh-outline'} size={"xs"} />
                        Actualisé
                      </Button>

                      <div className="headline-3 d-flex align-items-center">
                      <img src={arrow} alt="Filter option"/>
                      </div>
                    </div>
                    
                    
                  </div>
                }
              >
                {cours.map((cours) =>
                    <div key={uuidv4()} >
                      <div >
                        <div className="d-flex">
                          <img className="img-fluid mr-2" src={cours} alt="..." />
                          <div className="d-flex flex-column">
                            <div >
                              <p className="body-2">Comment copier un fichier sur son ordinateur </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="body-2">Niveau: Facile </p>
                              <p className="body-3 muted">01 heure</p>
                            </div>
                            <p className="body-3 muted">Lörem ipsum podade polyvis monolir tir. Onera karegt. Dekar kyn epikangen del. 
                                As tekynera dekapogt. Kav pod it fak mavakar. Öning prenar, tok debiliga i makroliga. 
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  )}
            </Widget>
        </Col>
      </Row>
      {/* <Row className="gutter">
        <Col className="mb-4" xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Semi-Bold Headings </p>
            }
          >
            <h1 className="mb-4">h1 40px h1. Heading Title</h1>
            <h2 className="mb-4">h2 32px h2. Heading Title</h2>
            <h3 className="mb-4">h3 28px h3. Heading Title</h3>
            <h4 className="mb-4">h4 24px h4. Heading Title</h4>
            <h5 className="mb-4">h5 20px h5. Heading Title</h5>
            <h6>h6 16px h6. Heading Title</h6>
          </Widget>
        </Col>
        <Col className="mb-4" xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Bold Headings </p>
            }
          >
            <h1 className="font-weight-bold mb-4">h1 40px h1. Heading Title</h1>
            <h2 className="font-weight-bold mb-4">h2 32px h2. Heading Title</h2>
            <h3 className="font-weight-bold mb-4">h3 28px h3. Heading Title</h3>
            <h4 className="font-weight-bold mb-4">h4 24px h4. Heading Title</h4>
            <h5 className="font-weight-bold mb-4">h5 20px h5. Heading Title</h5>
            <h6 className="font-weight-bold">h6 16px h6. Heading Title</h6>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4">
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Body Text</p>
            }
          >
            <p className="mb-0">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.</p>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Body Text</p>
            }
          >
            <Row>
              <Col xs={12} lg={5}>
                <p className="mb-2">Basic text</p>
                <p className="font-weight-light mb-2">Basic light text</p>
                <p className="font-weight-bold mb-2">Basic bold text</p>
                <p className="text-uppercase mb-2">Basic uppercase text</p>
                <p className="text-lowercase mb-2">Basic Lowercase Text</p>
                <p className="text-capitalize mb-2">Basic capitalize text</p>
                <p className="font-italic mb-2 mb-lg-0">Basic cursive text</p>
              </Col>
              <Col xs={12} lg={7}>
                <p className="text-muted mb-2"><u>Highlighting underline text</u></p>
                <p className="text-muted mb-2"><s>Highlighting Strikethrough text</s></p>
                <p className="font-weight-bold text-muted mb-2">Highlighting bold text</p>
                <p className="font-italic text-muted mb-2">Highlighting italic text</p>
                <p className="text-uppercase text-muted mb-2">Highlighting uppercase text</p>
                <p className="text-muted mb-2">&#8226; bullet text</p>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row> */}
    </div>
  )
}

export default Cours;
