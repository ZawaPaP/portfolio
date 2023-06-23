(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4481)}])},4481:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSG:function(){return v},default:function(){return N}});var s=n(5893),i=n(9008),r=n.n(i),t=n(5675),l=n.n(t),c=n(2717),o=n.n(c),d=n(7839),h=n.n(d),m=n(1664),u=n.n(m),x=n(7294),_=n(7058),g=n.n(_);function j(){let[e,a]=(0,x.useState)(!1);return(0,s.jsxs)("nav",{className:g().navbar,children:[(0,s.jsxs)("div",{className:g().navbarBrand,children:[(0,s.jsx)("a",{href:"/",className:g().navbarItem,children:(0,s.jsx)("img",{src:"/logo.png",alt:"Logo"})}),(0,s.jsxs)("a",{role:"button",className:"".concat(g().navbarBurger," ").concat(e?g().isActive:""),"aria-label":"menu","aria-expanded":"false",onClick:()=>{a(!e)},children:[(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"})]})]}),(0,s.jsx)("div",{className:"".concat(g().navbarMenu," ").concat(e?g().isActive:""),children:(0,s.jsxs)("div",{className:g().navbarEnd,children:[(0,s.jsx)("a",{href:"#projects",className:g().navbarItem,children:"Projects"}),(0,s.jsx)("a",{href:"#profile",className:g().navbarItem,children:"Profile"}),(0,s.jsx)("a",{href:"#contact",className:g().navbarItem,children:"Contact"})]})})]})}let p="Kazu portfolio";function b(e){let{children:a,home:n}=e;return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"Kazu's portfolio"}),(0,s.jsx)("meta",{name:"og:title",content:p})]}),(0,s.jsx)(j,{}),(0,s.jsx)("header",{className:o().header,children:n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{priority:!0,src:"/images/profile.jpg",className:h().borderCircle,height:144,width:144,alt:""}),(0,s.jsx)("p",{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u(),{href:"/",children:(0,s.jsx)(l(),{priority:!0,src:"/images/profile.jpg",className:h().borderCircle,height:108,width:108,alt:""})}),(0,s.jsx)("h2",{className:h().headingLg,children:(0,s.jsx)(u(),{href:"/",className:h().colorInherit,children:"Kazu"})})]})}),(0,s.jsx)("main",{children:a}),!n&&(0,s.jsx)("div",{className:o().backToHome,children:(0,s.jsx)(u(),{href:"/",children:"← Back to home"})})]})}function f(){let e=async e=>{e.preventDefault();let a=await fetch("/api/send",{body:JSON.stringify({email:e.target.email.value,message:e.target.message.value}),headers:{"Content-Type":"application/json"},method:"POST"});await a.json()};return(0,s.jsx)("div",{className:"container mt-5",children:(0,s.jsxs)("form",{onSubmit:e,children:[(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"email",children:"email address"}),(0,s.jsx)("input",{id:"email",name:"email",type:"email",className:"form-control",placeholder:"name@example.com"})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"message",className:"form-label"}),(0,s.jsx)("textarea",{id:"message",name:"message",className:"form-control",rows:"3",children:"Text"})]}),(0,s.jsx)("div",{className:"mb-3",children:(0,s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})}var v=!0;function N(e){let{allProjectsData:a}=e;return(0,s.jsxs)(b,{home:!0,children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:p})}),(0,s.jsx)("section",{className:h().headingMd,children:(0,s.jsxs)("p",{children:["Welcome to Kazu's portfolio website! I am junior software developer and happy to engage with you! - Please check more about me from here. (",(0,s.jsx)("a",{href:"https://github.com/ZawaPaP",children:"Github "}),"/",(0,s.jsx)("a",{href:"https://www.linkedin.com/in/kazuhide-izawa-issac/",children:" Linkedin"}),")"]})}),(0,s.jsxs)("section",{id:"projects",className:"".concat(h().headingMd," ").concat(h().padding1px),children:[(0,s.jsx)("h2",{className:h().headingLg,children:"Projects"}),(0,s.jsx)("ul",{className:h().list,children:a.map(e=>{let{id:a,date:n,title:i,link:r,skills:t,contentHtml:l}=e;return(0,s.jsxs)("li",{className:h().listItem,children:[i," \xa0 (",n,")",(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:h().lightText,children:[l,"(",(0,s.jsx)("a",{href:r,children:"Link"}),")",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:h().hushtag,children:t})]})]},a)})})]}),(0,s.jsxs)("section",{id:"profile",className:"".concat(h().headingMd," ").concat(h().padding1px),children:[(0,s.jsx)("h2",{className:h().headingLg,children:"Profile"}),(0,s.jsx)("p",{className:h().lightText,children:"With over 8 years of experience in the tech industry as account manager, I've decided to change my career to engineer. I have self-taught ComputerScience, DataStructure, Algorithm and python with Cousera, created few simple applications and holding a Bachelor's degree in environmental engineer in Hokkaido University. I'm passionate about creating efficient, scalable web applications. Also, I'm always eager to take on new challenges and learn new technologies."}),(0,s.jsx)("p",{className:h().lightText,children:"Please feel free to browse my projects and contact me. I'm always open to collaboration and new ideas."})]}),(0,s.jsxs)("section",{id:"contact",className:"".concat(h().headingMd," ").concat(h().padding1px),children:[(0,s.jsx)("h2",{className:h().headingLg,children:"Contacts"}),(0,s.jsx)(f,{})]})]})}},7058:function(e){e.exports={navbar:"Navbar_navbar__wU2Rq",navbarBrand:"Navbar_navbarBrand__kzePN",navbarItem:"Navbar_navbarItem__Z7pSq",navbarBurger:"Navbar_navbarBurger__tOwNM",navbarMenu:"Navbar_navbarMenu__Wqzhv",isActive:"Navbar_isActive__V1odY",navbarEnd:"Navbar_navbarEnd__TvJmi"}},2717:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},7839:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",hushtag:"utils_hushtag__n6D3E"}}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);