import React, { useState } from "react";
import cx from 'classnames';
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Alert,
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
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";

import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import champion from "../../assets/dashboard/champion.svg";
import badge from "../../assets/dashboard/badge.svg";
import trophy from "../../assets/dashboard/trophy.svg";
import cours from "../../assets/dashboard/cours.svg";


import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])

  const toggleCheckbox = (id) => {
    setCheckboxes(checkboxes => checkboxes
      .map((checkbox, index) => index === id ? !checkbox : checkbox ))
  }

  const meals = [meal1, meal2, meal3];

  return (
    <div className={s.root}>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={8}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className="widget-p-none"
                title={
                  <div>
                    <div className="d-flex justify-content-between pull-right">
                      <div className="headline-3 d-flex align-items-center">
                        <UncontrolledDropdown>
                          <DropdownToggle caret>
                            &nbsp; Tous les cours &nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Option 01</DropdownItem>
                            <DropdownItem>Option 02</DropdownItem>
                            <DropdownItem>Option 03</DropdownItem>
                            <DropdownItem>Option 04</DropdownItem>
                            <DropdownItem>Option 05</DropdownItem>
                            <DropdownItem>Option 06</DropdownItem>
                            <DropdownItem>Option 07</DropdownItem>
                            <DropdownItem>Option 08</DropdownItem>
                            <DropdownItem>Option 09</DropdownItem>
                            <DropdownItem>Option 10</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      
                      <Button color="success" size="sm">
                        <i className={'eva eva-refresh-outline'} size={"xs"} />
                        Actualisé
                      </Button>

                      <div className="headline-3 d-flex align-items-center">
                        <i className={'eva eva-code-outline'} />
                      </div>
                    </div>
                    
                    <h5 className="mt-0 mb-3">
                      Mes cours
                    </h5>
                  </div>
                }
              >
                <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                  <thead>
                    <tr>
                      <th>Cours</th>
                      <th>Date d'inscription</th>
                      <th>Progression</th>
                      <th>Certificat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Comment copier un fichier depuis son ordinateur</td>
                      <td>05/01/2023</td>
                      <td>
                        <div className="text-center">25%</div>
                        <Progress value={25}/>
                      </td>
                      <td className="d-flex justify-content-center col-12 col-xl-6">
                        <img className="img-fluid mr-2" src={trophy} alt="..." />
                      </td>
                    </tr>
                    <tr>
                      <td>Comment copier un fichier depuis son ordinateur</td>
                      <td>05/01/2023</td>
                      <td>
                        <div className="text-center">25%</div>
                        <Progress value={25}/>
                      </td>
                      <td className="d-flex justify-content-center col-12 col-xl-6">
                        <img className="img-fluid mr-2" src={trophy} alt="..." />
                      </td>
                    </tr>
                    <tr>
                      <td>Comment copier un fichier depuis son ordinateur</td>
                      <td>05/01/2023</td>
                      <td>
                        <div className="text-center">25%</div>
                        <Progress value={25}/>
                      </td>
                      <td className="d-flex justify-content-center col-12 col-xl-6">
                        <img className="img-fluid mr-2" src={trophy} alt="..." />
                      </td>
                    </tr>
                    <tr>
                      <td>Comment copier un fichier depuis son ordinateur</td>
                      <td>05/01/2023</td>
                      <td>
                        <div className="text-center">25%</div>
                        <Progress value={25}/>
                      </td>
                      <td className="d-flex justify-content-center col-12 col-xl-6">
                        <img className="img-fluid mr-2" src={trophy} alt="..." />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className="widget-p-none"
                title={
                  <div>
                    <h5 className="mt-0 mb-3">
                      Suggestion de cours
                    </h5>
                  </div>
                }
              >
                <div className="d-flex justify-content-between">
                <CardGroup >
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src={cours}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        Comment copier un fichier depuis son ordinateur
                      </CardTitle>
                      
                      <CardText>
                        Tåning aktigt. Ultradade ode. 
                        Teragt synmeter. Besam sena. 
                      </CardText>
                      <Button color="success" size="sm">
                        S'incrire
                      </Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src={cours}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        Comment copier un fichier depuis son ordinateur
                      </CardTitle>
                      
                      <CardText>
                        Tåning aktigt. Ultradade ode. <br/>
                        Teragt synmeter. Besam sena. 
                      </CardText>
                      <Button color="success" size="sm">
                        S'incrire
                      </Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src={cours}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        Comment copier un fichier depuis son ordinateur
                      </CardTitle>
                    
                      <CardText>
                        Tåning aktigt. Ultradade ode. 
                        Teragt synmeter. Besam sena. 
                      </CardText>
                      <Button color="success" size="sm">
                        S'incrire
                      </Button>
                    </CardBody>
                  </Card>
                </CardGroup>
                </div>
                
              </Widget>
            </Col>
          </Row>
        </Col>
        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget title={
                  <h5 className="mt-0 mb-3">
                      Calendrier
                </h5>
              }>
                {/* <Alert
                  className="alert-sm"
                  color="warning"
                >
                  <span className="fw-semi-bold">Warning:</span> Best check yo
                  self, you&#39;re not looking too good.
                </Alert>
                <Alert
                  className="alert-sm"
                  color="success"
                >
                  <span className="fw-semi-bold">Success:</span> You successfully
                  read this important alert message.
                </Alert>
                <Alert
                  className="alert-sm"
                  color="info"
                >
                  <span className="fw-semi-bold">Info:</span> This alert needs
                  your attention, but it&#39;s not super important.
                </Alert>
                <Alert
                  className="alert-sm clearfix"
                  color="danger"
                >
                  <span className="fw-semi-bold">Danger:</span> Change this and
                  that and try again.
                  <span className="pull-right mr-sm">
                    <Button color="danger" size="sm">
                      Take this action
                    </Button>
                    <span className="px-2"> or </span>
                    <Button color="default" size="sm">Cancel</Button>
                  </span>
                </Alert> */}
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget title={
                <h5 className="mt-0 mb-3">
                  Badge
                </h5>
              }>
              <div className="d-flex justify-content-between">
                    <div className="headline-3 d-flex align-items-center">
                      <img className="img-fluid mr-2" src={badge} alt="..." />
                    </div>
                    <div className="body-3 muted">
                      <p>Cette semaine vous aviez eu 0 badge. Continuer de suivre des cours pour avoir d’avantages de badges.</p>
                    </div>
                  </div>
                  {meals.map((meal) =>
                    <div key={uuidv4()} className={`mt-4 `}>
                      <div className={s.widgetBody}>
                        <div className="d-flex">
                          <img className="img-fluid mr-2" src={champion} alt="..." />
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between">
                              <p className="body-2">Badge 002 </p>
                              <p className="body-3 muted">07/01/2023</p>
                            </div>
                            <p className="body-3 muted">Cours : Comment copier un fichier sur son ....</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  )}
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
