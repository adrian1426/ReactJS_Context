import { Component } from 'react';
import { Context } from '../context/Context';

class CompoClass extends Component {
  //static contextType = Context;

  render() {
    return (
      <div>Hoola amigo {this.context}</div>
    );
  };
};

CompoClass.contextType = Context;

export default CompoClass;