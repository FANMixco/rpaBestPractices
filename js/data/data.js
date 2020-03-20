let data = [{
        "section": "Basics",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Build a <a href="https://www.uipath.com/rpa/center-of-excellence" target="_blank">Center of Excellence (CoE)</a>. Generally, it's seen as an expensive expense and shouldn't be the case, it's more expensive when it's not implemented.`,
                `All apps should be pre-screened and tested with different RPA platforms before choosing the final one. <b>This ensures stability based on your solutions.</b>`,
                `Define an <b>Infrastructure as a Service (IaaS)</b> in a <b>cloud</b> (Azure, Google Cloud, AWS, etc.). <i>Robots running in VMs are less prone to errors due to hardware changes. Also, they can continue working even if there was any disruption in their physical centers, e.g., Coronavirus.</i>`,
                `Control all robots from their Command Centers (Control Room, Orchestrator, etc.)`,
                `Develop all robots in Virtual Machines with the same screen resolution.`,
                `Configure the <b>Region</b> (Poland, the USA, Gemany, etc.) of the robot VM based on the process to automate.`,
                `Try splitting the bots in small tasks that could be reused. This allows scalability and multi-bot per PC.`,
                `Master data should be stored in Excels or Databases (<a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> is a free option). <b>No data must be hardcoded in the bots.</b>`,
                `Bot should try multiple attempts per action if something didn't work as expected. Ideally, a delay of 500ms should be set and should be configurable.`,
                `Bots should have a try catch logic, if there is an issue, it must notify the team to react, not to stopped the full process and carry on with the next task to process.`,
                `<b>Avoid manipulating Citrix, Remote Desktops or VMs from other PCs.</b> This reduces the performance and accuracy.`,
                `Track inline actions of each robot.`,
                `Use Image Recognition or Coordinates as the last resources. They tend to be highly inaccurate.`,
                `Use the Recorders only for small pieces of the automations. Don't automate full tasks. Also, validate the code generated is not using Image Recognitions or Specific locations.`,
                `Create backups (clones) of the final production version of the RPA.`
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
                `3rd party websites must be pre-screened. Some websites have some regulations that block automations. Until, the full contract has been carefully read, no agreement should be reached.`,
                `Define an owner for every application, in order to contact in case of any issue or query.`,
                `Collect all authorizations, authentications, performance, expected response time, scalability expected, SLAs, etc. Nothing should be over-seen.`,
                `Collect all information where the process was running, <b>Region</b> (Poland, the USA, Spain, Germany, etc.), Language, <b>List Separator (, or ;)</b>, <b>Decimal separator (. or ,)</b>, CPU, RAM, etc.`,
                `Identify if there is any <b>CSV</b> to process and what the <b>List Separator (, or ;)</b> is in the device. This must be the same for the robot.`,
                `Document average execution time of all applications. If there is any historical data of any pick. It should be documented with its details.`,
                `Investigate if any app, website or software is under development or constant changes. If there is any, it must not be automated until the changes have stopped.`,
                `Do not consider projects where there are connectivity issues or multiple networks. Most RPA solutions cannot work offline. They have a requirement of constantly validating its license.`,
                `Define and get approvals for Test, UAT and Production environment for all tools in advance. Ensure these tools look the same and have the same IDs to avoid unnecessary reconfigurations when they are moved to Production. <i>SAP, for example, can have different IDs for the same controls in Prod and Test.</i>`,
                `Projects that require VPN with <b>soft tokens (PC digital)</b> should be considered on the medium term.`,
                `Projects that require VPN with <b>hard or mobile tokens</b> should be considered as long-term improvements.`
            ]
        }]
    },
    {
        "section": "Infrastructure",
        "notes": [],
        "practices": [{
            "title": "Cloud",
            "content": [
                `Suggested basic infrastructure:
            <ul>
            <li>
                One VM for the <b>Command Center App</b>.
                <table class="table">
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
            </li>
            <li>
                One VM for the <b>Command Center Database</b>.
                <table class="table">
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
                </table>`,
                `One <b>template</b> VM for the <b>bot PC</b>. <i>This one would be replicated to all new bots.</i>
                <table class="table">
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
            </ul>`,
            `Suggested providers: Azure, AWS and Google Cloud.`
            ]
        }]
    },
    {
        "section": "Logs",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Logs should contain all actions performed including errors, CPU consumption, etc.</li>
                <li>
                Define a logic for the logs (<a href="logsTemplate.db">template</a> in SQLite), for example:
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
                `Minimal status: Running, Finished and Stopped`
            ]
        }]
    },
    {
        "section": "Desktop apps",
        "notes": [`* Some tricky situations can be handled by <a href="https://www.uipath.com/product/platform/ai-computer-vision-for-rpa" target="_blank">Computer Vision</a> with UiPath.`],
        "practices": [{
                "title": "General",
                "content": [
                    `The resolution must be exactly the same in Test, UAT and Production.`,
                    `Run all apps in <b>maximized (full screen)</b> for the best performace.`,
                    `Close all apps ran by the bot at the end process. Ideally, using a <i>bat</i> for killing the tasks.`,
                    `Don't run more than 2 or 3 windows per action. Too many windows can cause instability or confusions for the RPAs.`,
                    `Ensure that the screen, window, message, etc. Is fully visible and loaded. Either you can add a delay or ensure through other ways.`,
                    `Dropdowns should be accessible through their IDs. This information should be easy to modify from a database. Therefore, if there is any change, it would be faster to change.`
                ]
            },
            {
                "title": "Microsoft technologies (Windows Forms, UWP and WPF)",
                "content": [
                    `WPF/UWP apps can only be automated with <b>MetaBots</b> in Automation Anywhere 10 or 11.`,
                    `Non-3rd party <a href="https://3.bp.blogspot.com/-eqX4iRh0JdE/UKdJJFzFbII/AAAAAAAAATQ/toLEV8RoSXI/s1600/WPFDynamicTab.png" target="_blank">Tabbed <b>WPF</b> apps</a> must be re-written. All tabs must be always visible even if it's only one. If you ignore this, the content inside of the tab is going to inaccessible by the RPAs (until you open a new tab).`
                ]
            },
            {
                "title": "Java",
                "content": [
                    `UiPath allows to install a Java Access Bridge for custom JRE for automating them (<a href="https://docs.uipath.com/studio/docs/java-extension" target="_blank">more info</a>). <i>This is a mandatory step. It's not fully reliable certain controls might not be available. Only compatible with AWT apps (e.g. Java Swing, Oracle Forms, Fujitsu JBK).</i>`,
                    `In the case of Automation Anywhere, you need to follow this <a href="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/customizing-an-automation-client/using-java-settings.html" target="_blank">tutorial</a> first.`,
                ]
            }
        ]
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
                    `Limit the usage of <b>WorkFlows</b> or <b>MetaBots</b>. None of them is supported by A2019.
                    <ul>
                    <li>
                        WorkFlows cannot be scheduled from the Control Room.
                    </li>
                    </ul>`,
                    `WPF and UWP apps must be detected with MetaBots. There is no alternative for A2019 at this point of time (Mar 2020).`,
                    `Dictionaries (Key, Value) in AA11.3+ must be predefined, they cannot be extended in real time.`,
                    `In all automations on-Premises. There should be an user with admin rights. From time to time any service can stop either in the PC or the control room and they must be restarted manually. Check the Task Scheduler to see if all AA services are running.`
                ]
            }
        ]
    },
    {
        "section": "Websites",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Use IDs for identifying controls.`,
                `If you have an "unclickable/unfindable" link, check the source code of the website. In some situations, certain links can run JavaScript code in order to download files.`,
                `For better support, you can use Selenium for building small automations.`,
                `For websites built on <b><a href="https://dotnet.microsoft.com/apps/aspnet/web-forms" target="_blank">ASP.NET Web Forms</a></b>. The IDs tend to be dynamic in most of the cases and this can impact the RPA. If you have access to the source code set <i><b>ClientIDMode="Static"</b></i> to all controls in ASP.NET 4+. <i>If you have a lower version, you might need to Map the possible IDs in a Database and Loop through them to test all possibilities. If there is an exception, this should be immediately notified to the support team via Email.</i>`,
                `All controls from internal websites must have IDs. The lack of them can create inaccuracies.`,
                `Selects must be accessible through their IDs. This information should be easy to modify from a database. Therefore, if there is any change, it would be faster to adapt.`
            ]
        }]
    },
    {
        "section": "Excels processing",
        "notes": [`* Large and complex Excels should be procesed by non-RPA services. RPAs tend to be quite slow and can take considerable time. An option is to write a console app with <a href="https://github.com/ClosedXML/ClosedXML">ClosedXML</a>.`],
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
                `Only if there is a requirement from the client, Macros logic should be switched to RPA logic.`,
                `Average execution times must be documented. This allows to kill any Macro in the middle of a long process.`,
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
                `General mailboxes and Robots' PCs should have non-Expiring passwords. If the client doesn't agree, preconfigure a Robot to send a reminder and document all this information.`,
                `Any process that involves Multi-Factor Authentication shouldn't be consider in the beginning. You might need to reach agreements to remove it for robo-users.`,
                `Use the credential vault manager of the RPA solutions by default.`,
                `In the case of .NET solutions use the app.config/web.config encrypted. You can keep a backup copy unencrypted for test purposes.`,
                `In the case of Java apps. The info can be store in the web.xml, .configuration, AppConfig.xml, etc.`,
                `Ensure no passwords are stored in logs or displayed in GUIs.`,
                `Identify all apps that need authentication and ensure the re-login time is assessed.`,
                `If an app becomes unresponsive (check task scheduler) after certain time when it's trying to login. Notify the team immediately.`
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
                `PDFs or Word documents must be transformed into <b>TIFF</b>. This ensures no metadata corrupts their processing. <i>In the case of .NET developments, you can use <a href="https://github.com/dlemstra/Magick.NET" target="_blank">ImageMagick.NET</a> with <a href="https://www.ghostscript.com/">GhostScript</a></i>.`,
                `Identify all documents that could be encrypted and decrypt in advance. You could partially automate this task with <a href="http://qpdf.sourceforge.net" target="_blank">QPDF</a>.`
            ]
        }]
    },
    {
        "section": "Notifications",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `An asynchronous task can be set in the Task Scheduler in order to monitor if the RPA is working. If the RPA solution stopped, it should send a notification by itself.
                <ul>
                   <li>This task can monitor if there was any connectivity issue and notify the support team. Most RPA solutions cannot continue working if the connection was lost. The tasks generally need to be restored manually.</li>
                </ul>`,
                `An asynchronous task should check constantly the CPU utilization if there is beyond 90% a notification must be sent.`,
                `An email can be sent at the beginning of each bot.`,
                `An email confirmation must be sent each time a robot finished.`,
                `An email report should be sent at end of the day to the manager to check the performance of the bots`,
                `Ensure that only authorized emails can be sent the notification. Double check for external emails.`
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
                `SAP could have multiple kernels mapped. This can bring slowness in the login. It's suggested to have mapped a maximum of 3 kernels per PC.`,
                `If you require SAP downloads, you can consider to use SAP layout creation. This allows you to create a list of columns to be downloaded.`,
                `Use the "Find" option to search by field name. In this way, the field will always appear on the top of the table.`
            ]
        }]
    },
    {
        "section": "Citrix, Remote Desktops or Virtual Machines",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Some solutions like UiPath have specialized services for detecting controls based on patterns. It's called AI <a href="https://www.uipath.com/product/platform/ai-computer-vision-for-rpa" target="_blank">Computer Vision</a>.`
            ]
        }]
    }
];