const accordionRPA = document.getElementById('accordionRPA');
const appendLoc = "beforeend";
const templateLi = "<li>{0}</li>";

function setIntro() {
   if (WURFL.is_mobile && WURFL.form_factor === "Smartphone")
      append(accordionRPA, importanceCard.format("false", ""));
   else 
      append(accordionRPA, importanceCard.format("true", " show"));   
}

function append(elem, html) {
   elem.insertAdjacentHTML(appendLoc, html);
}

function getData() {
   let currentCache = getLocalStorageValue("currentCache");

   let currentDiff = 7;
   
   if (currentCache !== null) {
      const diffTime = Math.abs(new Date() - new Date(currentCache));
      currentDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
   }

   if (currentDiff === 7) {
      fetch(`https://rpa-best-practices.firebaseio.com/practices.json`)
      .then(function(response) {
         return response.json();
      })
      .then(function(data) {
         setLocalStorage("practices", JSON.stringify(data));
         var currentDate = new Date();
         setLocalStorage("currentCache", `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`);
         setBestPractices(data);
      });
   } else {
      setBestPractices(JSON.parse(getLocalStorageValue("practices")));
   }
}

function setBestPractices(data) {
   for(let item in data) {
      let elem = data[item];

      let fullPractice = '';
      let notes = '';

      for (let practice in elem.practices) {
            let info = elem.practices[practice];

            if (info.title === "") {
               fullPractice += `<ul>`;
            } else {
               fullPractice += `<h4>${info.title}</h4><ul>`;
            }

            var practiceTxt = '';

            for (let itemContent in info.content) {
               practiceTxt += templateLi.format(info.content[itemContent]);;
            }

            fullPractice += `${practiceTxt}</ul>`;
      }

      if (elem.notes !== undefined) {
         if (elem.notes.length > 0) {
            notes = `<h5>Notes:</h5><ul style="list-style-type:square;">`;
         }

         for (let note in elem.notes) {
            notes += templateLi.format(elem.notes[note]);
         }

         if (notes !== "") {
            notes += '</ul>';
         }
      }

      let card = cardTemplate.format(item).format(item).format(item).format(item).format(item, elem.section, fullPractice, notes);

      append(accordionRPA, card);
   }
   
   append(accordionRPA, cardContact);

   let creditsList = "";
   for (let item in credits){
      creditsList += templateLi.format(credits[item]);
   }

   append(accordionRPA, creditsCard.format(creditsList));
   append(accordionRPA, commentsCard);

   const btnContact = document.getElementById('btnContact');

   btnContact.onclick = contactClicked;

   const btnComments = document.getElementById('btnComments');

   btnComments.onclick = commentsClicked;

   setLinkAttr();
}

function setLinkAttr() {
   var links = document.getElementsByTagName("a");
   for(var i = 0; i < links.length; i++){
      if (links[i].className !== "goog-te-menu-value") {
         links[i].rel = "noopener noreferrer";
         links[i].target = "_blank";
      }
   }
}

contactClicked = function() {
   if (document.getElementById('divContact').innerHTML === "") {
      append(document.getElementById('divContact'), iframeContact);
   }
}

commentsClicked = function() {
   if (document.getElementById('divComments').innerHTML === "") {
      append(document.getElementById('divComments'), iframeComments);
   }
}

setIntro();
getData();