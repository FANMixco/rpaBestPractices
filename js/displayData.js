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
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMgadwl-1EQ74d2XLjiK_OpBHwmGtKVrB2lHuKyBe25PcRvQ/viewform?embedded=true" width="100%" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </div>
</div>
</div>`;

const importance = `<div class="card">
<div class="card-header" id="headingImportance">
   <h4 class="mb-0">
   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseImportance" aria-expanded="true" aria-controls="collapseImportance">
   The importance of RPA Best Practices
   </button>
   </h4>
</div>
<div id="collapseImportance" class="collapse show" aria-labelledby="headingImportance" data-parent="#accordionRPA">
   <div class="card-body">
   <blockquote class="blockquote" cite="https://blog.prialto.com/the-importance-of-best-practices">
    <p class="mb-0">Sometimes it's easy to take certain everyday processes for granted, especially when not doing them as efficiently as we could have doesn't always have an apparent negative effect. But over time, neglecting the small things can end up sabotaging the big things. To quote a famous proverb,“For want of a nail... the kingdom was lost.”</p>
    <footer class="blockquote-footer">Jessie Silverman <cite title="The Importance of Best Practices">The Importance of Best Practices</cite></footer>
    </blockquote>
    <br />
    <p>The previous quote is an excellent example of my experience with Robotic Process Automation (RPA). In the beginning, I didn't know how to start or where to go. When I built my first RPAs, they didn't follow any standards. They worked quite well, but over time the adjustments became a nightmare. I followed the basic approach of believing, I can just easily emulate the human behaviors in the PCs. One of my greatest challenges happened when I led the migration of multiple RPAs to the cloud.</p>
    <p>Speaking of standards, the documentation is lacking and varies from provider to provider. Each provider follows their own standards and the information is generally restrictive for the people who joined their courses. One of the biggest challenges in RPA is that they are <a href="https://en.wikipedia.org/wiki/Low-code_development_platform" target="_blank">Low-Code Development Platforms (LCDP).</a> They do not easily follow well-known practices such as DevOps, Agile, TDD, etc.</p>
    <p>Over the years, I have found few documents about them. Most of my experience is related to making multiple mistakes and serious issues that I faced while leading, implementing and gathering requirements for new RPAs. Inside of my organization, I started to implement some standards for building new RPAs like video documentation and cloud migrations. However, I was sure that this idea should go beyond there. Therefore, I decided to create this website where I would like to invite more <b>RPA experts</b> to share their experience as well. Making a better world for effective automations.</p>
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

const credits = `<div class="card">
<div class="card-header" id="headingCredits">
   <h4 class="mb-0">
   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseCredits" aria-expanded="false" aria-controls="collapseCredits">
   Credits
   </button>
   </h4>
</div>
<div id="collapseCredits" class="collapse" aria-labelledby="headingCredits" data-parent="#accordionRPA">
   <div class="card-body">
   <p>I would like to thank everyone who has shared their knowledge, sharing their best practices and tips as well.</p>
   <ul>
    <li>Pior Pastuszek</li>
    <li>Boryz Kaszmarek</li>
    </ul>
   </div>
</div>
</div>`;

$(function(){
    $("#accordionRPA").append(importance);

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
            notes += `<li>${elem.notes[note]}</li>`;
        }

        if (notes !== "") {
            notes += '</ul>';
        }

        let card = cardTemplate.format(item).format(item).format(item).format(item).format(item, elem.section, fullPractice, notes);

        $("#accordionRPA").append(card);
    }
    
    $("#accordionRPA").append(contactIFrame);
    $("#accordionRPA").append(credits);
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