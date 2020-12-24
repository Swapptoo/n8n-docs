(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1072:function(e,t,o){"use strict";o.r(t);var n=o(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"automate-product-feedback-with-typeform-airtable-and-trello-📈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#automate-product-feedback-with-typeform-airtable-and-trello-📈"}},[e._v("#")]),e._v(" Automate Product Feedback with Typeform, Airtable, and Trello 📈")]),e._v(" "),n("p",[e._v("Let's create your first workflow in n8n. We'll create a workflow that will add a new card to a  Trello board whenever a user submits a feedback score that is less than seven. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/791",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io.")]),e._v(" "),n("p",[e._v("Here's a video that will take you through the process of creating this workflow.")]),e._v(" "),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/NEuto0F41WY",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("You’ll need the following tools and resources to complete the tutorial:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("n8n")]),e._v(" — You can find details on how to install n8n on the "),n("RouterLink",{attrs:{to:"/getting-started/quickstart.html"}},[e._v("Quickstart")]),e._v(" page. Make sure that you start "),n("RouterLink",{attrs:{to:"/getting-started/quickstart.html#starting-n8n-with-tunnel"}},[e._v("n8n with tunnel")]),e._v(".")],1),e._v(" "),n("li",[n("strong",[e._v("Typeform account")]),e._v(" - You'll need to obtain the credentials for the Typeform Trigger node. You can find instructions on how to obtain them "),n("RouterLink",{attrs:{to:"/nodes/credentials/typeform/"}},[e._v("here")]),e._v(". You will also need to create a form to collect feedback with the following questions:\n"),n("ul",[n("li",[e._v("What is your name? "),n("em",[e._v("(Short Text)")])]),e._v(" "),n("li",[e._v("What is your email address? "),n("em",[e._v("(Email)")])]),e._v(" "),n("li",[e._v("Anything else you want to share? "),n("em",[e._v("(Long Text)")])]),e._v(" "),n("li",[e._v("What score would you like to give? "),n("em",[e._v("(Rating)")])])])],1),e._v(" "),n("li",[n("strong",[e._v("Airtable account")]),e._v(" - You'll need to obtain the API Key for the Airtable node. You can find instructions on how to obtain that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(". You will also need a table with the name 'Feedback' and the following fields:\n"),n("ul",[n("li",[e._v("Name "),n("em",[e._v("(Single line text)")])]),e._v(" "),n("li",[e._v("Email "),n("em",[e._v("(Email)")])]),e._v(" "),n("li",[e._v("Description "),n("em",[e._v("(Long text)")])]),e._v(" "),n("li",[e._v("Score "),n("em",[e._v("(Number)")])])])],1)]),e._v(" "),n("p",[e._v("Alternatively, you can copy "),n("a",{attrs:{href:"https://airtable.com/shrW5dABzpdEMLohU",target:"_blank",rel:"noopener noreferrer"}},[e._v("this base"),n("OutboundLink")],1),e._v(". Click on the "),n("em",[n("strong",[e._v("Copy base")])]),e._v(" button on the top right corner to copy the base in your account.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Trello account")]),e._v(" - You'll need to obtain the API Key, API Token, and the OAuth Secret for the Trello node. You can find instructions on how to obtain them "),n("RouterLink",{attrs:{to:"/nodes/credentials/Trello/"}},[e._v("here")]),e._v(". You will also need to create a new board in Trello.")],1)]),e._v(" "),n("h2",{attrs:{id:"building-the-workflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-the-workflow"}},[e._v("#")]),e._v(" Building the Workflow")]),e._v(" "),n("p",[e._v("This workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TypeformTrigger/"}},[e._v("Typeform Trigger")]),e._v(" - Start the workflow when a form receives a response")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")]),e._v(" - Set the workflow data")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")]),e._v(" - Store the data")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/IF/"}},[e._v("IF")]),e._v(" - Conditional logic to decide the flow of the workflow")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Trello/"}},[e._v("Trello")]),e._v(" - Create a card")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("NoOp")]),e._v(" - Do nothing (optional)")],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(371),alt:"The final workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_1-typeform-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeform-trigger-node"}},[e._v("#")]),e._v(" 1. Typeform Trigger node")]),e._v(" "),n("p",[e._v("We'll use the "),n("em",[e._v("Typeform Trigger")]),e._v(" node for starting the workflow. Add a "),n("em",[e._v("Typeform Trigger")]),e._v(" node by clicking on the + button on the top right of the Editor UI. Click on the "),n("em",[e._v("Typeform Trigger")]),e._v(" node under the section marked "),n("em",[n("strong",[e._v("Trigger")])]),e._v(".")]),e._v(" "),n("p",[e._v("Double click on the node to enter the Node Editor. Create credentials for the node by clicking on the "),n("em",[n("strong",[e._v("Select Credentials")])]),e._v(" dropdown list and selecting "),n("em",[n("strong",[e._v("Create New")])]),e._v(". Enter the credentials that you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(".")]),e._v(" "),n("p",[e._v("Select the form that you created from the "),n("em",[n("strong",[e._v("Form")])]),e._v(" dropdown list.  We'll let the other fields stay as they are.")]),e._v(" "),n("p",[e._v("Now save your workflow so that the webhook in the "),n("em",[e._v("Typeform Trigger")]),e._v(" node can be activated. Since you’ll be using the test webhooks while building the workflow, the node only stays active for 120 seconds after you click the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button.")]),e._v(" "),n("p",[e._v("After clicking on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button, submit a response to your form in Typeform. Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(372),alt:"Creating the Typeform Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("We'll use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("Set")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("Set")]),e._v(" node. Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select "),n("em",[n("strong",[e._v("String")])]),e._v(" from the dropdown list. Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field. Since the "),n("em",[n("strong",[e._v("Value")])]),e._v(" (name) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Typeform Trigger > Output Data > JSON > What is your name?")])]),e._v(" "),n("p",[e._v("Close the "),n("em",[n("strong",[e._v("Edit Expression")])]),e._v(" window. Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select "),n("em",[n("strong",[e._v("String")])]),e._v(" from the dropdown list. Enter "),n("code",[e._v("Email")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field. Since the "),n("em",[n("strong",[e._v("Value")])]),e._v(" (email) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Typeform Trigger > Output Data > JSON > What is your email address?")])]),e._v(" "),n("p",[e._v("Close the "),n("em",[n("strong",[e._v("Edit Expression")])]),e._v(" window. Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select "),n("em",[n("strong",[e._v("String")])]),e._v(" from the dropdown list. Enter "),n("code",[e._v("Description")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field. Since the "),n("em",[n("strong",[e._v("Value")])]),e._v(" (description) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Typeform Trigger > Output Data > JSON > Anything else you want to share?")])]),e._v(" "),n("p",[e._v("Close the "),n("em",[n("strong",[e._v("Edit Expression")])]),e._v(" window. Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select "),n("em",[n("strong",[e._v("Number")])]),e._v(" from the dropdown list. Enter "),n("code",[e._v("Score")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field. Since the "),n("em",[n("strong",[e._v("Value")])]),e._v(" (score) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". Delete the "),n("code",[e._v("0")]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field on the right. From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Typeform Trigger > Output Data > JSON > What score would you like to give?")])]),e._v(" "),n("p",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to true. We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow. Click on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button on the top right to set the data for the workflow.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(373),alt:"Creating the Set node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-airtable-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node"}},[e._v("#")]),e._v(" 3. Airtable node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("Airtable")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("Airtable")]),e._v(" node. Double click on the node and create credentials for the node by clicking on the "),n("em",[n("strong",[e._v("Select Credentials")])]),e._v(" dropdown list and selecting "),n("em",[n("strong",[e._v("Create New")])]),e._v(". Enter the "),n("em",[n("strong",[e._v("API Key")])]),e._v(" that you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(".")]),e._v(" "),n("p",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list. To get the Base ID, go to "),n("code",[e._v("https://airtable.com/api")]),e._v(" and select the base. Copy and paste the ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field in n8n.")]),e._v(" "),n("p",[e._v("Enter the table name in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field. We'll let the other fields stay as they are. Click on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button on the top right to append the data to your Airtable base.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(374),alt:"Creating the Airtable node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-if-node"}},[e._v("#")]),e._v(" 4. IF node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("IF")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("IF")]),e._v(" node. This is a conditional logic node that allows us to alter the flow of the workflow depending on the data that we get from the previous node(s).")]),e._v(" "),n("p",[e._v("Double click on the node, click on the "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" button and select "),n("em",[n("strong",[e._v("Number")])]),e._v(" from the menu. Since the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" (score) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". Delete the "),n("code",[e._v("0")]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field on the right. From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Set > Output Data > JSON > Score")])]),e._v(" "),n("p",[e._v("For the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" field, we'll let it be set to 'Smaller'. For "),n("em",[n("strong",[e._v("Value 2")])]),e._v(", I entered "),n("code",[e._v("7")]),e._v(". This will ensure that the "),n("em",[e._v("IF")]),e._v(" node returns true only if the score is lower than 7. Feel free to change this to some other value. Click on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button on the top right to check if the score is smaller than 7 or not.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(375),alt:"Creating the IF node"}})]),e._v(" "),n("h3",{attrs:{id:"_5-trello-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-trello-node"}},[e._v("#")]),e._v(" 5. Trello node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("Trello")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("Trello")]),e._v(" node. Connect this node with the "),n("em",[n("strong",[e._v("true")])]),e._v(" output of the "),n("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),n("p",[e._v("Double click on the node and create credentials for the node by clicking on the "),n("em",[n("strong",[e._v("Select Credentials")])]),e._v(" dropdown list and selecting "),n("em",[n("strong",[e._v("Create New")])]),e._v(". Enter the "),n("em",[n("strong",[e._v("API Key")])]),e._v(", "),n("em",[n("strong",[e._v("API Token")])]),e._v(", and "),n("em",[n("strong",[e._v("OAuth Secret")])]),e._v(" that you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(".")]),e._v(" "),n("p",[e._v("To get the List ID, refer to the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Trello/#how-do-i-find-the-list-id"}},[e._v("FAQs")]),e._v(" section of the Trello node documentation. Copy and paste the ID of the list in which you want to create new cards in the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field in n8n.")],1),e._v(" "),n("p",[e._v("This is what I added in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field (you can click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(" and paste this):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[{{$node["IF"].json["fields"]["Score"]}}] {{$node["IF"].json["fields"]["Name"]}}\n')])])]),n("p",[e._v("Similarly, you can add the description for the card. This is what I added in the "),n("em",[n("strong",[e._v("Description")])]),e._v(" field (you can click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(" and paste this):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Name: {{$node["IF"].json["fields"]["Name"]}}\nEmail: {{$node["IF"].json["fields"]["Email"]}}\nScore: {{$node["IF"].json["fields"]["Score"]}}\nDescription: {{$node["IF"].json["fields"]["Description"]}}\n')])])]),n("p",[n("em",[n("strong",[e._v("NOTE:")])]),e._v(" You can set a custom name and description. Enter the text you want in the "),n("em",[n("strong",[e._v("Expression Editor")])]),e._v(". Select the data you want to use from the previous nodes from the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section.")]),e._v(" "),n("p",[e._v("Click on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button on the top right to create a new card in Trello.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(376),alt:"Creating the Trello node"}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(377),alt:"Card created by the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_6-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-noop-node"}},[e._v("#")]),e._v(" 6. NoOp node")]),e._v(" "),n("p",[e._v("If the score is greater than 7, we don't want the workflow to do anything. We'll use the "),n("em",[e._v("NoOp")]),e._v(" node for that. Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. Add the "),n("em",[e._v("NoOp")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("NoOp")]),e._v(" node. Connect this node with the "),n("em",[n("strong",[e._v("false")])]),e._v(" output of the "),n("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),n("p",[e._v("To test the workflow, click on the "),n("em",[n("strong",[e._v("Execute Workflow")])]),e._v(" button at the bottom of the Editor UI.")]),e._v(" "),n("p",[e._v("Don't forget to save the workflow and then click on the "),n("em",[n("strong",[e._v("Activate")])]),e._v(" toggle on the top right of the screen to set it to true and activate the workflow. Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(378),alt:"Creating the NoOp node"}})]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Congratulations on creating your first workflow with n8n 🥳")]),e._v(" "),n("p",[e._v("Did you run into any troubles while working on your first workflow? Don't be shy to ask questions or share the challenges you are facing in the community "),n("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),n("OutboundLink")],1),e._v(", we are all learners here 🙌")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🤝 Next Steps")]),e._v(" "),n("p",[e._v("Check out our tutorial on "),n("a",{attrs:{href:"https://medium.com/n8n-io/tracking-time-spent-in-meetings-with-google-calendar-twilio-and-n8n-a5d00f77da8c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking Time Spent in Meetings With Google Calendar, Twilio, and n8n 🗓"),n("OutboundLink")],1),e._v(" to learn about automating the process of calculating your meeting time every week to give you a better idea of how your week is spent.")])])])}),[],!1,null,null,null);t.default=r.exports},371:function(e,t,o){e.exports=o.p+"assets/img/final-workflow.ee0f0489.png"},372:function(e,t,o){e.exports=o.p+"assets/img/creating-the-typeform-trigger-node.22e4d45b.gif"},373:function(e,t,o){e.exports=o.p+"assets/img/creating-the-set-node.84022f79.gif"},374:function(e,t,o){e.exports=o.p+"assets/img/creating-the-airtable-node.95f45da0.gif"},375:function(e,t,o){e.exports=o.p+"assets/img/creating-the-if-node.5966e587.gif"},376:function(e,t,o){e.exports=o.p+"assets/img/creating-the-trello-node.0b386fd5.gif"},377:function(e,t,o){e.exports=o.p+"assets/img/ticket-created-by-the-workflow.08d7ea9c.png"},378:function(e,t,o){e.exports=o.p+"assets/img/creating-the-noop-node.f0e3b105.gif"}}]);