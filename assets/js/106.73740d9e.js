(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1120:function(e,o,t){"use strict";t.r(o);var n=t(25),l=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google"}},[e._v("#")]),e._v(" Google")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with Google.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GSuiteAdmin/"}},[e._v("G Suite Admin")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Gmail/"}},[e._v("Gmail")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleBooks/"}},[e._v("Google Books")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleCalendar/"}},[e._v("Google Calendar")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleCloudFirestore/"}},[e._v("Google Cloud Firestore")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleCloudNaturalLanguage/"}},[e._v("Google Cloud Natural Language")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleCloudRealtimeDatabase/"}},[e._v("Google Cloud Realtime Database")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleDrive/"}},[e._v("Google Drive")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleSheets/"}},[e._v("Google Sheets")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleTasks/"}},[e._v("Google Tasks")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleTranslate/"}},[e._v("Google Translate")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/YouTube/"}},[e._v("YouTube")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("ol",[n("li",[e._v("Access your "),n("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Console"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on the hamburger menu on the top left.")]),e._v(" "),n("li",[e._v("Click on API & Services.")]),e._v(" "),n("li",[e._v("Click on Credentials.")]),e._v(" "),n("li",[e._v("Click on Create Credentials.")]),e._v(" "),n("li",[e._v("Select OAuth client ID.")]),e._v(" "),n("li",[e._v("Select 'Web application' as the Application type.")]),e._v(" "),n("li",[e._v("Click on the Add URL button under the 'Authorized redirect URIs' section.")]),e._v(" "),n("li",[e._v("Copy your OAuth Callback URL from the 'Create New Credentials screen' in n8n and paste it there.")]),e._v(" "),n("li",[e._v("Click on the Create button in the Google cloud console.")]),e._v(" "),n("li",[e._v("Use provided Client Secret and Client ID with your Google node credentials in n8n.")]),e._v(" "),n("li",[e._v("While still in n8n, click on the Connect button in the OAuth section, and once the connection is complete, click on the Create button.")]),e._v(" "),n("li",[e._v("Now, go back to the Google cloud console and click on Library in the menu on the left.")]),e._v(" "),n("li",[e._v("Search for the API that you want to enable. For example, search for 'Calendar', and click on 'Google Calendar API'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[e._v("Enable")]),e._v(" button.")])]),e._v(" "),n("p",[n("img",{attrs:{src:t(427),alt:"Getting Google credentials"}})]),e._v(" "),n("h2",{attrs:{id:"using-service-account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-service-account"}},[e._v("#")]),e._v(" Using Service Account")]),e._v(" "),n("ol",[n("li",[e._v("Access your "),n("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Console"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on the hamburger menu on the top left.")]),e._v(" "),n("li",[e._v("Click on API & Services.")]),e._v(" "),n("li",[e._v("Click on Credentials.")]),e._v(" "),n("li",[e._v("Click on Create Credentials.")]),e._v(" "),n("li",[e._v("Click on Service Account.")]),e._v(" "),n("li",[e._v("Choose your preferences.")]),e._v(" "),n("li",[e._v("Fill out information for your service account.")]),e._v(" "),n("li",[e._v("You will receive a "),n("code",[e._v(".json")]),e._v(" file with your credentials.")]),e._v(" "),n("li",[e._v("Use the values of client_email and private_key for your Google Credentials in the n8n node.")]),e._v(" "),n("li",[e._v("Before entering the private_key in n8n, make sure that you replace all the "),n("code",[e._v("\\n")]),e._v(" with new lines.")])]),e._v(" "),n("p",[n("img",{attrs:{src:t(428),alt:"Getting Google credentials"}})])])}),[],!1,null,null,null);o.default=l.exports},427:function(e,o,t){e.exports=t.p+"assets/img/using-oauth-calendar.40e1e001.gif"},428:function(e,o,t){e.exports=t.p+"assets/img/using-service-account.f005d4cc.gif"}}]);