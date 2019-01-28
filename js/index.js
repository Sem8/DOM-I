const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

/* SETTING THE NAVIGATION ITEMS */

let navItems = document.querySelectorAll('nav a');
// console.log(navItems);
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];


/* SETTING THE CTA h1 TEXT */
let ctaSection = document.querySelector('.cta-text h1');
let lineBreak = document.createElement('br');
ctaSection.insertBefore(lineBreak, ctaSection.childNodes[0]);
console.log(ctaSection);
let ctaText = document.querySelector('.cta h1')
ctaText.innerHTML = siteContent['cta']['h1'];
console.log(ctaText);


// ctaText.style.width = '180px';
// ctaText.style.fontWeight = 'bold';

/* SETTING THE CTA BUTTON CONTENT */
let ctaButton = document.querySelector('button');
console.log(ctaButton);
ctaButton.textContent = siteContent['cta']['button'];
// ctaButton.style.border = 'thick solid #0000FF';
// ctaButton.appendChild(document.createTextNode(siteContent['cta']['button']));

// let ctaButtonText = ctaButton.textContent = siteContent['cta']['button'];

// ctaButtonText.style.border = '1px solid black';



/* SETTING THE CTA IMAGE */
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

/* SETTING MAIN CONTENT */
let featureTitle = document.querySelector('.top-content h4');
featureTitle.innerHTML = siteContent['main-content']['features-h4'];
let featureContent = document.querySelector('.top-content p');
featureContent.innerHTML = siteContent['main-content']['features-content'];
let aboutTitle = document.querySelectorAll('.top-content h4');
// console.log(aboutTitle[1]);
aboutTitle[1].innerHTML = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.top-content p');
aboutContent[1].innerHTML = siteContent['main-content']['about-content'];

/* SET MIDDLE IMAGE */
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

/* SET BOTTOM CONTENT */
let serviceTitle = document.querySelector('.bottom-content h4');
serviceTitle.innerHTML = siteContent['main-content']['services-h4'];
let serviceContent = document.querySelector('.bottom-content p');
serviceContent.innerHTML = siteContent['main-content']['services-content'];

let productTitle = document.querySelectorAll('.bottom-content h4');
productTitle[1].innerHTML = siteContent['main-content']['product-h4'];
let productContent = document.querySelectorAll('.bottom-content p');
productContent[1].innerHTML = siteContent['main-content']['product-content'];


let visionTitle = document.querySelectorAll('.bottom-content h4');
visionTitle[2].innerHTML = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('.bottom-content p');
visionContent[2].innerHTML = siteContent['main-content']['vision-content'];

