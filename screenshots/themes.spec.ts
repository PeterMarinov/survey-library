import { test } from "@playwright/test";
import { frameworks, url, initSurvey, compareScreenshot } from "../e2e/helper";

const title = "Survey themes Screenshot";

frameworks.forEach(framework => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}${framework}`);
  });

  test.describe(`${framework} ${title}`, () => {
    test("Check question title font size", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 1600 });
      await initSurvey(page, framework, {
        focusFirstQuestionAutomatic: true,
        "logoPosition": "right",
        "showQuestionNumbers": "off",
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "file",
                "name": "question5"
              },
              {
                "type": "matrixdynamic",
                "name": "question1",
                "columns": [
                  {
                    "name": "Column 1"
                  },
                  {
                    "name": "Column 2"
                  },
                  {
                    "name": "Column 3"
                  }
                ],
                "choices": [
                  1,
                  2,
                  3,
                  4,
                  5
                ]
              },
              {
                "type": "paneldynamic",
                "name": "question2",
                "templateElements": [
                  {
                    "type": "text",
                    "name": "question3"
                  }
                ],
                "panelCount": 3,
                "minPanelCount": 3,
                "renderMode": "tab"
              }
            ]
          },
          {
            "name": "page2",
            "elements": [
              {
                "type": "text",
                "name": "question4"
              }
            ]
          }
        ]
      });
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-questiontitle-size": "24px"
          }
        });
      });
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-questiontitle-font-size.png");
    });

    test("Check question title font size, #2", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 1600 });
      await initSurvey(page, framework, {
        focusFirstQuestionAutomatic: true,
        "logoPosition": "right",
        "showQuestionNumbers": "off",
        "elements": [{
          type: "matrix",
          name: "Quality",
          title: "Matrix",
          columns: [
            {
              value: 1,
              text: "Strongly Disagree"
            },
            {
              value: 2,
              text: "Disagree"
            },
            {
              value: 3,
              text: "Neutral"
            },
            {
              value: 4,
              text: "Agree"
            },
            {
              value: 5,
              text: "Strongly Agree"
            }
          ],
          rows: [
            {
              value: "affordable",
              text: "Product is affordable"
            },
            {
              value: "does what it claims",
              text: "Product does what it claims"
            },
            {
              value: "better than others",
              text: "Product is better than other products on the market"
            },
            {
              value: "easy to use",
              text: "Product is easy to use"
            }
          ]
        }]
      });
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-editorfont-size": "24px",
            "--sjs-font-questiontitle-weight": "400"
          }
        });
      });
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-questiontitle-font-weight.png");
    });

    test("Check items size & colors", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 2000 });
      await initSurvey(page, framework, {
        focusFirstQuestionAutomatic: true,
        "logoPosition": "right",
        "showQuestionNumbers": "off",
        "elements": [
          {
            type: "dropdown",
            name: "cars",
            choices: [
              "Ford",
              "Vauxhall",
              "Volkswagen",
              "Nissan",
              "Audi",
              "Mercedes-Benz",
              "BMW",
              "Peugeot",
              "Toyota",
              "Citroen"
            ]
          },
          {
            "type": "checkbox",
            "name": "question6",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "ranking",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "radiogroup",
            "name": "question4",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "rating",
            "name": "question5"
          },
          {
            type: "imagepicker",
            name: "choosepicture",
            showLabel: true,
            choices: [{
              value: "lion",
              imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
            },
            {
              value: "giraffe",
              imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
            },
            ]
          }
        ]
      });
      await page.waitForLoadState("networkidle");
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-questiontitle-color": "rgba(242, 2, 2, 1)",
            "--sjs-font-editorfont-size": "24px"
          }
        });
      });
      await page.waitForTimeout(500);
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-questiontitle-font-color-for-items.png");

      await page.click(".sd-dropdown");
      await compareScreenshot(page, ".sv-popup.sv-dropdown-popup .sv-popup__container", "survey-theme-questiontitle-font-color-for-dropdown-list-items.png");
    });

    test("Check input element placeholder", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 1600 });
      await initSurvey(page, framework, {
        showQuestionNumbers: "on",
        focusFirstQuestionAutomatic: true,
        "logoPosition": "right",
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "boolean",
                "name": "question1"
              },
              {
                "type": "multipletext",
                "name": "question2",
                "items": [
                  {
                    "name": "text1"
                  },
                  {
                    "name": "text2"
                  }
                ]
              },
              {
                "type": "dropdown",
                "name": "question3",
                "defaultValue": "Item 1",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3"
                ]
              }
            ]
          }
        ]
      });
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-editorfont-placeholdercolor": "rgba(66, 123, 215, 1)"
          }
        });
      });
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-editorfont-placeholdercolor.png");
    });

    test("Check dropdown element colors", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 1600 });
      await initSurvey(page, framework, {
        showQuestionNumbers: "on",
        "elements": [
          {
            "type": "dropdown",
            "name": "dropdown",
            "defaultValue": "Item 1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      });
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-general-backcolor": "rgba(255, 255, 255, 0.25)", "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)", "--sjs-general-backcolor-dim": "#1846A5", "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 0.99)", "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)", "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)", "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)", "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)", "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)", "--sjs-primary-backcolor": "rgba(24, 70, 165, 1)", "--sjs-primary-backcolor-light": "rgba(24, 70, 165, 0.1)", "--sjs-primary-backcolor-dark": "rgba(22, 64, 150, 1)", "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)", "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)", "--sjs-base-unit": "8px", "--sjs-corner-radius": "4px", "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)", "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)", "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)", "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)", "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)", "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0)", "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)", "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)", "--sjs-shadow-inner": "0px 0px 0px 0px rgba(0, 0, 0, 0)", "--sjs-border-light": "rgba(24, 70, 165, 0.15)", "--sjs-border-default": "rgba(0, 0, 0, 0.25)", "--sjs-border-inside": "rgba(0, 0, 0, 0.16)", "--sjs-special-red": "rgba(229, 10, 62, 1)", "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)", "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-green": "rgba(25, 179, 148, 1)", "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)", "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-blue": "rgba(67, 127, 217, 1)", "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)", "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-yellow": "rgba(255, 152, 20, 1)", "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)", "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)", "--sjs-article-font-xx-large-textDecoration": "none", "--sjs-article-font-xx-large-fontWeight": "700", "--sjs-article-font-xx-large-fontStyle": "normal", "--sjs-article-font-xx-large-fontStretch": "normal", "--sjs-article-font-xx-large-letterSpacing": "0", "--sjs-article-font-xx-large-lineHeight": "64px", "--sjs-article-font-xx-large-paragraphIndent": "0px", "--sjs-article-font-xx-large-textCase": "none", "--sjs-article-font-x-large-textDecoration": "none", "--sjs-article-font-x-large-fontWeight": "700", "--sjs-article-font-x-large-fontStyle": "normal", "--sjs-article-font-x-large-fontStretch": "normal", "--sjs-article-font-x-large-letterSpacing": "0", "--sjs-article-font-x-large-lineHeight": "56px", "--sjs-article-font-x-large-paragraphIndent": "0px", "--sjs-article-font-x-large-textCase": "none", "--sjs-article-font-large-textDecoration": "none", "--sjs-article-font-large-fontWeight": "700", "--sjs-article-font-large-fontStyle": "normal", "--sjs-article-font-large-fontStretch": "normal", "--sjs-article-font-large-letterSpacing": "0", "--sjs-article-font-large-lineHeight": "40px", "--sjs-article-font-large-paragraphIndent": "0px", "--sjs-article-font-large-textCase": "none", "--sjs-article-font-medium-textDecoration": "none", "--sjs-article-font-medium-fontWeight": "700", "--sjs-article-font-medium-fontStyle": "normal", "--sjs-article-font-medium-fontStretch": "normal", "--sjs-article-font-medium-letterSpacing": "0", "--sjs-article-font-medium-lineHeight": "32px", "--sjs-article-font-medium-paragraphIndent": "0px", "--sjs-article-font-medium-textCase": "none", "--sjs-article-font-default-textDecoration": "none", "--sjs-article-font-default-fontWeight": "400", "--sjs-article-font-default-fontStyle": "normal", "--sjs-article-font-default-fontStretch": "normal", "--sjs-article-font-default-letterSpacing": "0", "--sjs-article-font-default-lineHeight": "28px", "--sjs-article-font-default-paragraphIndent": "0px", "--sjs-article-font-default-textCase": "none", "--sjs-article-font-xx-large-fontSize": "64px", "--sjs-article-font-x-large-fontSize": "48px", "--sjs-article-font-large-fontSize": "32px", "--sjs-article-font-medium-fontSize": "24px", "--sjs-article-font-default-fontSize": "16px", "--sjs-cover-backcolor": "transparent", "--sjs-question-background": "rgba(255, 255, 255, 1)", "--font-family": "Open Sans", "--sjs-questionpanel-backcolor": "rgba(255, 255, 255, 0.25)", "--sjs-questionpanel-cornerRadius": "8px", "--sjs-editor-background": "rgba(255, 255, 255, 1)", "--sjs-editorpanel-hovercolor": "rgba(24, 70, 165, 0.1)", "--sjs-editorpanel-backcolor": "rgba(255, 255, 255, 0.99)", "--sjs-editorpanel-cornerRadius": "3px", "--sjs-font-pagetitle-color": "rgba(255, 255, 255, 1)", "--sjs-font-editorfont-color": "rgba(0, 0, 0, 0.9)", "--sjs-font-editorfont-placeholdercolor": "rgba(0, 0, 0, 0.5)", "--sjs-font-questiontitle-color": "rgba(255, 255, 255, 1)", "--sjs-font-questiondescription-color": "rgba(255, 255, 255, 0.75)", "--sjs-questionpanel-hovercolor": "rgba(24, 70, 165, 0.1)", "--sjs-cover-title-forecolor": "#FFFFFF", "--sjs-cover-description-forecolor": "rgba(255, 255, 255, 1)", "--sjs-font-questiontitle-weight": "700", "--sjs-font-questiontitle-size": "14px", "--sjs-font-questiondescription-size": "14px", "--sjs-font-editorfont-size": "14px"
          }
        });
      });
      await page.waitForTimeout(500);
      await page.click(".sd-input.sd-dropdown");
      await page.hover("text=Item 2");
      await compareScreenshot(page, ".sv-popup__container", "survey-theme-dropdown-elements.png");
    });

    const jsonWithInputs = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "defaultValue": "test1"
            },
            {
              "type": "comment",
              "name": "question2",
              "defaultValue": "test2"
            },
            {
              "type": "multipletext",
              "name": "question3",
              "defaultValue": {
                "text1": "test3"
              },
              "items": [
                {
                  "name": "text1"
                },
                {
                  "name": "text2"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "question4",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "rating",
              "name": "question5"
            },
            {
              "type": "checkbox",
              "name": "question6",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "dropdown",
              "name": "question7",
              "defaultValue": "Item 1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "tagbox",
              "name": "question8",
              "defaultValue": [
                "Item 2",
                "Item 3"
              ],
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "boolean",
              "name": "question9"
            },
            {
              "type": "ranking",
              "name": "question10",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            }
          ]
        }
      ]
    };

    test("Desktop: Input font-size less 16px", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 3000 });
      await initSurvey(page, framework, jsonWithInputs);
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-editorfont-size": "12px",
            "--sjs-font-size": "20px"
          }
        });
      });
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-desktop-input-size.png");

      await page.locator(".sd-input.sd-dropdown").first().click();
      await compareScreenshot(page, ".sv-popup__container", "survey-theme-desktop-popup-input-size.png");
    });

    test("Mobile mode: input font-size less 16px", async ({ page }) => {
      await page.evaluate(() => {
        window["Survey"]._setIsTouch(true);
        (window as any).Survey.ListModel.MINELEMENTCOUNT = 2;
      });
      await page.setViewportSize({ width: 400, height: 2000 });
      await initSurvey(page, framework, {});
      await page.evaluate((json) => {
        window["survey"].onOpenDropdownMenu.add((sender, options) => {
          if (options.menuType === "popup") options.menuType = "overlay";
        });
        window["survey"].fromJSON(json);
        window["survey"].applyTheme({
          "cssVariables": {
            "--sjs-font-editorfont-size": "12px",
            "--sjs-font-size": "20px"
          }
        });
      }, jsonWithInputs);
      await page.waitForTimeout(500);
      await compareScreenshot(page, ".sd-root-modern", "survey-theme-mobile-input-size.png");

      await page.setViewportSize({ width: 400, height: 1000 });
      await page.waitForTimeout(500);
      const tagboxDropdownButton = page.locator(".sd-editor-chevron-button").first();
      await tagboxDropdownButton.scrollIntoViewIfNeeded();
      await tagboxDropdownButton.click();
      await compareScreenshot(page, ".sv-popup__container .sv-popup__content", "survey-theme-mobile-popup-input-size.png");
    });

    test("HTML default color", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 3000 });
      await initSurvey(page, framework, {
        showQuestionNumbers: "on",
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "html",
                "name": "question1",
                "html": "HTML on surface"
              },
              {
                "type": "panel",
                "name": "panel1",
                "title": "Panel",
                "elements": [
                  {
                    "type": "html",
                    "name": "question2",
                    "html": "HTML in panel"
                  }
                ]
              }
            ],
            "title": "Page"
          }
        ]
      });
      await page.evaluate(() => {
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-general-forecolor": "red",
            "--sjs-general-dim-forecolor": "blue"
          }
        });
      });
      await compareScreenshot(page, ".sd-page", "survey-html-theme.png");
    });

    test("Matrix many columns", async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 600 });
      await initSurvey(page, framework, {
        showQuestionNumbers: "on",
        "logoPosition": "right",
        "focusFirstQuestionAutomatic": false,
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "matrixdynamic",
                "name": "matrix",
                "rows": ["item1", "item2"],
                "columns": [
                  { "name": "col1" },
                  { "name": "col2" },
                  { "name": "col3" },
                  { "name": "col5" },
                  { "name": "col6" },
                  { "name": "col6" },
                  { "name": "col7" },
                  { "name": "col8" },
                  { "name": "col9" },
                  { "name": "col10" },
                  { "name": "col11" },
                  { "name": "col12" }
                ],
              }
            ]
          }
        ]
      });
      await page.evaluate(() => {
        (window as any).survey.isCompact = true;
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-general-backcolor-dim": "blue"
          }
        });
      });
      await compareScreenshot(page, ".sd-body", "question-matrix-dropdown-columns-theme.png");
    });

    test("Question scaling", async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await initSurvey(page, framework, {
        "showQuestionNumbers": "off",
        "pages": [
          {
            "name": "page1",
            "elements": [{ "type": "text", "name": "question1" }]
          }
        ],
      });
      await page.evaluate(() => {
        (window as any).survey.isCompact = true;
        (window as any).survey.applyTheme({
          "cssVariables": {
            "--sjs-font-size": "3.2px",
            "--sjs-base-unit": "1.6px",
          }
        });
      });
      await compareScreenshot(page, ".sd-question", "question-scaling.png");
    });
  });
});