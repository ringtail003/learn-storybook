import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import { HelloButtonComponent } from '../app/hello-button/hello-button.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text?', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

storiesOf('Hello Button', module)
  .add('with name', () => ({
    component: HelloButtonComponent,
    props: {
      name: 'foo',
    },
  }))
  .add('with action', () => ({
    component: HelloButtonComponent,
    props: {
      name: 'bar',
      hello: action('clicked!')
    },
  }))
  .add('with note', withNotes(`
    <h3>Notes</h3>
    <span>sample text</span>
    `)(() => ({
    component: HelloButtonComponent,
    props: {
      name: 'hoge',
    },
  })))
;
