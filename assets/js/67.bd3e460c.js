(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1392:function(t,e,a){"use strict";a.r(e);var o=a(25),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"strava"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#strava"}},[t._v("#")]),t._v(" Strava")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.strava.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strava"),o("OutboundLink")],1),t._v(" is an internet service for tracking human exercise which incorporates social network features.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),o("p",[t._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Strava/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Activity")]),t._v(" "),o("ul",[o("li",[t._v("Create a new activity")]),t._v(" "),o("li",[t._v("Get an activity")]),t._v(" "),o("li",[t._v("Get all activities")]),t._v(" "),o("li",[t._v("Get all activity comments")]),t._v(" "),o("li",[t._v("Get all activity kudos")]),t._v(" "),o("li",[t._v("Get all activity laps")]),t._v(" "),o("li",[t._v("Get all activity zones")]),t._v(" "),o("li",[t._v("Update an activity")])])]),t._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),o("p",[t._v("This workflow allows you to create, update, and get an activity in Strava. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/744",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),o("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),o("li",[o("a",{attrs:{href:""}},[t._v("Strava")])])]),t._v(" "),o("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(932),alt:"A workflow with the Strava node"}})]),t._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),o("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),o("h3",{attrs:{id:"_2-strava-node-create-activity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-strava-node-create-activity"}},[t._v("#")]),t._v(" 2. Strava node (create: activity)")]),t._v(" "),o("p",[t._v("This node will create an activity with the name "),o("code",[t._v("Morning Run")]),t._v(" in Strava. To create an activity with a different name, you can enter the name of your activity instead.")]),t._v(" "),o("ol",[o("li",[t._v("First of all, you'll have to enter credentials for the Strava node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Strava/"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("li",[t._v("Enter "),o("code",[t._v("Morning Run")]),t._v(" in the "),o("em",[o("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Enter "),o("code",[t._v("Run")]),t._v(" in the "),o("em",[o("strong",[t._v("Type")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Select the date and time in the "),o("em",[o("strong",[t._v("Start Date")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Set "),o("em",[o("strong",[t._v("Elapsed Time (Seconds)")])]),t._v(" to "),o("code",[t._v("3600")]),t._v(".")]),t._v(" "),o("li",[t._v("Click on the "),o("em",[o("strong",[t._v("Add Field")])]),t._v(" button and select 'Distance' from the dropdown list.")]),t._v(" "),o("li",[t._v("Set "),o("em",[o("strong",[t._v("Distance")])]),t._v(" to "),o("code",[t._v("1000")]),t._v(". Strava measures distance in meters.")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),o("p",[t._v("In the screenshot below, you will notice that the node creates an activity with the name "),o("code",[t._v("Morning Run")]),t._v(" and type "),o("code",[t._v("Run")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(933),alt:"Using the Strava node to create an activity"}})]),t._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-strava1-node-update-activity"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-strava1-node-update-activity"}},[t._v("#")]),t._v(" 3. Strava1 node (update: activity)")]),t._v(" "),o("p",[t._v("This node will update the activity that we created in the previous node.")]),t._v(" "),o("ol",[o("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),o("li",[t._v("Select 'Update' from the "),o("em",[o("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),o("li",[t._v("Click on the gears icon next to the "),o("em",[o("strong",[t._v("Activity ID")])]),t._v(" field and click on "),o("em",[o("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),o("li",[t._v("Select the following in the "),o("em",[o("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Strava > Output Data > JSON > id. You can also add the following expression: "),o("code",[t._v('{{$node["Strava"].json["id"]}}')]),t._v(".")]),t._v(" "),o("li",[t._v("Click on the "),o("em",[o("strong",[t._v("Add Field")])]),t._v(" button and select 'Description' from the dropdown list.")]),t._v(" "),o("li",[t._v("Enter the description of the activity in the "),o("em",[o("strong",[t._v("Description")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),o("p",[t._v("In the screenshot below, you will notice that the node adds a description to the activity that we created using the Strava node.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(934),alt:"Using the Strava node to update an activity"}})]),t._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_4-strava2-node-get-activity"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-strava2-node-get-activity"}},[t._v("#")]),t._v(" 4. Strava2 node (get: activity)")]),t._v(" "),o("p",[t._v("This node returns the information of the activity that we created using the Strava node.")]),t._v(" "),o("ol",[o("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),o("li",[t._v("Select 'Get' from the "),o("em",[o("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),o("li",[t._v("Click on the gears icon next to the "),o("em",[o("strong",[t._v("Activity ID")])]),t._v(" field and click on "),o("em",[o("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),o("li",[t._v("Select the following in the "),o("em",[o("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Strava > Output Data > JSON > id. You can also add the following expression: "),o("code",[t._v('{{$node["Strava"].json["id"]}}')]),t._v(".")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),o("p",[t._v("In the screenshot below, you will notice that the node returns the information of the activity that we specified in this node.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(935),alt:"Using the Strava node to get an issue"}})])])}),[],!1,null,null,null);e.default=i.exports},932:function(t,e,a){t.exports=a.p+"assets/img/workflow.0e1236a6.png"},933:function(t,e,a){t.exports=a.p+"assets/img/Strava_node.7604f42d.png"},934:function(t,e,a){t.exports=a.p+"assets/img/Strava1_node.40841693.png"},935:function(t,e,a){t.exports=a.p+"assets/img/Strava2_node.ddc6309d.png"}}]);