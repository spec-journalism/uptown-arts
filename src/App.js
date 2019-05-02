import React from 'react';
import injectSheet from 'react-jss';
import Graphic from './Graphic';
import Paragraph from './Paragraph';
import Header from './Header';

const styles = {
  App: {
    margin: '5vh, 0',
  },
};

const contentBefore = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];

const contentAfter = contentBefore;

const header = {
  bylines: [
    'Written by Keri Kelly',
    'Graphics by Raeedah Wahid',
    'Illustration by Brenda Huang',
  ],
  date: 'May 1, 2019',
  headline: 'Uptown Arts Stroll',
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZG4T4MFYYJASHLTKYXESSL2CK4.jpg',
};

const App = ({ classes }) => {
  return (
    <div className={classes.App}>
      <Header header={header} />
      {contentBefore.map(text => <Paragraph text={text} />)}
      <Graphic />
      {contentAfter.map(text => <Paragraph text={text} />)}
    </div>
  );
};

export default injectSheet(styles)(App);