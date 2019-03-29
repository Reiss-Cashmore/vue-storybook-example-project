/* eslint-disable */
import { configure, storiesOf } from '@storybook/vue'
import { action, configureActions } from '@storybook/addon-actions';
import { registerStories } from 'vue-storybook'
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, color, select, boolean } from "@storybook/addon-knobs/vue";
import StoryTemplateDecorator from '../../src/stories/story-template-decorator';
import { addReadme } from 'storybook-readme/vue';
// const req = require.context('../../src/stories', true, /.stories.js$/)
const req = require.context("../../src/components", true, /\.vue$/);

function loadStories() {
  req.keys().forEach(filename => {
    let configurationObject = {
      req, 
      filename, 
      storiesOf, 
      knobs: {
        withKnobs,
        withNotes,
        action,
        text,
        boolean
      },
      decorators: [
        addReadme,
        withInfo,
        StoryTemplateDecorator  
      ],
      storyOptions: {
        info: true,
        readme: {
          singleFileComponentBlockEnabled: false,
          displaySidebar: true,
          displayContent: false
        }
      }
    }

    registerStories(configurationObject)
  })
}

configure(loadStories, module)
