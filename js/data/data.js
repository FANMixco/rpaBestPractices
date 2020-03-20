let data = [{
        "section": "Basics",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Build a <a href="https://www.uipath.com/rpa/center-of-excellence" target="_blank">Center of Excellence (CoE)</a>. Generally, it's seen as an expensive expense and shouldn't be the case, it's more expensive when it's not implemented.`,
                `Pre-screen all apps and test different RPA platforms before choosing the final one. <b>This ensures stability.</b>`,
                `Define an <b>Infrastructure as a Service (IaaS)</b> in a <b>cloud</b> (Azure, Google Cloud, AWS, etc.).
                <ul>
                <li>Robots running in VMs are less prone to errors due to hardware changes.</li>
                <li>Also, they can continue working even if there was any disruption in their physical centers, e.g., Coronavirus.</li></ul>`,
                `Control all robots from their Command Centers (Control Room, Orchestrator, etc.)`,
                `Develop all robots in Virtual Machines with the same screen resolution.`,
                `Configure the <b>Region</b> (Poland, the USA, Gemany, etc.) of the robot VM based on the process to automate.`,
                `Split the robots in small tasks that could be reused. This allows scalability and multi-robot per PC/VM.`,
                `Store <b>Master data</b> in Excels or Databases (<a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> is a free option). <b>No data must be hardcoded in the robots.</b>`,
                `Set a delay of 500ms between each action. This should be configurable.`,
                `Define a <i>try...catch</i> logic for all RPAs. This allows the next task to be processed. If there is a severe issue, send a notification.`,
                `Try multiple attempts if any <b>action</b> failed (3 to 5).`,
                `<b>Avoid manipulating Citrix, Remote Desktops or VMs from other PCs.</b> This reduces the performance and accuracy.`,
                `Track inline actions of each robot.`,                
                `Use Image Recognition or Coordinates as the last resources. They tend to be highly inaccurate.`,
                `Use the Recorders only for small pieces. Do not automate full tasks. Also, validate the code generated is not using Image Recognitions or Specific locations.`,
                `Create backups (clones) of the final production version of the RPA. This one would be useful if there is any disruption in the service and can be easily start.`
            ]
        }]
    },
    {
        "section": "Requirements gathering",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Identify <b>Low hanging fruits</b> and <b>Quick wins</b> for the first steps. Later, work in the Must-do Improvements and Long-term Improvements (<a href="https://www.uipath.com/rpa/academy/training">more info</a>).`,
                `Pre-screen 3rd party websites. Some websites have some regulations that block automations. Until, the full contract has been carefully read, no agreement should be reached.`,
                `Define an owner for every application, in order to contact in case of any issue or query.`,
                `Collect all authorizations, authentications, performance, expected response time, scalability expected, SLAs, etc. Nothing should be over-seen.`,
                `Collect all information where the process was running:
                <ul>
                <li><b>Region</b> (Poland, the USA, Spain, Germany, etc.)</li>
                <li>Language (en-US, es-ES, en-UK, pl-PL, etc.)</li>
                <li>List Separator <b>(, or ;)</b></li>
                <li>Decimal separator <b>(. or ,)</b></li>
                <li>CPU, RAM, etc.</li>
                </ul>`,
                `Identify if there is any <b>CSV</b> to process and what the <b>List Separator (, or ;)</b> is in the device. This must be the same for the robot.`,
                `Document average execution time of all applications. If there is any historical data of any pick. It should be documented with its details.`,
                `Investigate if any app, website or software is under development or constant changes. If there is any, it must not be automated until the changes have stopped.`,
                `Do not consider projects where there are connectivity issues or multiple networks. Most RPA solutions cannot work offline. They have a requirement of constantly validating its license.`,
                `Define and get approvals for Test, UAT and Production environment for all tools in advance. Ensure these tools look the same and have the same IDs to avoid unnecessary reconfigurations when they are moved to Production. <i>SAP, for example, can have different IDs for the same controls in Prod and Test.</i>`,
                `Consider projects that require VPN with <b>soft tokens (digital in the PCs/VMs)</b> as the medium-term developments.`,
                `Consider projects that require VPN with <b>hard tokens or MFAs</b> as long-term improvements.`
            ]
        }]
    },
    {
        "section": "Infrastructure",
        "notes": [`Suggested providers: Azure, AWS and Google Cloud.`],
        "practices": [{
            "title": "Cloud",
            "content": [
                `Advised basic infrastructure:
                <div class="table-responsive">
                <table class="table">
                    <caption style="caption-side: top!important;"><b>Command Center App</b> VM</caption>
                    <thead>
                        <tr>
                        <th>Processor</th>
                        <th>RAM</th>
                        <th>Storage</th>
                        <th>Network</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>8 core Intel Xeon Processor</td>
                        <td>16 GB</td>
                        <td>128 GB</td>
                        <td>10 GbE</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="table-responsive">
                <table class="table">
                    <caption style="caption-side: top!important;"><b>Command Center Database</b> VM</caption>
                    <thead>
                        <tr>
                        <th>Processor</th>
                        <th>RAM</th>
                        <th>Storage</th>
                        <th>Network</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>8 core Intel Xeon Processor</td>
                        <td>16 GB</td>
                        <td>128 GB</td>
                        <td>10 GbE</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="table-responsive">
                <table class="table">
                    <caption style="caption-side: top!important;"><b>Template VM for the <b>robots</b></caption>
                    <thead>
                        <tr>
                        <th>Processor</th>
                        <th>RAM</th>
                        <th>Storage</th>
                        <th>Network</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>4 virtual CPU (vCPU) or Logical Processor with 1.2 to 1.5 GHz speed per vCPU</td>
                        <td>8 GB</td>
                        <td>64 GB</td>
                        <td>1 GbE</td>
                        </tr>
                    </tbody>
                </table>
                </div>`,
            ]
        }]
    },
    {
        "section": "RPA platforms",
        "notes": [],
        "practices": [{
                "title": "Command Centers",
                "content": [
                    `RPA Command Center and Clients should be on the same network.`
                ]
            },
            {
                "title": "Automation Anywhere",
                "content": [
                    `Limit the usage of <b>WorkFlows</b> or <b>MetaBots</b>. None of them is supported in A2019.
                    <ul>
                    <li>
                        <i>WorkFlows cannot be scheduled from the Control Room.</i>
                    </li>
                    </ul>`,
                    `Predefine Dictionaries (Key, Value) in AA11.3+ structure. They cannot be modified during runtime.`,
                    `For On-Premises automations. There should be one accessible user with Admin Rights. From time to time, any service can stop either in the PC/VM or the Control Room and they must be restarted manually.
                    <ul>
                    <li>
                        <i><b>Tip.</b> Check the Task Scheduler to verify if all AA services are running.</i>
                    </li>
                    </ul>`
                ]
            }
        ]
    },
    {
        "section": "Desktop apps",
        "notes": [`* Some tricky situations can be handled by <a href="https://www.uipath.com/product/platform/ai-computer-vision-for-rpa" target="_blank">Computer Vision</a> with UiPath.`],
        "practices": [{
                "title": "General",
                "content": [
                    `The resolution must be exactly the same in Test, UAT and Production.`,
                    `Run all apps in <b>maximized (full screen)</b> for the best performace.`,
                    `Close all apps ran by the robot at the end process. Ideally, using a <i>bat</i> for killing the tasks.`,
                    `Do not run more than 2 or 3 windows per action. Too many windows can cause instability or confusions for the RPAs.`,
                    `Ensure that the screen, window, message, etc. Is fully visible and loaded. Either you can add a delay or ensure through other ways.`,
                    `Access dropdowns through their IDs. Store the expected values in a database. Therefore, if there is any change, it would be faster to change.`
                ]
            },
            {
                "title": "Microsoft technologies (Windows Forms, UWP and WPF)",
                "content": [
                    `Use <b>MetaBots</b> in <b>Automation Anywhere 10 or 11</b> for automating <b>WPF/UWP</b> apps. <i>There is no alternative for A2019 at this point of time (Mar 2020).</i>`,
                    `Advisable, re-write non-3rd party <a href="https://3.bp.blogspot.com/-eqX4iRh0JdE/UKdJJFzFbII/AAAAAAAAATQ/toLEV8RoSXI/s1600/WPFDynamicTab.png" target="_blank">Tabbed <b>WPF</b> apps</a>. All tabs must be visible always, even if it is only one. If you ignore this, the content inside of the tab is going to inaccessible by the RPAs (until you open a new tab).`
                ]
            },
            {
                "title": "Java",
                "content": [
                    `In the case of <i>UiPath</i>. Install its <a href="https://docs.uipath.com/studio/docs/java-extension" target="_blank" target="_blank">Java Access Bridge for custom JRE</a>. This is only compatible with AWT apps (e.g. Java Swing, Oracle Forms, Fujitsu JBK).</i>`,
                    `In the case of <i>Automation Anywhere</i>. Follow this <a href="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/customizing-an-automation-client/using-java-settings.html" target="_blank">tutorial</a>.`,
                ]
            }
        ]
    },
    {
        "section": "Websites",
        "notes": [`<i>Unclickable links could mean JavaScript created links. Inspect the source code. If this is the case, a JS injection is required.</i>`,`<i>Challenging situations can be refactored in small projects with <a href="https://www.selenium.dev/" target="_blank">Selenium</a>.</i>`],
        "practices": [{
            "title": "General",
            "content": [
                `Use IDs for identifying controls.`,
                `Ensure all internal websites have IDs in the required controls (buttons, inputs, etc.). The lack of them can create inaccuracies.`,
                `Access <i>selects</i> through their IDs. Store the expected values in a database. Therefore, if there is any change, it would be faster to adapt.`
            ]
        },{
            "title": `<a href="https://dotnet.microsoft.com/apps/aspnet/web-forms" target="_blank">ASP.NET Web Forms</a>`,
            "content": [
                `If you have access to the source code. Set <i><b>ClientIDMode="Static"</b></i> in all controls in ASP.NET 4+.
                <ul><li><i>If you have a lower version, you might need to Map all possible IDs in a database. Loop through them and test all possibilities. If there is any exception, this needs to be notified immediately.</i></li></ul>`
            ]
        }]
    },
    {
        "section": "Excels processing",
        "notes": [`It's advisable to process large and/or complex Excels by non-RPA solutions. RPAs tend to be quite slow and can take considerable amounts of time. An option is to write a console app with <a href="https://github.com/ClosedXML/ClosedXML">ClosedXML</a>.`],
        "practices": [{
            "title": "Automation Anywhere",
            "content": [
                `Avoid reading multiple <i>Excels Sessions</i> at the same time in loops. Limit it to one per loop. <i>If you need a second Excel Session inside of a loop, consider using one as a <a href="https://rpaknowledge.com/automation-anywhere-database-command-excel/" target="_blank">database</a>.</i>`
            ]
        }]
    },
    {
        "section": "VBA Macros",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Do not switch Macros Logic to RPAs Logic. Consider this situation only in extreme cases or on-demand. `,
                `Document average execution times. This avoids to kill any Macro in the middle of a long process.`,
                `Remove all <b>Dialogs</b> (<a href="https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/msgbox-function" target="_blank">MsgBox</a> or <a href="https://docs.microsoft.com/en-us/office/vba/api/excel.application.inputbox" target="_blank">InputBox</a>). They can break the RPAs in most of the cases. If they are mandatory, you must implement new logic. You can write it in RPAs, databases, external files, etc.`
            ]
        }]
    },
    {
        "section": "Authentication",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Create a policy that general mailboxes and robots' PCs/VMs should have non-expiring passwords. If it's impossible, preconfigure a robot to send a reminder and document this situation.`,
                `Use the credential vault manager of the RPA solutions by default.`,
                `In the case of .NET solutions. Use the <i>app.config or web.config</i> encrypted. You can keep a backup copy unencrypted for testing purposes.`,
                `In the case of Java apps. Store the data in the <i>web.xml, .configuration, AppConfig.xml</i>, etc.`,
                `Ensure no passwords are stored in logs or displayed in GUIs.`,
                `Identify all apps that need authentication and ensure the re-login time is assessed.`,
                `Notify the team immediately if any app becomes unresponsive while login after some time (check in the Task Scheduler if it's actually unresponsive). `
            ]
        }]
    },
    {
        "section": "Volume to process",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Document the volume of transactions for every process (daily, weekly, etc.). Many times, this is an over-seen point.`,
                `Document the response time of the macros, websites, etc. This would help in the area of creating approximations for execution.`,
            ]
        }]
    },
    {
        "section": "Documents processing",
        "notes": [],
        "practices": [{
            "title": "General",
            "content": [
                `Document all actions performed based on the files. For example, if you're reading an Excel, identify how many columns are going to be used and how many actions are going to be taken.`
            ]
        },{
            "title": "Scanned documents",
            "content": [
                `Transform all PDFs or Word documents to <b>TIFF</b>. This ensures no metadata corrupts their processing in IQ Bots (AA, for instance). <i>In the case of .NET developments, you can use <a href="https://github.com/dlemstra/Magick.NET" target="_blank">ImageMagick.NET</a> with <a href="https://www.ghostscript.com/">GhostScript</a></i>.`,
                `Identify all documents that could be encrypted and decrypt in advance. You could partially automate this task with <a href="http://qpdf.sourceforge.net" target="_blank">QPDF</a>.`
            ]
        }]
    },
    {
        "section": "Logs",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Store all actions performed by the RPA, including errors, the CPU consumption, etc.`,
                `Define a logic for the logs (<a href="logsTemplate.db">template</a> in SQLite), for example:
                <table class="table">
                    <tr>
                    <thead>
                        <th>
                            Robot ID
                        </th>
                        <th>
                            Robot PC
                        </th>
                        <th>
                            Robot Task
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Starting Time
                        </th>
                        <th>
                            Ending Time
                        </th>
                        <th>
                            SLA
                        </th>
                    </thead>
                    </tr>
                </table>`,
                `Consider this as the minimal status: <i>Running, Finished and Stopped</i>.`
            ]
        }]
    },
    {
        "section": "Notifications",
        "notes": [`The asynchronous task should check constantly the CPU utilization. If it is beyond 90%, it must send a notification.`],
        "practices": [{
            "title": "",
            "content": [
                `Send the following e-mails:
                <ol>
                    <li>Each time a robot started.</li>
                    <li>Each time a robot finished.</li>
                    <li>To the manager at the end of the day with the performance results (SLAs).</li>
                </ol>`,
                `Ensure that only authorized e-mails receive the notification (mainly company's domain).`,
                `Create an asynchronous task can be set in the Task Scheduler in order to monitor if the RPA is working. If the RPA solution stopped, it should send a notification by itself.
                <ul>
                   <li>This task can monitor if there was any connectivity issue and notify the support team. Most RPA solutions cannot continue working if the connection was lost. Generally, in extreme situations, the bots need to be restored manually.</li>
                </ul>`
            ]
        }]
    },
    {
        "section": "ERPs",
        "notes": [],
        "practices": [{
            "title": "SAP",
            "content": [
                `Enable SAP Scripting. If SAP Scripting is not enabled, the recognition of controls can be very poor and inefficient.`,
                `Use SAP recognition controls provided by the RPAs as the default option when they're available.`,
                `Map 3 kernels maximum per PC/VM. More Kernels can bring slowness in the login.`,
                `Use the "Find" option to search by field name. In this way, the field will always appear on the top of the table.`,
                `Consider to use SAP layout creation, if you require any SAP download. This allows you to create a list of columns to be downloaded.`
            ]
        }]
    },
    {
        "section": "Citrix, Remote Desktops or Virtual Machines",
        "notes": [],
        "practices": [{
            "title": "UiPath",
            "content": [
                `Use <a href="https://www.uipath.com/product/platform/ai-computer-vision-for-rpa" target="_blank">Computer Vision</a> to identify controls based on patterns. This solution is more stable that identifying images or typical OCRs.`
            ]
        }]
    }
];
