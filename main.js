var url=window.location.href;const language=window.navigator.userLanguage||window.navigator.language;let link_text=language==="it"?"👋 Hey, CLICCA QUI Con il TASTO DESTRO e poi Salva link come...":"👋 Hey, RIGHT-CLICK here, then click Save link as...";console.log("👋 Hey ZED - Zoom Easy Downloader is enabled, if you like our extension please rate us on https://chrome.google.com/webstore/detail/zed-zoom-easy-downloader/pdadlkbckhinonakkfkdaadceojbekep");function main(){if(url.includes("/rec/")){let counter=6;function create_link(){let div=document.createElement("div");div.innerHTML=`<div id="zoom-downloader-container" style="position:fixed;z-index:99999999999999999999;right:0px;bottom:0px;width:100%;padding:5px 20px 5px 20px;border:1px solid #2D8CFF;font-size:20px;background-color:#2D8CFF;font-weight:bold;text-align:center;"><span id="zoom-downloader-close" style="font-size:12px;cursor:pointer;position:absolute;top:0px;right:0px;color:white;">❌</span><a style="color:white !important" id="zoom-downloader" download="proposed_file_name".mp4></a></div>`;document.body.appendChild(div)}function get_uri(){let my_link=document.getElementById("zoom-downloader");if(document.getElementsByTagName("video")[0]){let zoom_link=document.getElementsByTagName("video")[0].src;zoom_link=new URL(zoom_link);my_link.href=zoom_link;my_link.innerHTML=link_text}let url=document.getElementById("zoom-downloader").href}function count(){if(counter>0){let loading_text=language==="it"?"⏳ Download disponibile in "+counter+" secondi":"⏳ Download available in "+counter+" seconds";document.getElementById("zoom-downloader").innerText=loading_text;counter--;setTimeout(function(){count()},1e3)}else{get_uri();document.addEventListener("contextmenu",bringBackDefault,true);function bringBackDefault(event){event.returnValue=true;event.stopPropagation&&event.stopPropagation()}}}create_link();document.getElementById("zoom-downloader-close").addEventListener("click",function(event){document.getElementById("zoom-downloader-container").style.display="none"},false);count()}}main();var url=window.location.href;var addWeb=document.createElement("div");addWeb.innerHTML="hey there";function addWebinar(){if(document.evaluate('//*[text()="You left the meeting"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0)){var webDoc=document.getElementById("webdoc");if(!webDoc){var webRef=document;var webRef=document.createElement("img");webRef.src=chrome.runtime.getURL("images/howto.jpg");webRef.id="webdoc";webRef.style.width="73%";webRef.style.marginTop="10px";var webHolder=document.createElement("span");var webLink=document.createElement("a");webLink.href="https://zoomcorder.com/left";webLink.target="_blank";var webText=document.createElement("div");webText.innerHTML=`
Record your next webinar or meeting (without attending!)
<br style="line-height: 15px" />
<ul style="margin-top: 5px; margin-bottom: 5px">
<li>Get a recording sent to you immediately afterwards</li>
<li>No need to be at PC or phone to record</li>
<li>Download to watch anytime</li>
<li>Works with Zoom and Google Meet</li>
</ul>

<a style="margin-bottom: 10px" href="https://zoomcorder.com/pricing">Sign Up Now</a>
<br>
<br>
<a href="https://zoomcorder.com"><em class="centered-text">See How Recording Works</em></a>
`;webText.style.fontSize="26px";webText.style.textAlign="left";webLink.append(webRef);webHolder.append(webText);webHolder.append(webLink);document.evaluate('//*[text()="You left the meeting"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0).parentElement.append(webHolder)}}}var url=window.location.href;var addWeb=document.createElement("div");addWeb.innerHTML="hey there";function extractContent(s){var span=document.createElement("span");span.innerHTML=s;return span.textContent||span.innerText}var meetingInfo={};if(document.getElementsByClassName("controls")[0]){if(document.getElementsByClassName("controls")[0].innerHTML.includes("<span")){var offset=1}else{var offset=0}}if(url.includes("towebinar")&&url.includes("registrationConfirmation")){setTimeout(()=>{toweb(document.getElementById("registrationConfirmation"));likeCopy(document.getElementById("header"))},2500)}console.log("urlisa",url);if(url.includes("towebinar")&&(url.includes("/#register/")||url.includes("/#rt/"))){console.log("toweb");setTimeout(()=>{toweb(document.getElementsByClassName("sectionFooter")[0])},2500)}function likeCopy(zf){var urlEnding="meeting="+encodeURIComponent(url);var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;var recdia=document.createElement("h11");recdia.id="recdial";recdia.innerHTML="Would you like a copy?";var recdialink=document.createElement("a");recdialink.href=urlLink;recdia.target="_blank";if(document.getElementById("recdial")==null){recdialink.target="_blank";recdialink.append(recdia)}var shead=document.createElement("div");shead.id="headertext";shead.className="headerText";var upicon=document.createElement("img");upicon.src=chrome.runtime.getURL("images/recimage.png");upicon.id="upicon";if(zf){console.log("goto",zf);if(zf){if(document.getElementById("headertext")==null){upicon.style.verticalAlign="middle";upicon.style.marginRight="8px";shead.style.textAlign="center";shead.prepend(recdialink);shead.prepend(upicon);zf.appendChild(shead)}}}}function toweb(zf){console.log("gotow",zf);var urlEnding="meeting="+encodeURIComponent(url);var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;var recdia=document.createElement("h11");recdia.id="recdia";recdia.innerHTML="Record it";var recdialink=document.createElement("a");recdialink.href=urlLink;recdia.target="_blank";if(document.getElementById("recdia")==null){recdialink.target="_blank";recdialink.append(recdia)}var rectext=document.createElement("h11");rectext.id="rectext";rectext.innerHTML="get a copy sent to you afterwards using";var withoutAttending=document.createElement("h11");withoutAttending.id="withoutattending";withoutAttending.innerHTML=" without attending";var reczoom=document.createElement("h11");reczoom.id="reczoom";reczoom.innerHTML="Zoomcorder";var reczoomlink=document.createElement("a");if(document.getElementById("reczoom")==null){reczoomlink.append(reczoom);reczoomlink.href=urlLink;reczoomlink.target="_blank"}var shead=document.createElement("span");shead.id="shead";var upicon=document.createElement("img");upicon.src=chrome.runtime.getURL("images/recimage.png");upicon.id="upicon";if(zf){if(zf){if(document.getElementById("reczoom")==null){withoutAttending.style.display="inline-block";withoutAttending.style.marginLeft="5px";upicon.style.verticalAlign="middle";shead.prepend(withoutAttending);shead.prepend(rectext);shead.prepend(reczoomlink);shead.prepend(recdialink);shead.prepend(upicon);var linebreaku=document.createElement("br");shead.prepend(linebreaku);zf.appendChild(shead)}}}}if(url.includes("tomeet")){var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;var recdia=document.createElement("h3");recdia.id="recdia";recdia.innerHTML="Record it";var recdialink=document.createElement("a");recdialink.href=urlLink;recdia.target="_blank";if(document.getElementById("recdia")==null){recdialink.target="_blank";recdialink.append(recdia)}var rectext=document.createElement("h3");rectext.id="rectext";rectext.innerHTML="get a copy sent to you afterwards using";var withoutAttending=document.createElement("h3");withoutAttending.id="withoutattending";withoutAttending.innerHTML=" without attending";var reczoom=document.createElement("h3");reczoom.id="reczoom";reczoom.innerHTML="Zoomcorder";var reczoomlink=document.createElement("a");if(document.getElementById("reczoom")==null){reczoomlink.append(reczoom);reczoomlink.href=urlLink;reczoomlink.target="_blank"}var shead=document.createElement("span");shead.id="shead";var upicon=document.createElement("img");upicon.src=chrome.runtime.getURL("images/recimage.png");upicon.id="upicon";if(document.getElementById("g2mm-modules")){var zf=document.getElementById("g2mm-modules");if(zf){if(document.getElementById("reczoom")==null){if(document.getElementById("shead")==null){withoutAttending.style.display="inline-block";withoutAttending.style.marginLeft="5px";upicon.style.verticalAlign="middle";shead.style.fontSize="11px";shead.prepend(withoutAttending);shead.prepend(reczoomlink);shead.prepend(rectext);shead.prepend(recdialink);shead.prepend(upicon);var linebreaku=document.createElement("br");shead.prepend(linebreaku);zf.appendChild(shead)}}}}}var theText=document.body.innerText;if(url.includes("zoom")&&url.includes("reg")){console.log("zoomj");var array=[];var elements=document.body.getElementsByTagName("*");for(var i=0;i<elements.length;i++){var current=elements[i];if(current.children.length===0&&current.textContent.replace(/ |\n/g,"")!==""){array.push(current.textContent)}}var mData=document.body.querySelectorAll("div.form-group.horizontal > div.controls");var meetTime="";var meetDescription="";var meetTopic="";var controlLabels=document.getElementsByClassName("control-label");var desc=0;for(var i=0;i<controlLabels.length;i++){if(controlLabels[i].innerHTML=="Description"){desc=1;break}}if(mData[0]){meetTopic=mData[0]}if(mData[1]&&desc==1){meetDescription=mData[1].innerHTML}meetTime=meetTime.innerText;if(mData[1+desc]){meetTime=mData[1+desc].innerText;meetTime=meetTime.replace(" Add to calendar","");var meetTimes=meetTime.split("\n");meetTimes=meetTimes.filter(e=>e!="");if(meetTimes.length>1){meetTimes=meetTimes.filter(e=>e!=="Time").filter(e=>e!=="");var timestamp=document.body.querySelectorAll("span.controls")[0].innerText.split("Time shows ")[1];meetTime=meetTimes[0]+" "+timestamp}else{meetTime=meetTimes[0]}}console.log("meetdesc",meetDescription);var show={topic:meetTopic.innerText,description:meetDescription,time:meetTime,url:url,timestamp:Date.now()};if(meetTimes){if(meetTimes>1){show.times=meetTimes}}if(document.body.querySelectorAll("img.img-responsive")[0]){show.graphic=document.body.querySelectorAll("img.img-responsive")[0].currentSrc;show.graphicalt=document.body.querySelectorAll("img.img-responsive")[0].alt}if(document.body.querySelectorAll("img.custom_image")[0]){show.customImage=document.body.querySelectorAll("img.custom_image")[0].currentSrc;show.customImageAlt=document.body.querySelectorAll("img.custom_image")[0].alt}var speakers=document.body.querySelectorAll("div.form-group > div.controls.col-md-6.static > div");var mySpeakers=[];var mySpeaker={};var i=0;speakers.forEach(function(speaker){if(i==0){mySpeaker.name=speaker.innerText;i=i+1}else if(i==1){mySpeaker.title=speaker.innerText;i=i+1}else if(i==2){mySpeaker.description=speaker.innerText;i=0;mySpeakers.push(mySpeaker);mySpeaker={}}});show.speakers=mySpeakers;var speakerImages=document.body.querySelectorAll("div.form-group > label > img");i=0;speakerImages.forEach(function(speakerImage){show.speakers[i].imagealt=speakerImage.alt;show.speakers[i].imagesrc=speakerImage.src;i=i+1});if(url.includes("/register")&&url.includes("/success")){show.page="success"}else{show.page="register"}var ihref=document.createElement("a");ihref.id="recordButton";ihref.innerHTML="Record this webinar and download to watch anytime.";ihref.target="_blank";var iHolder=document.createElement("div");iHolder.id="iholder";var iRecordIcon=document.createElement("img");var iconLink=document.createElement("a");iconLink.target="_blank";iRecordIcon.src=chrome.runtime.getURL("images/record.png");iRecordIcon.id="recordImage";if(document.getElementById("recordImage")==null){iconLink.appendChild(iRecordIcon)}var meetingInfo={};console.log("off",offset);console.log("pp",document.getElementsByClassName("controls")[0+offset]);meetingInfo.meeting=url;meetingInfo.meeting=meetingInfo.meeting.split("/success")[0];meetingInfo.meeting=meetingInfo.meeting.replace(/(\r\n|\n|\r)/gm,"");var urlEnding="";for(var key in meetingInfo){if(urlEnding!=""){urlEnding+="&"}urlEnding+=key+"="+encodeURIComponent(meetingInfo[key])}var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;iconLink.href=urlLink;ihref.href=urlLink;var recdia=document.createElement("h3");recdia.id="recdia";console.log("recdia");recdia.innerHTML="Record it";var recdialink=document.createElement("a");recdialink.href=urlLink;recdia.target="_blank";if(document.getElementById("recdia")==null){recdialink.target="_blank";recdialink.append(recdia)}var rectext=document.createElement("h3");rectext.id="rectext";rectext.innerHTML="get a copy sent to you afterwards using";var withoutAttending=document.createElement("h3");withoutAttending.id="withoutattending";withoutAttending.innerHTML=" without attending";var reczoom=document.createElement("h3");reczoom.id="reczoom";reczoom.innerHTML="Zoomcorder";var reczoomlink=document.createElement("a");if(document.getElementById("reczoom")==null){reczoomlink.append(reczoom);reczoomlink.href=urlLink;reczoomlink.target="_blank"}var shead=document.createElement("span");shead.id="shead";var upicon=document.createElement("img");upicon.src=chrome.runtime.getURL("images/recimage.png");upicon.id="upicon";if(document.getElementById("zoom-ui-frame")){var zf=document.getElementById("zoom-ui-frame").children[1].children[0].children[0];if(zf){if(document.getElementById("reczoom")==null){withoutAttending.style.display="inline-block";withoutAttending.style.marginLeft="5px";upicon.style.verticalAlign="sub";shead.prepend(withoutAttending);shead.prepend(reczoomlink);shead.prepend(rectext);shead.prepend(recdialink);shead.prepend(upicon);var linebreaku=document.createElement("br");shead.prepend(linebreaku);zf.appendChild(shead)}}}}if(url.includes("zoom")){if(!theText.includes("Webinar is over, you cannot register now.")&&!theText.includes("Meeting is over, you cannot register now.")&&!theText.includes("Your meeting has been launched")){var warn=document.createElement("h2");warn.id="warnText";warn.innerHTML="NEW: ";var warnmsg=document.createElement("h2");warnmsg.id="warnMsg";warnmsg.innerHTML="Don't Miss This ";var warnunder=document.createElement("h2");warnunder.id="warnunder";warnunder.innerHTML="One Time Event!";var headerSpan=document.createElement("span");headerSpan.id="headerSpan";if(document.getElementById("warnunder")==null){var linebreak=document.createElement("br");headerSpan.prepend(linebreak);headerSpan.prepend(linebreak);headerSpan.prepend(warnunder);headerSpan.prepend(warnmsg);headerSpan.prepend(warn)}var controlLabels=document.getElementsByClassName("control-label");var desc=0;if(controlLabels){for(var i=0;i<controlLabels.length;i++){if(controlLabels[i].innerHTML=="Description"){desc=1;break}}}var docRow=document.getElementsByClassName("register-form");if(!docRow[0]){docRow=document.getElementsByClassName("register-content")}var docRowFirst;if(docRow&&shead){if(document.getElementById("reczoom")==null){docRowFirst=docRow[0];shead.prepend(reczoomlink);shead.prepend(recdialink);shead.prepend(upicon);docRowFirst.prepend(shead);docRowFirst.prepend(headerSpan)}}var ibutton=document.createElement("button");ibutton.id="recordingButton";ibutton.innerHTML="Record this webinar and download to watch anytime.";ibutton.href=urlLink;var myForm=document.createElement("form");var myInput=document.createElement("input");myForm.action=urlBase+"?"+urlEnding;myForm.id="recordForm";myInput.type="submit";myInput.id="recordingInput";myInput.target="_blank";myInput.value="Record this webinar and download to watch anytime.";var myCheckBox=document.createElement("input");myCheckBox.type="checkbox";myCheckBox.id="mycheckbox";var myCheckBoxText=document.createElement("span");myCheckBoxText.id="mycheckboxtext";var recordUrl=urlBase+"?"+urlEnding;myCheckBoxText.innerHTML="** If you can't attend, <a target='_blank' id='checkboxtexta'>record</a> it and have it sent to you";myCheckBox.onchange=function(){window.open(urlBase+"?"+urlEnding,"_blank")};var docRow=document.getElementsByClassName("zm-row")[0];var formGroup=document.createElement("div");var formGroup2=document.createElement("div");formGroup2.className+="form-group";formGroup2.className+=" horizontal";formGroup2.className+=" myformgroup";formGroup.className+="form-group";formGroup.className+=" horizontal";formGroup.className+=" myformgroup";if(document.getElementById("recordButton")==null){if(docRow){formGroup.appendChild(iconLink);formGroup2.appendChild(myCheckBoxText);docRow.insertBefore(formGroup,docRow.children[1]);docRow.insertBefore(formGroup2,docRow.children[3+desc])}}var myCheckLink=document.getElementById("checkboxtexta");if(myCheckLink){myCheckLink.href=urlLink}chrome.runtime.sendMessage({command:"post",data:show},response=>{});if(document.getElementById("recordButton")==null){if(formGroup){formGroup.appendChild(ihref)}}var catchLaterRef=document.createElement("div");catchLaterRef.id="catchLater";catchLaterRef.innerHTML=`Sorry, but this webinar is over. 
To avoid missing future webinars use <a target="_blank" href='https://zoomcorder.com/webinarover'>Zoomcorder</a> and get recordings of ANY webinar sent to you.`;catchLaterRef.style.fontSize="25px";catchLaterRef.style.marginLeft="53px";catchLaterRef.style.marginBottom="0px";if(document.getElementById("catchLater")==null){if(document.getElementById("webinar_register_form")){if(catchLaterRef){document.getElementById("webinar_register_container").prepend(catchLaterRef)}}}setTimeout(function(){if(url.includes("/register")&&url.includes("/success")||url.includes("/registrant")&&url.includes("/info")){if(document.getElementById("successmsg")==null){var successmsg=document.createElement("h2");successmsg.id="successmsg";successmsg.innerHTML="Congratulations - You're registered!";successmsg.style.color="green";successmsg.style.fontSize="26px";if(document.getElementById("successmsg")==null){headerSpan.prepend(successmsg)}rectext.innerHTML="Do you want a copy of the webinar sent to you (even if you don't attend)?";if(warnText){warnText.remove()}if(warnunder){warnunder.remove()}if(warnmsg){warnmsg.remove()}if(upicon){upicon.remove()}if(recdia){recdia.remove()}if(reczoom){reczoom.remove()}if(recdialink){reczoomlink.remove()}var con=document.getElementById("meeting_register_container");var yeslink=document.createElement("a");yeslink.innerText="Yes, please!";yeslink.target="_blank";var urlEnding="";for(var key in meetingInfo){if(urlEnding!=""){urlEnding+="&"}urlEnding+=key+"="+encodeURIComponent(meetingInfo[key])}var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;yeslink.href=urlLink;rectext.style.fontSize="18px";rectext.style.marginTop="5px";yeslink.style.fontSize="18px";yeslink.style.marginLeft="48px";var linebreak=document.createElement("br");var linebreaks=document.createElement("br");var yesZoom=document.createElement("a");yesZoom.innerText="(Zoomcorder";yesZoom.target="_blank";yesZoom.href=urlLink;var urlEnding="";for(var key in meetingInfo){if(urlEnding!=""){urlEnding+="&"}urlEnding+=key+"="+encodeURIComponent(meetingInfo[key])}var urlBase="https://zoomcorder.com/record/raw";var urlLink=urlBase+"?"+urlEnding;yesZoom.style.fontSize="18px";yesZoom.style.marginLeft="5px";var willRecord=document.createElement("span");willRecord.innerText=" will record it for you.)";willRecord.style.fontSize="18px";yeslink.id="yeslink";if(document.getElementById("yeslink")==null){headerSpan.append(linebreak);headerSpan.append(rectext);headerSpan.append(yeslink);headerSpan.append(yesZoom);headerSpan.append(willRecord);headerSpan.append(linebreaks);var noText=document.createElement("div");noText.innerText="No";noText.style.fontSize="18px";noText.style.marginLeft="48px";headerSpan.append(noText);var alink=document.createElement("a");alink.innerHTML="<a style='margin-left: 10px; margin-bottom: 15px; padding-bottom: 45px; font-size: 20px' href='https://zoomcorder.com/learnmore'>Learn more about how to record.</a>";var formGroup=document.getElementsByClassName("resend");formGroup[0].prepend(alink)}}}},2e3)}}
