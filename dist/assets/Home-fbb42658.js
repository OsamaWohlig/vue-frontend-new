import{_ as l,o as s,c as i,a as f,b as t,F as g,r as v,t as u,d as m,e as x}from"./index-55957ff0.js";const b={},_={class:"text-gray-600 body-font"},w=f('<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">This is my first Vue-app </h1><p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam animi, reprehenderit aliquam aliquid at, asperiores fugit iste sed beatae harum. Fugiat eaque vel perspiciatis assumenda facilis quia dolorum blanditiis possimus consequuntur nostrum accusamus corrupti, ipsum ex sed vitae ab unde sapiente nesciunt itaque magnam provident eveniet earum! Porro.</p><div class="flex justify-center"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get started</button></div></div><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"><img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFuJTIwNzIweDYwMHxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"></div></div>',1),y=[w];function k(e,n,a,c,r,d){return s(),i("section",_,y)}const $=l(b,[["render",k]]),M={data(){return{apiData:null}},methods:{async getProducts(){fetch("http://localhost:5000/getProducts").then(e=>e.json()).then(e=>this.apiData=e).catch(e=>console.log(e.message))}},mounted(){this.getProducts()}},j={class:"text-gray-600 body-font text-center"},B={class:"container px-5 py-12 mx-auto"},H=t("h1",{class:"sm:text-3xl text-2xl font-medium title-font py-12 text-gray-900 mb-4"},"Our Products",-1),D={class:"flex flex-wrap -m-4"},C={class:"block relative h-48 rounded overflow-hidden"},q=["src"],L={class:"mt-4"},F={class:"text-gray-500 text-xs tracking-widest title-font mb-1"},V={class:"text-gray-900 title-font text-lg font-medium"},P={class:"mt-1"};function S(e,n,a,c,r,d){return s(),i("section",j,[t("div",B,[H,t("div",D,[(s(!0),i(g,null,v(r.apiData,o=>(s(),i("div",{key:o._id,productData:"data.name",onClick:n[0]||(n[0]=p=>e.$router.push({name:"product"})),class:"lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer"},[t("a",C,[t("img",{alt:"ecommerce",class:"object-cover object-center w-full h-full block",src:o.imageData.downloadurl},null,8,q)]),t("div",L,[t("h3",F,u(o.brand),1),t("h2",V,u(o.name),1),t("p",P,"$"+u(o.price),1)])]))),128))])])])}const G=l(M,[["render",S]]),N={},z={class:"text-gray-600 body-font"},I=f('<div class="container px-5 py-24 mx-auto"><div class="text-center mb-20"><h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1><p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p><div class="flex mt-6 justify-center"><div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div></div></div><div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"><div class="p-4 md:w-1/3 flex flex-col text-center items-center"><div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3">User-Friendly Design</h2><p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p><a class="mt-3 text-indigo-500 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div><div class="p-4 md:w-1/3 flex flex-col text-center items-center"><div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3">24/7 Customer Service</h2><p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p><a class="mt-3 text-indigo-500 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div><div class="p-4 md:w-1/3 flex flex-col text-center items-center"><div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3">Multiple Payment Options</h2><p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p><a class="mt-3 text-indigo-500 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div><button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button></div>',1),J=[I];function T(e,n,a,c,r,d){return s(),i("section",z,J)}const A=l(N,[["render",T]]),O={components:{HeroBlock:$,ProductsBlock:G,MyFeatures:A}};function W(e,n,a,c,r,d){const o=m("hero-block"),p=m("products-block"),h=m("my-features");return s(),i(g,null,[x(o),x(p),x(h)],64)}const Z=l(O,[["render",W]]);export{Z as default};
