# GCPTemplate
Create Google App Script Web Apps with Google Service Backends. Template comes pre-built with a simple web app containing a single input form which updates the A1 cell of a linked Google SpreadSheet. See below an animated GIF of switching from an empty spreadsheet, navigating to the web app, submitting a new value, then verifying the value submitted is shown within the A1 cell of the original spreadsheet.


![GCPReactTemplateUsageExample.gif](./docs/media/GCPReactTemplateUsageExample.gif)


## TL;DR
While Google App Script is usually used for automating business processes across multiple Google Services, it can also be a platform for hosting web applications. Unfortunately, the App Script Web-based IDE is not very user friendly when it comes to building performant SPAs. Luckily webpack allows transpilation of modern JavaScript syntax and functionality to more native and widely supported versions of the JavaScript language. By combining the power of webpack, react and Google App Script (via the Clasp CLI), we can create modern-looking web apps with your already familiar Google Services.


All code for the "frontend" is stored under `src/client` and all code for the "backend" is stored under `src/server`. To make calls between the client and server directories, a global function must be declared within the `code.ts` file of the server directory, and the client calls this function via a `google.script.run` function call as shown below:

```javascript
// src/server/code.ts

// @ts-ignore
global.FormSubmit = (formData) => {
    const scriptProps = PropertiesService.getScriptProperties();

    const sheetId = String(scriptProps.getProperty('MAIN_SHEET_ID'));
    const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
    
    sheet.getRange(1, 1).setValue(formData.newValue);
}
```

```javascript
// src/client/root.tsx

public handleSubmit = (e) => {
...
    // @ts-ignore
    google.script.run
    .withSuccessHandler(this.handleFormSuccess)
    .withFailureHandler(this.handleFailure)
    .FormSubmit(document.getElementById('form'));
...
}
```

