import React, { Component } from 'react';
import 'babel-polyfill';
import styles from '../../styles/HomeScreen.css';
import { HomeNavItem } from './HomeNavItem';
import { passActiveTitle } from './homeFunctions';


export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.passActiveTitle = passActiveTitle.bind(this);
  }

  render() {
    const firstRow = ['About Me', 'Skills'];
    const secondRow = ['Portfolio', 'Contact Me'];
    const listFirstRow = firstRow.map((item) => {
      return (<HomeNavItem
        title={item}
        key={item}
        passLinkedComponentToHomeScreen={this.passActiveTitle}
      />);
    });
    const listSecondRow = secondRow.map((item) => {
      return (<HomeNavItem
        title={item}
        key={item}
        passLinkedComponentToHomeScreen={this.passActiveTitle}
      />);
    });
    return (
      <div>
        <div className={styles.homeContent}>

          <div className={styles.header}>
            <h1>Welcome.</h1>
          </div>

          <div className={styles.contentRow}>
            {listFirstRow}
          </div>

          <br />

          <div className={styles.contentRow}>
            {listSecondRow}
          </div>

        </div>
      </div>
    );
  }
}