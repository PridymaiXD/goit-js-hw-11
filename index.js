import{S as c,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function u(t){const i="56000261-e01ddd2b57ba4d59eaee941aa",s="https://pixabay.com/api/",r=new URLSearchParams({key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${r}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})}function f(t){const i=document.querySelector(".gallery"),s=t.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${r.likes}</p>
        <p class="info-item"><b>Views</b> ${r.views}</p>
        <p class="info-item"><b>Comments</b> ${r.comments}</p>
        <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");i.innerHTML=s}function d(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function m(){const t=document.querySelector(".loader");t&&t.classList.add("is-active")}function h(){const t=document.querySelector(".loader");t&&t.classList.remove("is-active")}const l=document.querySelector(".form");let p=new c(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",y);function y(t){t.preventDefault();const i=t.currentTarget.elements["search-text"].value.trim();if(i===""){a.warning({title:"Caution",message:"Please fill in the search field!",position:"topRight"});return}d(),m(),u(i).then(s=>{if(s.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits),p.refresh()}).catch(s=>{console.error(s),a.error({title:"Error",message:"Something went wrong while fetching data.",position:"topRight"})}).finally(()=>{h(),l.reset()})}
//# sourceMappingURL=index.js.map
