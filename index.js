import{a as u,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="50359278-45963637c7b66305440920a80",p="https://pixabay.com/api/";async function m(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(p,{params:o})).data}catch(e){throw console.error("Axios error:",e),e}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
    <li class="gallery__item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" class="img-search"/>
      </a>
      <div class="info">
        <p class="p-info-img"><b>Likes</b> ${e.likes}</p>
        <p class="p-info-img"><b>Views</b> ${e.views}</p>
        <p class="p-info-img"><b>Comments</b> ${e.comments}</p>
        <p class="p-info-img"><b>Downloads</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query.",position:"topRight"});return}h(),b(),await new Promise(e=>setTimeout(e,1e3));try{const e=await m(o);if(e.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}g(e.hits)}catch{i.error({message:"Failed to load images. Please try again later.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
