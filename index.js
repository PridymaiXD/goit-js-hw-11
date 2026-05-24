import{a as u,S as f,i as a}from"./assets/vendor-Cce4fIue.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function d(e){return u.get("https://pixabay.com/api/",{params:{key:"56000261-e01ddd2b57ba4d59eaee941aa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}let l=null;function m(e){const s=document.querySelector(".gallery"),o=e.map(i=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i.largeImageURL}">
        <img class="gallery-image" src="${i.webformatURL}" alt="${i.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${i.likes}</p>
        <p class="info-item"><b>Views</b> ${i.views}</p>
        <p class="info-item"><b>Comments</b> ${i.comments}</p>
        <p class="info-item"><b>Downloads</b> ${i.downloads}</p>
      </div>
    </li>
  `).join("");s.innerHTML=o,l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function h(){const e=document.querySelector(".loader");e&&e.classList.add("is-active")}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("is-active")}const c=document.querySelector(".form");c.addEventListener("submit",g);function g(e){e.preventDefault();const s=e.currentTarget.elements["search-text"].value.trim();if(s===""){a.warning({title:"Caution",message:"Please fill in the search field!",position:"topRight"});return}p(),h(),d(s).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits)}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong while fetching data.",position:"topRight"})}).finally(()=>{y(),c.reset()})}
//# sourceMappingURL=index.js.map
