"use strict";
{
    const imgs = [].slice.call(document.querySelectorAll("#main-wrapper>a>img"));
    document.querySelector(".sub-wrapper").addEventListener("click", e => {
        if(e.target.type != "image"){return;}
        imgs.forEach(img => img.className = e.target.name == img.id ? "on" : "off");
    });
}
