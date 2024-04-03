import{a as q,i as c,S as $}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(o,r){try{const s="https://pixabay.com/api/",a=o,e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:24,page:r}),t=`${s}?${e}`;return(await q.get(t)).data}catch{c.error({message:"Server error!",position:"topRight"})}}function y(o){return o.hits.map(r=>{const{id:s,webformatURL:a,largeImageURL:e,tags:t,likes:i,views:S,comments:P,downloads:R}=r;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" id=${s} src="${a}" alt="${t}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${i}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${S}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${R}</p>
          </div>
        </div>
    </li>
    `}).join("")}const g=document.querySelector(".gallery"),u=document.querySelector("#search-form"),h=document.querySelector("#load-more-btn"),L=document.querySelector("#loader");let d,v,l;const M=15;let n;const b=new $(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});u.addEventListener("submit",async o=>{if(o.preventDefault(),g.innerHTML="",l=1,d=o.target.elements.query.value,d.trim()==""){c.warning({message:"The search field is empty. Please try again!",position:"topRight"}),u.reset();return}else{try{if(w(),n=await f(d,l),v=Math.ceil(n.totalHits/M),!n.hits.length)m(),c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),p();else{m();const r=y(n);g.insertAdjacentHTML("beforeend",r),b.refresh(),p()}}catch{m(),c.error({message:"Error render gallery. Please try again!",position:"topRight"})}u.reset()}});h.addEventListener("click",E);async function E(){l+=1,w();try{n=await f(d,l);const o=y(n);g.insertAdjacentHTML("beforeend",o),b.refresh()}catch{c.error({position:"topRight",message:"Error next render gallery"})}m(),x(),p()}function x(){const r=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function p(){l>=v?(h.classList.add("is-hidden"),c.info({message:"We're sorry, there are no more images to load",position:"topRight"})):h.classList.remove("is-hidden")}function m(){L.classList.add("is-hidden")}function w(){L.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
