"use strict";(self.webpackChunkrt_docs=self.webpackChunkrt_docs||[]).push([[13],{9058:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(3366),n=a(7294),l=a(6010),i=a(5257),s=a(7524),c=a(9960),m=a(5999),o="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",b="sidebarItemLink_mo7H",E="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:E},e.title))})))))}var v=a(3102);function f(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function N(e){return n.createElement(v.Zo,{component:f,props:e})}function h(e){var t=e.sidebar,a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(N,{sidebar:t}):n.createElement(p,{sidebar:t}):null}var k=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,r.Z)(e,k),m=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},1223:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(7294),n=a(6010),l=a(5999);var i=a(1944),s=a(5281),c=a(9058),m=a(3008),o="tag_Nnez";function u(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(m.Z,e))}))),r.createElement("hr",null))}function d(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return r.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))}var g=a(197);function b(e){var t=e.tags,a=e.sidebar,m=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(i.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogTagsListPage)},r.createElement(i.d,{title:m}),r.createElement(g.Z,{tag:"blog_tags_list"}),r.createElement(c.Z,{sidebar:a},r.createElement("h1",null,m),r.createElement(d,{tags:t})))}}}]);