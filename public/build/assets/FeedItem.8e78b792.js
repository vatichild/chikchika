import{x as y,l as H,o as r,g as c,d as n,i as M,b as _,h as m,t as f,n as A,r as P,a as w,w as $,L as p,c as k,e as V}from"./app.c6576bad.js";import{a as g}from"./NavLink.103ec0a0.js";const b=y("tweets",{state:()=>({tweets:{},tweet:{},replies:{}}),actions:{fetch(t){return new Promise((s,i)=>{window.axios.get("tweets",{params:t}).then(e=>{s(e)}).catch(e=>i(e))})},fetchReplies(t){return new Promise((s,i)=>{window.axios.get(`tweets/${t.tweet_id}/replies`,{params:t}).then(e=>{s(e)}).catch(e=>i(e))})},fetchUserFeed(t){return new Promise((s,i)=>{window.axios.get(`tweets/${t.email}/feed`).then(e=>{s(e)}).catch(e=>i(e))})},fetchOne(t){return new Promise((s,i)=>{window.axios.get(`tweets/${t.tweet_id}`).then(e=>{s(e)}).catch(e=>i(e))})},makeTweet(t){return new Promise((s,i)=>{window.axios.post("tweets",t).then(e=>{s(e)}).catch(e=>i(e))})},reply(t){return new Promise((s,i)=>{window.axios.post(`tweets/${t.id}/reply`,t).then(e=>{s(e)}).catch(e=>i(e))})},like(t){return new Promise((s,i)=>{window.axios.post(`tweets/${t.id}/like`).then(e=>{s(e)}).catch(e=>i(e))})},dislike(t){return new Promise((s,i)=>{window.axios.delete(`tweets/${t.id}/unlike`).then(e=>{s(e)}).catch(e=>i(e))})},delete(t){return new Promise((s,i)=>{window.axios.delete(`tweets/${t.id}/delete`).then(e=>{s(e)}).catch(e=>i(e))})}}}),C={class:"max-w-3xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-8"},Z={class:"border-l border-r border-gray border-solid"},B={key:0,class:"flex justify-center py-8 text-blue-600"},Be={__name:"Feed",props:{isLoadMore:{default:!0,type:Boolean}},setup(t){const s=b(),i=H(()=>{var a,d;return((a=s.tweets)==null?void 0:a.last_page)>((d=s.tweets)==null?void 0:d.current_page)}),e=()=>{var a,d;if(((a=s.tweets)==null?void 0:a.current_page)<((d=s.tweets)==null?void 0:d.last_page)){const v=s.tweets.current_page+1;s.fetch({page:v}).then(u=>{var o,l,h;(l=(o=s.tweets)==null?void 0:o.data)!=null&&l.length&&(s.tweets.current_page=u==null?void 0:u.data.current_page,s.tweets.data=[...s.tweets.data,...(h=u==null?void 0:u.data)==null?void 0:h.data])})}};return(a,d)=>(r(),c("div",C,[n("div",L,[n("div",Z,[M(a.$slots,"default")]),_(i)&&t.isLoadMore?(r(),c("div",B,[n("button",{onClick:e},"Load More")])):m("",!0)])]))}},S={key:0},T={__name:"Avatar",props:{user:{default:()=>{},type:Object},color:{default:"bg-indigo-200 text-violet-600",type:String}},setup(t){return(s,i)=>{var e;return(e=t.user)!=null&&e.name?(r(),c("div",S,[n("div",{class:A(["rounded-full w-12 h-12 flex justify-center items-center font-bold",t.color])},[n("span",null,f(t.user.name.charAt(0)),1)],2)])):m("",!0)}}},j={},I={xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"24",height:"24",fill:"#666666"},O=n("path",{d:"M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"},null,-1),F=n("path",{d:"M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z"},null,-1),N=n("path",{d:"M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"},null,-1),D=n("path",{d:"M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"},null,-1),U=[O,F,N,D];function z(t,s){return r(),c("svg",I,U)}const E=g(j,[["render",z]]),R=["fill"],q=n("path",{d:"M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"},null,-1),G=[q],J={__name:"Heart",props:{color:{default:"#666666",type:String}},setup(t){return(s,i)=>(r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"24",height:"24",fill:t.color},G,8,R))}},K={},Q={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"24",height:"24"},W=n("path",{d:"M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z"},null,-1),X=[W];function Y(t,s){return r(),c("svg",Q,X)}const ee=g(K,[["render",Y]]),te={},se={xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"24",height:"24"},ie=n("circle",{cx:"12",cy:"2",r:"2"},null,-1),ne=n("circle",{cx:"12",cy:"12",r:"2"},null,-1),oe=n("circle",{cx:"12",cy:"22",r:"2"},null,-1),ae=[ie,ne,oe];function re(t,s){return r(),c("svg",se,ae)}const ce=g(te,[["render",re]]),le={},de={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgb(220 38 38)"},ue=n("g",{id:"_01_align_center","data-name":"01 align center"},[n("path",{d:"M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"}),n("rect",{x:"9",y:"10",width:"2",height:"8"}),n("rect",{x:"13",y:"10",width:"2",height:"8"})],-1),he=[ue];function we(t,s){return r(),c("svg",de,he)}const _e=g(le,[["render",we]]),me=y("user",{state:()=>({user:{}}),actions:{me(t){return new Promise((s,i)=>{window.axios.get("me",{params:t}).then(e=>{s(e)}).catch(e=>i(e))})},profile(t){return new Promise((s,i)=>{window.axios.get(`${t.email}/profile`).then(e=>{s(e)}).catch(e=>i(e))})},follow(t){return new Promise((s,i)=>{window.axios.post(`follow/${t.id}`).then(e=>{s(e)}).catch(e=>i(e))})},unfollow(t){return new Promise((s,i)=>{window.axios.delete(`unfollow/${t.id}`).then(e=>{s(e)}).catch(e=>i(e))})}}});const fe={class:"border-b border-gray border-solid p-4"},xe={class:"flex space-x-3 w-full"},ge={class:"flex justify-between w-full"},ve={class:"text-[15px] mb-4"},$e={class:"text-black"},pe={class:"text-[#999]"},ke=["innerHTML"],ye={class:"flex space-x-4 items-center"},be={key:0,class:"flex items-end space-x-2"},He={key:0,class:"text-[#666666] text-sm"},Me={class:"flex items-end space-x-2"},Ae={key:2,class:"text-[#666666] text-sm"},Pe={key:0,class:"relative group",tabindex:"-1"},Ve={class:"border border-solid shadow-md absolute right-0 p-2 text-red-600 transition-all hidden group-focus:block"},Ce=n("span",null,"Delete",-1),Se={__name:"FeedItem",props:{item:{default:()=>{},type:Object}},emits:["delete"],setup(t,{emit:s}){const i=b(),e=me(),a=P(!1),d=o=>{a.value||(a.value=!0,i.like({id:o.id}).then(()=>{o.likes_count++,o.your_like=1,a.value=!1}))},v=o=>{a.value||(a.value=!0,i.dislike({id:o.id}).then(()=>{o.likes_count--,o.your_like=0,a.value=!1}))},u=o=>{a.value||(a.value=!0,i.delete({id:o.id}).then(()=>{var l,h;(h=(l=i.tweets)==null?void 0:l.data)!=null&&h.length&&(i.tweets.data=i.tweets.data.filter(x=>x.id!=o.id))})),s("delete")};return(o,l)=>{var h;return r(),c("article",fe,[n("div",xe,[n("div",null,[w(_(p),{href:o.route("profile.view",t.item.user.username)},{default:$(()=>[w(T,{user:t.item.user,color:_(e).user.id==t.item.user.id?"bg-teal-200 text-teal-700":"bg-indigo-200 text-violet-600"},null,8,["user","color"])]),_:1},8,["href"])]),n("div",ge,[n("div",null,[n("div",ve,[n("div",null,[w(_(p),{href:o.route("profile.view",t.item.user.username)},{default:$(()=>[n("b",$e,f(t.item.user.name),1)]),_:1},8,["href"]),n("small",pe," - "+f(t.item.created_at_for_humans),1)]),n("p",{class:"text-[#0f1419] tweet-body",innerHTML:t.item.tweet},null,8,ke)]),n("div",ye,[(h=t.item)!=null&&h.tweet_id?m("",!0):(r(),c("div",be,[w(_(p),{href:o.route("tweet.view",t.item.id)},{default:$(()=>[w(E,{class:"w-4 cursor-pointer"})]),_:1},8,["href"]),t.item.replies_count?(r(),c("span",He,f(t.item.replies_count),1)):m("",!0)])),n("div",Me,[t.item.your_like?(r(),k(ee,{key:1,class:"w-4 cursor-pointer",onClick:l[1]||(l[1]=x=>v(t.item))})):(r(),k(J,{key:0,class:"w-4 cursor-pointer",onClick:l[0]||(l[0]=x=>d(t.item))})),t.item.likes_count?(r(),c("span",Ae,f(t.item.likes_count),1)):m("",!0)])])]),_(e).user.id==t.item.user.id?(r(),c("div",Pe,[w(ce,{class:"w-4 cursor-pointer"}),n("div",Ve,[n("div",{class:"flex justify-center cursor-pointer space-x-2",onClick:l[2]||(l[2]=x=>u(t.item))},[w(_e,{class:"w-4"}),V(),Ce])])])):m("",!0)])])])}}};export{Be as _,me as a,Se as b,T as c,b as u};
