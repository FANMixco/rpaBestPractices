const cardTemplate = `<div class="card">
<div class="card-header" id="heading{0}">
   <h4 class="mb-0">
   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse{0}" aria-expanded="false" aria-controls="collapse{0}">{1}</button>
   </h4>
</div>
<div id="collapse{0}" class="collapse" aria-labelledby="heading{0}" data-parent="#accordionRPA">
   <div class="card-body">{2}{3}</div>
</div>
</div>`;

const contactIFrame = `<div class="card">
<div class="card-header" id="headingContact">
   <h4 class="mb-0">
   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseContact" aria-expanded="false" aria-controls="collapseContact">
   YOUR ONE!
   </button>
   </h4>
</div>
<div id="collapseContact" class="collapse" aria-labelledby="headingContact" data-parent="#accordionRPA">
   <div class="card-body">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMgadwl-1EQ74d2XLjiK_OpBHwmGtKVrB2lHuKyBe25PcRvQ/viewform?embedded=true" width="100%" height="1700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </div>
</div>
</div>`;

const commentsIFrame = `<div class="card">
<div class="card-header" id="headingComments">
   <h4 class="mb-0">
   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseComments" aria-expanded="false" aria-controls="collapseComments">
   Contact us
   </button>
   </h4>
</div>
<div id="collapseComments" class="collapse" aria-labelledby="headingComments" data-parent="#accordionRPA">
   <div class="card-body">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzwbVLI1lsj64rsakoA6oUkBtKC1gtSx1qi4lDZ4yr9G4wSg/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </div>
</div>
</div>`;


$(function(){
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
                let content = info.content[itemContent];
                practiceTxt += `<li>${content}</li>`;
            }

            fullPractice += `${practiceTxt}</ul>`;
        }

        if (elem.notes.length > 0) {
            notes = `<h5>Notes:</h5><ul style="list-style-type:square;">`;
        }

        for (let note in elem.notes) {
            notes += `<li><i>${elem.notes[note]}</i></li>`;
        }

        if (notes !== "") {
            notes += '</ul>';
        }

        let card = cardTemplate.format(item).format(item).format(item).format(item).format(item, elem.section, fullPractice, notes);

        $("#accordionRPA").append(card);
    }
    
    $("#accordionRPA").append(contactIFrame);
    $("#accordionRPA").append(commentsIFrame);
    $('[data-toggle="tooltip"]').tooltip();
});

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
      a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}