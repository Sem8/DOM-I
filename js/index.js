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
let newAnchorOne = document.createElement('a');
newAnchorOne.textContent = 'Blog';

let newAnchorTwo = document.createElement('a');
newAnchorTwo.textContent = 'Careers';


let navItems = document.querySelectorAll('nav a');


navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];


navItems[5].prepend(newAnchorOne);
navItems[5].append(newAnchorTwo);

newAnchorOne.style.color = 'green';
newAnchorTwo.style.color = 'green';
newAnchorOne.style.padding = '0px 30px 0px 0px';
newAnchorTwo.style.padding = '0px 25px';

navItems.forEach( element => {
  //console.log(element);
  element.style.color = "green"; 
});



/* SETTING THE CTA h1 TEXT */
let ctaSection = document.querySelector('.cta-text h1');

let ctaText = document.querySelector('.cta h1')
ctaText.innerHTML = 'DOM<br> Is<br> Awesome';
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
// service title
let serviceTitle = document.querySelector('.bottom-content h4');
serviceTitle.innerHTML = siteContent['main-content']['services-h4'];
// service content
let serviceContent = document.querySelector('.bottom-content p');
serviceContent.innerHTML = siteContent['main-content']['services-content'];

// set product title and content
let productTitle = document.querySelectorAll('.bottom-content h4');
productTitle[1].innerHTML = siteContent['main-content']['product-h4'];
let productContent = document.querySelectorAll('.bottom-content p');
productContent[1].innerHTML = siteContent['main-content']['product-content'];

// set vision title and content
let visionTitle = document.querySelectorAll('.bottom-content h4');
visionTitle[2].innerHTML = siteContent['main-content']['vision-h4'];
let visionContent = document.querySelectorAll('.bottom-content p');
visionContent[2].innerHTML = siteContent['main-content']['vision-content'];

// set contact

let contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
// contactInfo[0].insertBefore(lineBreak, contactInfo.childNodes[0]);
// contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
console.log(contactInfo);
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

// set footer

let footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright'];


let newDiv = document.createElement('div');
newDiv.className = 'Join-us';
newDiv.textContent = `Careers: Join Us! We're always hiring`
console.log(newDiv);
let contactSection = document.querySelector('.contact');
contactSection.append(newDiv);

newDiv.style.fontWeight = 'bold';
newDiv.style.fontSize = '1.4rem';



