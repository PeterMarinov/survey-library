import { AdaptiveActionContainer } from "survey-core";
import { registerMarkupTests } from "./helper";

registerMarkupTests(
  [{
    name: "Test paneldynamic with old navigation (progressTop) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "progressTop",
          panelCount: 2,
        },
      ]
    },
    removeIds: true,
    snapshot: "paneldynamic-progress-top-legacy-navigation",
  },
  {
    name: "Test paneldynamic (progressTop) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "progressTop",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-progress-top",

  },
  {
    name: "Test paneldynamic with old navigation (progressBottom) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "progressBottom",
          panelCount: 2,
        },
      ]
    },
    removeIds: true,
    snapshot: "paneldynamic-progress-bottom-legacy-navigation",
  },
  {
    name: "Test paneldynamic (progressBottom) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "progressBottom",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-progress-bottom",

  },
  {
    name: "Test paneldynamic with old navigation (list) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "list",
          panelCount: 2,
        },
      ]
    },
    removeIds: true,
    snapshot: "paneldynamic-list-legacy-navigation",
  },
  {
    name: "Test paneldynamic (list) #1 markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "list",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-list",

  },
  {
    name: "Test paneldynamic (list) #2 markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "list",
          templateElements: [
            {
              "type": "text",
              "titleLocation": "hidden",
              "name": "q1"
            }
          ],
          panelCount: 1,
        },
      ]
    },
    event: "onAfterRenderPage",
    snapshot: "paneldynamic-remove-btn-action-bar",
    before: () => { },
    initSurvey: survey => {
      survey.getAllQuestions()[0]["panels"][0].allowAdaptiveActions = false;
    },
  },
  {
    name: "Test paneldynamic (list) #3 markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "list",
          panelRemoveButtonLocation: "right",
          templateElements: [
            {
              "type": "text",
              "titleLocation": "hidden",
              "name": "q1"
            }
          ],
          panelCount: 1,
        },
      ]
    },
    event: "onAfterRenderPage",
    snapshot: "paneldynamic-remove-btn-right",

  },
  {
    name: "Test paneldynamic do not render empty footer (do not allow add) markup",
    json: {
      questions: [
        {
          "type": "paneldynamic",
          "name": "question1",
          "titleLocation": "hidden",
          "templateElements": [
            {
              "type": "text",
              "titleLocation": "hidden",
              "name": "question2"
            }
          ],
          "allowAddPanel": false,
          "panelCount": 1
        },
      ]
    },
    event: "onAfterRenderPage",
    snapshot: "paneldynamic-no-footer-1",
    removeIds: true,
    excludePlatform: "Vue",
    before: () => { },
  },
  {
    name: "Test paneldynamic do not render empty footer (max panels reached) markup",
    json: {
      questions: [
        {
          "type": "paneldynamic",
          "name": "question1",
          "titleLocation": "hidden",
          "templateElements": [
            {
              "type": "text",
              "titleLocation": "hidden",
              "name": "question2"
            }
          ],
          "allowAddPanel": true,
          "maxPanelCount": 1,
          "panelCount": 1
        },
      ]
    },
    event: "onAfterRenderPage",
    snapshot: "paneldynamic-no-footer-2",
    removeIds: true,
    excludePlatform: "Vue",

  }, {
    name: "Test paneldynamic (tab) markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "tab",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-progress-tab-center",
    removeIds: true,
    excludePlatform: "Vue",
    before: () => {
      AdaptiveActionContainer["ContainerID"] = 1;

    },
  }, {
    name: "Test paneldynamic (tab) tabAlign right markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "tab",
          tabAlign: "right",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-progress-tab-right",
    removeIds: true,
    excludePlatform: "Vue",
    before: () => {
      AdaptiveActionContainer["ContainerID"] = 1;

    },
  }, {
    name: "Test paneldynamic (tab) tabAlign left markup",
    json: {
      questions: [
        {
          type: "paneldynamic",
          name: "pd",
          titleLocation: "hidden",
          renderMode: "tab",
          tabAlign: "left",
          panelCount: 2,
        },
      ]
    },
    snapshot: "paneldynamic-progress-tab-left",
    removeIds: true,
    excludePlatform: "Vue",
    before: () => {
      AdaptiveActionContainer["ContainerID"] = 1;

    },
  }
  ]
);