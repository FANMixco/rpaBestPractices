let data = [{
        "section": "Basics",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Build a <a href="https://www.uipath.com/rpa/center-of-excellence" target="_blank">Center of Excellence (CoE)</a>.<ul><li><b>⚠️ Warning.</b> It's typically considered a high-cost, but it's exceedingly expensive when it's unimplemented from the beginning.</li></ul>`,
                `Pre-screen all apps and test different RPA platforms before choosing the final one. <b>This ensures stability.</b>`,
                `Define an <b>Infrastructure as a Service (IaaS)</b> in a <b>cloud</b> (Azure, Google Cloud, AWS, etc.).
                <ul>
                <li>Robots running in VMs are less prone to errors due to hardware changes.</li>
                <li>Robots can continue working even if there was any disruption in their physical centers, e.g. Coronavirus.</li></ul>`,
                `Control all robots from their Command Centers (Control Room, Orchestrator, etc.)`,
                `Develop all robots in Virtual Machines with the same screen resolution.`,
                `Configure the <b>Region</b> (Poland, the USA, Germany, etc.) of the robot's VM/PC as it was in the original process's PC. The same applies to certain software like <b>SAP</b>.<ul>
                <li>
                <b>⚠️ Warning.</b> If this is different, it can cause serious troubles.</li></ul>`,
                `Split the robots in small tasks that could be reused. This allows scalability and multi-robot per PC/VM.`,
                `Store <b>Master data</b> in Excels or databases (<a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> is a free option). <b>No data must be hardcoded in the robots.</b>`,
                `Track inline actions of each robot, storing them in a log.`,
                `Set a delay of 500ms between each action. This should be configurable from a DB.`,
                `Define a <i>try…catch</i> logic for all steps in the RPAs.
                <ul><li>This allows the next task to be processed for minor problems. Remember to log it.</li><li>For severe issues or stucked robots (after 3 full attempts), send a notification.</li></ul>`,
                `Try multiple attempts if any <b>action</b> failed (3 to 5) before going to the next step or full attempt.`,
                `<b>Avoid manipulating Citrix, Remote Desktops or VMs from other PCs.</b> This reduces the performance and accuracy.`,
                `Use Image Recognition or Coordinates as the last resources. They tend to be highly inaccurate.`,
                `Use the Recorders only for small pieces. Do not automate full tasks. Also, validate the code generated is not using Image Recognitions or Specific locations.`,
                `Create backups (clones) of the final production version of the RPA. This one would be useful if there is any disruption in the service and can be easily start.`,
                `Use a dashboard to monitor all RPAs. If they are working, paused, stopped, failed, etc. It can be the default of the chosen platform.`,
                `Create a Load Balancing configuration (1 passive and 1 active RPA) for Business Continuity Plans. This might need a special agreement with the RPA provider.`,
                `Advisable, create a process that allows the robot to restart its work at a certain point when it failed or stopped.`
            ]
        }]
    },
    {
        "section": "Requirements gathering",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Identify <b>Low hanging fruits</b> and <b>Quick wins</b> for the first steps. Later, work in the <b>Must-do Improvements</b> and <b>Long-term Improvements</b> (<a href="https://www.uipath.com/rpa/academy/training">more info</a>).`,
                `Identify if the process to be automated is <b>Attended</b>, <b>Unattended</b> or a mix (<a href="https://www.ibm.com/blogs/cloud-computing/2018/11/19/attended-unattended-rpa-bots/" target="_blank">more info</a>).<ul><li>
                <b>💡 Tip.</b> You can agree to this in collaboration between the IT department and operations.</li></ul>`,
                `Pre-screen 3rd party websites.<ul><li><b>⚠️ Warning.</b> Some websites have some regulations that block automations or web scraping. Read them carefully. A very good example is <a href="https://www.linkedin.com/legal/user-agreement?trk=hb_ft_userag#dos" target="_blank">LinkedIn</a>.</li></ul>`,
                `Define an owner for every application, in order to contact in case of any issue or query.`,
                `Collect all authorizations, authentications, performance, expected response time, scalability expected, SLAs, etc. Nothing should be over-seen.`,
                `Collect all information where the process was running:
                <ul>
                <li><b>Region</b> (Poland, the USA, Spain, Germany, etc.)</li>
                <li>Language (en-US, es-ES, en-UK, pl-PL, etc.)</li>
                <li>List Separator <b>(, or ;)</b>. This is important for any <b>CSV processing</b></li>
                <li>Decimal separator <b>(. or ,)</b></li>
                <li>CPU, RAM, etc.</li>
                </ul>`,
                `Record videos of the entire processes. <i>BRDs and complex documentations are not enough for the support team.</i>`,
                `Create the flows of the processes and double-check if they are repetitive.`,
                `Document in detailed the following points:
                <ul>
                <li>All known exceptions. You can create a special document for them.</li>
                <li>Average execution time of all applications (macros, websites, etc.). If there is any historical data of any pick.</li>
                <li>Volume of transactions for every process (daily, weekly, etc.). Typically, it is an over-seen point.</li>
                </ul>`,
                `Investigate if any app, website or software is under development or constant changes. If there is any, it must not be automated until the changes have stopped.`,
                `Do not consider projects where there are connectivity issues or multiple networks.<ul><li><b>⚠️ Warning.</b> Most RPA solutions cannot work offline. Also, they keep validating its license with the Command Center.</li></ul>`,
                `Define and get approvals for Test, UAT and Production environments for all tools in advance.`,
                `Ensure all apps are the same (versions) and look alike. In order to have the same IDs and avoid unnecessary reconfigurations in Production. <i>SAP, for example, can have different IDs for the same controls in Prod and Test.</i>`,
                `For projects that require VPNs:
                <ul>
                <li><b>Soft tokens</b> (apps installed in the PCs/VMs) should be considered as the medium-term developments.</li>
                <li><a href="https://assets.infosecurity-magazine.com/content/float/61e15d2b-465a-472c-9f0e-16091b40beef.jpg" target="_blank">Hard tokens</a></b> or <b><span data-toggle="tooltip" title="Multi-factor Authentication">MFAs</span></b> should be considered as Long-term Improvements.</li>
                </ul>`
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
                        <td>128 GB + 256 GB (Data)</td>
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
                        <td>4 virtual CPU (vCPU) with 1.2 to 1.5 GHz speed per vCPU</td>
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
                    <b>⚠️ Warning.</b> WorkFlows cannot be scheduled in the Control Room.
                    </li>
                    </ul>`,
                    `In AA11.3+. Predefine all Dictionaries' Keys while creating the robot.<ul>
                    <li>
                    <b>⚠️ Warning.</b> You cannot add new Keys on Runtime.</li>
                    </ul>`,
                    `Define at least, one user with full <b>Admin Rights</b>.
                    <ul>
                    <li>
                    Seldomly, any service can stop either in the robot's PC/VM or the Control Room, and they must be restarted manually.
                    </li>
                    <li>
                        <b>💡 Tip.</b> Check the <i>Task Manager (Ctrl+Alt+Del)</i> and verify if all AA services are running.
                    </li>
                    </ul>`,
                    `Must acquire new servers/VMs in order to perform Control Room migrations.<ul>
                    <li>
                    <b>⚠️ Warning.</b> There are no available options to migrate two different versions of the Control Room on the same server.</li>
                    </ul>`
                ]
            },
            {
                "title": "UiPath",
                "content": [
                    `Use the <a href="https://docs.uipath.com/studio/docs/robotic-enterprise-framework" target="_blank">Robotic Enterprise Framework</a> as a <b>template</b> for all your RPAs.`
                ]
            }
        ]
    },
    {
        "section": "Desktop apps",
        "notes": [`Some unfindable controls can be partially access with UiPath's <a href="https://www.uipath.com/product/platform/ai-computer-vision-for-rpa" target="_blank">Computer Vision</a>.`, `<b>⚠️ Warning.</b> <a href="https://upload.wikimedia.org/wikipedia/commons/e/ec/Example_of_a_ribbon_%28user_interface_element%29.png" target="_blank">Ribboned Apps</a> can cause <a href="https://stackoverflow.com/questions/56128748/ui-automation-ribbon-control-and-automation-anywhere-11-in-wpf" target="_blank">multiple issues</a>. Only the last tab can be recognized properly by most of the RPAs. Check them in advance since Image Recognition might be your only option.`],
        "practices": [{
                "title": "General",
                "content": [
                    `The resolution must be exactly the same in Test, UAT and Production.`,
                    `Run all apps in <b>maximized (full screen)</b> for the best performace.`,
                    `Close all apps ran by the robot at the end process. Ideally, using a <i>bat</i> for killing the tasks.`,
                    `Do not run more than 2 or 3 windows per action. Too many windows can cause instability or confusions for the RPAs.`,
                    `Ensure that the screen, window, message, etc. Is fully visible and loaded. Either you can add a delay or ensure through other ways.`,
                    `Access dropdowns through their IDs. Store the expected values in a database. Therefore, if there is any change, it would be faster to change.`,
                    `Advisable, if the RPA has a <i>Smart</i> recorder (it recognizes IDs), you can use it for small automations.`
                ]
            },
            {
                "title": "Microsoft technologies (Windows Forms, UWP and WPF)",
                "content": [
                    `Use <b><a href="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/metabots/getting-started/understanding-metabot-designer.html" target="_blank">MetaBots</a></b> in <b>Automation Anywhere 10 or 11</b> for automating <b>WPF/UWP</b> apps efficiently. A common example are <a href="https://upload.wikimedia.org/wikipedia/commons/e/ec/Example_of_a_ribbon_%28user_interface_element%29.png" target="_blank">Ribboned Apps</a>.
                        <ul><li><b>⚠️ Warning.</b> There is no alternative for A2019, at this point in time (Mar 2020). Image Recognition is your only option if you have any app of this kind.</li></ul>`,
                    `Advisable, re-write non-3rd party <a href="https://3.bp.blogspot.com/-eqX4iRh0JdE/UKdJJFzFbII/AAAAAAAAATQ/toLEV8RoSXI/s1600/WPFDynamicTab.png" target="_blank">Tabbed <b>WPF</b> apps</a>. All tabs must be visible always, even if it is only one.
                    <ul><li><b>⚠️ Warning.</b> If you ignore this, the content inside of the tab is going to inaccessible by the RPAs (until you open a new tab).</li></ul>`
                ]
            },
            {
                "title": "Java",
                "content": [
                    `In the case of <b>UiPath</b>. Install its <a href="https://docs.uipath.com/studio/docs/java-extension" target="_blank" target="_blank">Java Access Bridge for custom JRE</a>. This is only compatible with AWT apps (e.g., Java Swing, Oracle Forms, Fujitsu JBK).</i>`,
                    `In the case of <b>Automation Anywhere</b>. Follow this <a href="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/customizing-an-automation-client/using-java-settings.html" target="_blank">tutorial</a>.`,
                ]
            }
        ]
    },
    {
        "section": "Websites",
        "notes": [`Unclickable links could mean JavaScript created links. Inspect the source code. If this is the case, a JS injection is required.`,`Challenging situations can be refactored in small projects with <a href="https://www.selenium.dev/" target="_blank">Selenium</a>.`],
        "practices": [{
            "title": "General",
            "content": [
                `Run the browser in <b>maximized (full screen)</b> for the best performace.`,
                `Minimize the usage of Internet Explorer.`,
                `Use IDs for identifying controls.`,
                `Ensure all internal websites have IDs in the required controls (buttons, inputs, etc.). The lack of them can create inaccuracies.`,
                `Access <i>selects</i> through their IDs. Store the expected values in a database. Therefore, if there is any change, it would be faster to adapt.`,
                `Advisable, if the RPA has a recorder, you can use it for small automations.`
            ]
        },{
            "title": `<a href="https://dotnet.microsoft.com/apps/aspnet/web-forms" target="_blank">ASP.NET Web Forms</a>`,
            "content": [
                `If you have access to the source code. Set <i><b>ClientIDMode="Static"</b></i> in all controls in ASP.NET 4+.<br>
                <b>⚠️ Warning.</b> For lower versions or lacking of source code. You have two options:
                <ol>
                <li>Create a JavaScript script that alters its behavior and reassigns all IDs after it's fully loaded.</li>                
                <li>Map all possible IDs in a database. Loop through them and test all possibilities. If there is any exception, notify immediately, investigate and add it to the DB.</li>
                </ol>`
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
                `Create a policy for General Mailboxes and robots' PCs/VMs of non-expiring passwords.<ul><li>
                <b>💡 Tip.</b> If it's impossible, preconfigure a robot that sends a reminder and document this situation.</li></ul>`,
                `Use the credential vault manager of the RPA solutions by default.`,
                `In the case of .NET solutions. Use the <i>app.config or web.config</i> encrypted.`,
                `In the case of Java apps. Store the data in the <i>web.xml, .configuration, AppConfig.xml</i>, etc.`,
                `Ensure no passwords are stored in logs or displayed in GUIs.`,
                `Identify all apps that need authentication and ensure the re-login time is assessed.`,
                `Notify the team immediately if any app becomes unresponsive while login after some time (check in the Task Manager if it's actually unresponsive). `
            ]
        }]
    },
    {
        "section": "Volume to process",
        "notes": [],
        "practices": [{
            "title": "",
            "content": [
                `Advisable, split the information/data to process in small parts. This ensures stability and allows the process to be restarted at a certain point easily. If for any reason the robot failed.`,
            ]
        }]
    },
    {
        "section": "Document processing",
        "notes": [],
        "practices": [{
            "title": "General",
            "content": [
                `Document all actions performed based on the files. For example, if you're reading an Excel, identify how many columns are going to be used and how many actions are going to be taken.`
            ]
        },{
            "title": "Scanned documents",
            "content": [
                `Transform all PDFs or Word documents to <b>TIFF</b>. This ensures no metadata corrupts their processing (<a href="https://www.automationanywhere.com/products/iq-bot" target="_blank">IQ Bots</a> in AA, for instance).<ul><li>
                <b>💡 Tip.</b> In the case of .NET developments, you can do this with <a href="https://github.com/dlemstra/Magick.NET" target="_blank">ImageMagick.NET</a> and <a href="https://www.ghostscript.com/">GhostScript</a>.</li></ul>`,
                `Identify all documents that could be encrypted and decrypt them in advance.<ul><li>
                <b>💡 Tip.</b> You could partially automate this task with <a href="http://qpdf.sourceforge.net" target="_blank">QPDF</a>.</li></ul>`
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
                <div class="table-responsive">
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
                </table></div>`,
                `Consider these statuses as the minimal to have: <i>Running, Finished, Stopped and Failed</i>.`
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
            "title": "SAP GUI",
            "content": [
                `Enable <a href="https://docs.uipath.com/studio/docs/enabling-sap-gui-scripting" target="_blank">SAP GUI Scripting</a>.<ul><li><b>⚠️ Warning.</b> If SAP GUI Scripting is disabled, controls recognition can be very poor and inefficient.</li></ul>`,
                `Map 3 kernels maximum per PC/VM, more kernels bring slowness during the login.`,
                `Use the <b>Find option</b> to search by field name. In this way, the field will always appear on the top of the table.`,
                `Consider using SAP layout creation, if you require any SAP download. This creates a list of columns to download.`,
                `Advisable, use SAP recognition controls provided by the RPAs as your default option. If they're available, not all RPAs provide them.`
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
    },
    {
        "section": "Migration to the Cloud",
        "notes": [`Suggested providers: Azure, AWS and Google Cloud.`],
        "practices": [{
            "title": "",
            "content": [
                `Advisable, clone the PCs as new VMs, including the DB servers and RPA Command Centers. This saves a lot of time.`,
                `Define a new archicture with all PCs, Command Center, etc. Initially, it should be as close as possible to the on-premises one.`,
                `Choose a cloud provider that fit your business needs.`,
                `Enumerate all RPAs to move from on-premises to the cloud.`,
                `Define an owner for each RPA.`,
                `Identify all licensed software.<ul><li><b>⚠️ Warning.</b> Some software have special licenses for the clouds, e.g., <a href="https://www.microsoft.com/en-us/licensing/news/updated-licensing-rights-for-dedicated-cloud" target="_blank"> Microsoft Office</a>.</li></ul>`,
                `Get some extra licenses for the RPAs. They might be required until the cloud solution is fully functional.`,
                `Identify all configurations from the robots' PCs, for example:<ul>
                <li>Operating System (including version)</li>
                <li><b>Region</b> (Poland, the USA, Spain, Germany, etc.)</li>
                <li>Language (en-US, es-ES, en-UK, pl-PL, etc.)</li>
                <li>List Separator <b>(, or ;)</b>. This is important for any <b>CSV processing</b></li>
                <li>Decimal separator <b>(. or ,)</b></li>
                <li>CPU, RAM, etc.</li>
                </ul>`,
                `Replicate as close as possible the configuration in the VMs.`,
                `Identify internal apps and macros.<ul><li><b>⚠️ Warning.</b> They might need to be refactored with new connection strings related to the cloud.</li></ul>`,
                `Document all apps, including third party ones, websites, databases, shared drives, macros, services, etc.`,
                `Identify the architecture of the apps (x86, x64 or ARM). They must be the same in the VMs.<ul><li><b>⚠️ Warning.</b> Some apps have different features depending on the architecture (x86 and x64), e.g., <a href="https://docs.microsoft.com/en-us/office/client-developer/shared/compatibility-between-the-32-bit-and-64-bit-versions-of-office" target="blank">Microsoft Office.</a></li></ul>`,
                `Create individual VMs for each RPAs with minimal resources as in <i>Requirements gathering</i>.`,
                `Install the Command Center in a Virtual Machines.`,
                `SetUp and Configure the DB in a VM. It's nearly impossible to use PaaS for SQL DBs (verify with your provider).`,
                `BackUp and restore internal databases in a Test environment.`,
                `Verify there is connection among the VMs.<ul><li>
                <b>💡 Tip.</b> The <b>ping</b> command can be disabled by default. You can enable it from the Firewall.</li></ul>`,
                `Replicate the exact configuration with <b>Region</b> and all, in the new VMs.`,
                `Reinstall and configure:<ul><li>All required software in the new VM, for example, Microsoft Office, SAP, third party apps, etc.</li><li>RPA clients.</li></ul>`,
                `Refactor and test all internal apps and macros. Verify if all is working in the Test environment.`,
                `Create new test cases for the RPAs on the cloud with the refactored apps.`,
                `Change configurations robot by robot in the internal apps and test in production.`
            ]
        }]
    }
];
