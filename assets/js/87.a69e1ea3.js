(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1407:function(e,t,s){"use strict";s.r(t);var o=s(25),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"wordpress"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[e._v("#")]),e._v(" WordPress")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://wordpress.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress"),o("OutboundLink")],1),e._v(" is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/WordPress/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Post")]),e._v(" "),o("ul",[o("li",[e._v("Create a post")]),e._v(" "),o("li",[e._v("Get a post")]),e._v(" "),o("li",[e._v("Get all posts")]),e._v(" "),o("li",[e._v("Update a post")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("User")]),e._v(" "),o("ul",[o("li",[e._v("Create a user")]),e._v(" "),o("li",[e._v("Get a user")]),e._v(" "),o("li",[e._v("Get all users")]),e._v(" "),o("li",[e._v("Update a user")])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create and update a post in WordPress. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/668",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("WordPress")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(972),alt:"A workflow with the WordPress node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-wordpress-node-create-post"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-wordpress-node-create-post"}},[e._v("#")]),e._v(" 2. Wordpress node (create: post)")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the WordPress node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/WordPress/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Enter the title in the "),o("em",[o("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),o("p",[o("img",{attrs:{src:s(973),alt:"Using the WordPress node to create a new post"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-wordpress1-node-update-post"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-wordpress1-node-update-post"}},[e._v("#")]),e._v(" 3. Wordpress1 node (update: post)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Update' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Post ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wordpress > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["Wordpress"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and select 'Content' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter the content in the "),o("em",[o("strong",[e._v("Content")])]),e._v(" filed.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),o("p",[o("img",{attrs:{src:s(974),alt:"Using the WordPress node to update the post"}})])])}),[],!1,null,null,null);t.default=r.exports},972:function(e,t,s){e.exports=s.p+"assets/img/workflow.530b2af6.png"},973:function(e,t,s){e.exports=s.p+"assets/img/WordPress_node.57ee47d0.png"},974:function(e,t,s){e.exports=s.p+"assets/img/WordPress1_node.0dfa5b96.png"}}]);