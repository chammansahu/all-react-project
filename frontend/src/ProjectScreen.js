import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { Button} from "react-bootstrap";
import Header from './projects/components/Header';

const ProjectScreen = () => {
    return (
      
        <main>
          {/* <ListGroup variant="flush">
              <LinkContainer to="/">
                <ListGroup.Item></ListGroup.Item>
              </LinkContainer>
            </ListGroup> */}
          <Header />
          <table className="table table-bordered table-responsive">
            <tr>
              <th>No.</th>
              <th>Project Name.</th>
              <th>Description.</th>
              <th>link</th>
            </tr>
            <tr>
              <td>1</td>
              <td>proect one</td>
              <td>this is simple project</td>
              <td>
                <LinkContainer to="/project1">
                  <Button >Run Project One:</Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>project Proshop</td>
              <td>cool online ecommerce</td>
              <td>
                <LinkContainer to="/proshop">
                  <Button >Run Proshop:</Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>project router basics</td>
              <td>example of router</td>
              <td>
                <LinkContainer to="/routerbasic">
                  <Button > react-router-basics:</Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Todo App</td>
              <td>example of react app simple todo</td>
              <td>
                <LinkContainer to="/todo">
                  <Button > run TodoApp</Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Pizza Online Booking App</td>
              <td>simple pizza booking app</td>
              <td>
                <LinkContainer to="/pizza">
                  <Button > run pizzaa</Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Redux examples</td>
              <td>basic example of redux</td>
              <td>
                <LinkContainer to="/redux">
                  <Button > run </Button>
                </LinkContainer>
              </td>
            </tr>
           
        </table>
        
        </main>
      
    );
}

export default ProjectScreen
