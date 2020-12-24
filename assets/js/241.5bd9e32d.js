(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1260:function(e,t,a){"use strict";a.r(t);var o=a(25),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"send-email"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-email"}},[e._v("#")]),e._v(" Send Email")]),e._v(" "),o("p",[e._v("The Send Email node is used to send an email via an SMTP email server.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credential")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/SendEmail/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),o("ol",[o("li",[e._v("Before sending, ensure that you have already created email addresses that are approved for sending on your SMTP service.")]),e._v(" "),o("li",[e._v("The Send Email node merely sends an email via your SMTP server and plays no part in email deliverability.")]),e._v(" "),o("li",[e._v("To attach a file, you will need to use an additional node such as the "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass a file as a data property.")],1)])]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("ul",[o("li",[e._v("Send an email")])]),e._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("From Email:")]),e._v(" The email address you are sending from.")]),e._v(" "),o("li",[o("strong",[e._v("To Email:")]),e._v(" The recipient email address.")]),e._v(" "),o("li",[o("strong",[e._v("CC Email:")]),e._v(" A field that can be used to specify an email address for a carbon copy of the email.")]),e._v(" "),o("li",[o("strong",[e._v("BCC Email:")]),e._v(" A field that can be used to specify an email address for a blind carbon copy of the email.")]),e._v(" "),o("li",[o("strong",[e._v("Subject:")]),e._v(" The subject of your message.")]),e._v(" "),o("li",[o("strong",[e._v("Text:")]),e._v(" Your message, in plaintext.")]),e._v(" "),o("li",[o("strong",[e._v("HTML:")]),e._v(" Your message, in HTML.")]),e._v(" "),o("li",[o("strong",[e._v("Attachments:")]),e._v(" A field that can be used to attach any attachments as data properties.")])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to send an email using the Send Email node. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/584",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following two nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Send Email")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(588),alt:"A workflow with the Send Email node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-send-email-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-send-email-node"}},[e._v("#")]),e._v(" 2. Send Email node")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Send Email node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/SendEmail/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Enter the email address you want to send from in the "),o("em",[e._v("From Email")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter the recipient email address in the "),o("em",[e._v("To Email")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter a subject for your message in the "),o("em",[e._v("Subject")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter your message in the "),o("em",[e._v("Text")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])])])}),[],!1,null,null,null);t.default=s.exports},588:function(e,t,a){e.exports=a.p+"assets/img/workflow.0b3b060f.png"}}]);