The `withSuccessHandler` and `withFailureHandler` functions allow you to set callbacks for both a successful and unsuccessful response from your backend `FormSubmit` call. As you can see the last function to be called is the function you defined within the server side `code.ts` file. For more information about the client side API for `run` please reference [Google's Documentation](https://developers.google.com/apps-script/guides/html/reference/run).

With some of the basics out of the way, you should be able to hit the ground running by setting up your very own Google App Script Web App. Keep in mind this is just a template so feel free to add more complex UI dependencies or more Google Service integrations into your very own implementation! Hopefully this template helps you worry less about the backend and gets you more time implementing your awesome ideas! 

## Setup

### Log into Clasp
Within your terminal, run the `bun install` command.
![run_bun_install.png](./docs/media/run_bun_install.png)

Next, run `bun run login` (If you haven't logged in recently). This command will log you into your google account to allow the project to create and update google cloud projects.

After running the command, the terminal should direct you to a web view to log you into your google account.
![run_bun_login_web_view.png](./docs/media/run_bun_login_web_view.png)

Continue with the web view prompts, including reviewing of access needed for clasp to manage your new web application.
![run_bun_login_web_view_cli_permissions.png](./docs/media/run_bun_login_web_view_cli_permissions.png)

Once you have completed the entire login and permission review process, you should be redirected to a confirmation view.
![run_bun_login_web_view_logged_in.png](./docs/media/run_bun_login_web_view_logged_in.png)

## Create Google App Script Project

Now you have logged into your Google Account via Clasp, you can now use Clasp to create a new project form which your react code will be deployed to. To do this, run `bun run create <project name>`.
![bun_run_clasp_create.png](./docs/media/bun_run_clasp_create.png)

Select `webapp` when prompted for type of script to create.

Once the project is successfully created, you should see the following output.
![bun_run_clasp_create_done.png](./docs/media/bun_run_clasp_create_done.png)

## Add Script Properties
Now create a new Google Spreadsheet to allow the web application to send and receive updates to. See the screenshot below to retrieve the I.D. of the new Spreadsheet. The I.D. will be needed within a Script Property in order to connect the web application to the spreadsheet. The Spreadsheet I.D. will be the series of letters, numbers and characters between the `/d/` and `/edit/` portions of the url.
![spreadsheet_id_from_url.png](./docs/media/spreadsheet_id_from_url.png)
In the above example, the I.D. of the document is `1x1pyWBBdLSpaXFXoR7LhG5UsQ6qMm122dh81OMWSeYc`. Your I.D. should look similar. Save this value somewhere to be used in the following steps.

Navigate back to your terminal where you entered the `bun install` and `bun run login` commands. Once there, run the `bun run open` command.

![bun_run_open_command.png](./docs/media/bun_run_open_command.png)

The command should open a web view of your clasp (Google App Script) project.

![bun_run_open_web_view.png](./docs/media/bun_run_open_web_view.png)

Navigate to the gear icon on the left side panel. It should expand to say `Project Settings` when it is hovered over with your cursor. Click `Project Settings` to open its page.

![bun_run_open_web_view_project_settings.png](./docs/media/bun_run_open_web_view_project_settings.png)

Once on the `Project Settings` page, scroll to the very bottom section which reads `Script Properties`. Click on the `Edit script properties` button.

![bun_run_open_web_view_add_project_setting.png](./docs/media/bun_run_open_web_view_add_project_setting.png)

The `Property` value for your new Script Property should be `MAIN_SHEET_ID`. The `Value` should be set to the Google Spreadsheet I.D. we retrieved in the previous steps.

![bun_run_open_web_view_fill_project_setting.png](./docs/media/bun_run_open_web_view_fill_project_setting.png)

Once both fields are filled in, click the `Save script properties` button.

## Deploy Project
Since we have already created the clasp project and set up the script properties, all we need to do is deploy the application code to the newly created project.

To deploy the current code in your repository run in your project's terminal `bun run deploy-test`.

![bun_run_deploy_test.png](./docs/media/bun_run_deploy_test.png)

You have now successfully compiled and uploaded the src files over to your newly created clasp project. You can now view them by running `bun run open`

Even though we have uploaded the code to the project, we still have not gotten a URL to run our newly created web application. To do so, we will need to configure the deployment within the Google App Script UI.

If you have not already done so, navigate to the project dashboard by running `bun run open`

You should now be able to view your project's deployed code. This was also the location of where we updated the script properties. 

In the top right corner of the dashboard you should see the `Deploy` button. Click this button and select `New Deployment` in the dropdown.

![deploy_project_new_deployment.png](./docs/media/deploy_project_new_deployment.png)

Within the modal that pops up, click the top left gear icon and select the `Web app` option in the dropdown.

![deploy_project_select_webapp](./docs/media/deploy_project_select_webapp.png)

Within the new deployment configuration form, enter the necessary details for your web application.

![deploy_project_fill_details.png](./docs/media/deploy_project_fill_details.png)

For the time being, ensure the `Execute as` and the `Who has access` is selected to your gmail account associated with this project and `Only myself` is selected for access. You can always come back and change these later to grant access to the larger public audience.

Now click the `Deploy` button.

If you are deploying for the first time, you will now receive a set of prompts requesting access to allow Google App Script to execute the code you have uploaded. You should only have to do this once, unless later down the road you decided to connect to additional Google Services.

![deploy_project_authorize_start.png](./docs/media/deploy_project_authorize_start.png)

Click `Authorize access` to begin granting access to your new Web App deployment.

![deploy_project_back_to_safety.png](./docs/media/deploy_project_back_to_safety.png)

Within this prompt, click the `Advanced` click on the bottom left.

![deploy_project_continue_to_app.png](./docs/media/deploy_project_continue_to_app.png)

Now select the `Go to ...` link at the bottom to proceed with reviewing the permissions needed for the web app deployment.

![bun_run_deploy_allow_access.png](./docs/media/bun_run_deploy_allow_access.png)

Review the list of permissions needed by the app and select the `Allow` button at the bottom.

You should now see the finished deployment screen with a URL you can use to access your newly created web app!

![deploy_project_authorize_finish.png](./docs/media/deploy_project_authorize_finish.png)

Lastly, after you have performed your initial deployment, move back to your terminal within your project and run the `bun run update` command to pull down the manifest file created during your initial prod deployment.

Lastly, in order to deploy your code to this URL each time, since a new deployment will create a different URL, you can save the deployment I.D. on the screen to an `.env` file at the root level of your project directory.

If you choose to go this route, just ensure your deployment I.D. is under the key `PROD_DEPLOY_ID` as shown below.

![update_deployment_id.png](./docs/media/update_deployment_id.png)

With this environment configuration, running `bun run deploy-prod` will use your saved deployment I.D. to update the already created URL. No need to generate a new URL for each change in your code base!

Likewise, running deploy-test will update your test environment which you can access under the `Deploy` dropdown in the App Script Dashboard under `Test Deployments`.


