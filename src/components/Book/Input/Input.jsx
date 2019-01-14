import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Input.scss';

@CSSModules(styles, { allowMultiple: true })
class Input extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <input
          {...this.props}
        />
      </div>
    );
  }
}

export default Input;
