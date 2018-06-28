import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import '../css/Collapse.css';

class CollapseInfo extends Component {
  constructor (props) {
    super (props);
    this.toggle = this.toggle.bind (this);
    this.state = {collapse: false};
  }

  toggle () {
    this.setState ({collapse: !this.state.collapse});
  }

  render () {
    return (
      <div style={{marginBottom: '10px', margintop: '0'}}>
        <Button color="#E9ECEF" onClick={this.toggle}>
          {this.props.name}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {this.props.text}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapseInfo;
