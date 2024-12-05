var text;
const typeSpeed = 60;

var matSelected = 1;
var timerId,
    typeTarget = $("#typer"),
    tWrapper = $("#toast-wrapper"),
    ti = 0,
    currentStep = 0,
    contrast = 0,
    brightness = 0,
    vac = 0,
    av = 0,
    on = false,
    dropped = false,
    imgs = [],
    mode = 1,
    removeButtonclicked = false,
    inp = 0;

let isImageYDropped = false; // Flag to track if image-y has been dropped

// typing function
function type(txt, cur = 0) {
    if (cur == txt.length) {
        timerId = -1;
        return;
    }
    if (cur == 0) {
        typeTarget.html("");
        clearTimeout(timerId);
    }
    typeTarget.append(txt.charAt(cur));
    timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}

// text to speech function

let english = true;
function toggleVoice(btn) {
    english = !english;
    if (english) btn.innerHTML = "ENG";
    else btn.innerHTML = "HIN";
}

function textToSpeech(text, lang) {
    // Check if the SpeechSynthesis API is available in the browser
    if ("speechSynthesis" in window) {
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        utterance.text = text;

        // Set the language
        if (lang) {
            utterance.lang = lang;
        }

        // Start the speech synthesis
        window.speechSynthesis.speak(utterance);
    } else {
        console.error("Speech synthesis is not supported in this browser.");
    }
}
// text to speech fxn end

// switch on
function toggleSwitch(toggleElement) {
    if (toggleElement.id === "toggle id") {
        if (toggleElement.checked) {
            // Switch is ON, trigger strt()
            strt();
        } else {
            // Switch is OFF, reload the page
            location.reload();
        }
    } else if (toggleElement.id === "devacuumToggle") {
        if (toggleElement.checked) {
            // De-vacuum toggle is ON, trigger strt1()
            strt1();
        }
    }
}

function strt() {
    // Enable the de-vacuum switch
    $("#devacuumToggle").prop("disabled", false);
    showToast("Now you can de-vacuum the chamber.");
    if (english) {
        type("Now click on the de-vacuum switch to start.");
        textToSpeech("Now click on the de-vacuum switch to start.");
    } else {
        type("अब शुरू करने के लिए de-vacuum स्विच पर क्लिक करें।");
        textToSpeech("अब शुरू करने के लिए de-vacuum स्विच पर क्लिक करें।", "hi-IN");
    }
}

function strt1() {
    // Enable the load sample button
    $("#load_sample").prop("disabled", false);
    showToast("Now Click on the load sample");
    if (english) {
        type("Now click on the load sample");
        textToSpeech("Now click on the load sample");
    } else {
        type("अब लोड सैंपल पर क्लिक करें");
        textToSpeech("अब लोड सैंपल पर क्लिक करें", "hi-IN");
    }
}

// Load sample button functionality
$("#load_sample").click(function () {
    // $("#image-b").prop("aria-disabled", false);

    showToast("Now drag and drop the sample");
    if (english) {
        type("Now drag and drop the sample.");
        textToSpeech("Now drag and drop the sample.");
    } else {
        type("अब सैंपल को खींचें और छोड़ें।");
        textToSpeech("अब सैंपल को खींचें और छोड़ें।", "hi-IN");
    }
});



// toast message function
function showToast(msg, type = 0) {
    tWrapper.append(`<div id="t${ti++}" class="toast${type == 1 ? " danger" : type == 2 ? " success" : ""
        }" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type == 1 ? "#ff0000" : type == 2 ? "#31a66a" : "#007aff"
        }" /></svg>
        <strong class="mr-auto">Notification</strong>
    </div>
    <div class="toast-body">
        ${msg}
</div>
</div>`);
    $(`#t${ti - 1}`).toast({
        delay: 5500,
    });
    $(`#t${ti - 1}`).toast("show");
}
// end of toast msg function

$(function () {
    if (english) {
        type("Welcome, Get started by switching on the machine.");
        textToSpeech("Welcome, Get started by switching on the machine.");
    } else {
        type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
        textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
    }

    var vhandle = $("#vslider").find(".custom-handle");
    var avhandle = $("#avslider").find(".custom-handle");
    var mhandle = $("#mslider").find(".custom-handle");

    // vaccum slider
    var x=1;
    $("#vslider").slider({
        min: 0,
        max: 2,
        value:0,
        disabled: true,
        create: function () {
            vhandle.text("Off");
        },
        slide: function (event, ui) {
            var txt = "Off";
            if (ui.value == 0) {
                  x=0;
                    txt = "Off";
                    if (english) {
                        type("You cant vaccume off, you have to vaccume the chamber until 10^-4 Pa  ");
                        textToSpeech("You cant vaccume off, you have to vaccume the chamber until 10^-4 Pa ");
                    } else {
                        type("आप वैक्यूम बंद नहीं कर सकते, आपको चैम्बर को 10^-4 Pa तक वैक्यूम करना होगा");
                        textToSpeech("आप वैक्यूम बंद नहीं कर सकते, आपको चैम्बर को 10^-4 Pa तक वैक्यूम करना होगा", "hi-IN");
                    }
                    alert("You cant vaccume off, you have to vaccume the chamber until 10^-4 Pa ");
                    value=1;
                    }
            if(ui.value ==1) {
                    txt = "LV";
                    }
            if(ui.value==2){
                    txt = "HV";    
            }
            vhandle.text(txt);
        },
    });

    //  acc voltage slider
    $("#avslider").slider({
        
        min: 15,
        max: 17,
        value: 15,
        animate: "slow",
        orientation: "horizontal",
        disabled: true,
       
        create: function () {
            avhandle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            if (ui.value == 15) {
                avhandle.text("15");
                ac = "15";
            }
            if (ui.value == 16) {
                avhandle.text("30");
                ac = "30";
            }
            if (ui.value == 17) {
                avhandle.text("50");
                ac = "50";
            }
        },
        
    });


// Magnification slider functionality
$("#mslider").slider({
    min: 0,
    max: 3,
    disabled: true,
    
    create: function () {
        mhandle.text("0");
    },
    slide: function (event, ui) {
        var zoomLevel = 1;
        switch (ui.value) {
            case 0:
                zoomLevel = 1; // Normal size
                mag = "0";
                break;
            case 1:
                zoomLevel = 1.5; // Light zoom
                mag = "L";
                break;
            case 2:
                zoomLevel = 2; // Higher zoom
                mag = "H";
                break;
            case 3:
                zoomLevel = 3; // Very high zoom
                mag = "VH";
                break;
        }
        mhandle.text(mag);
        showToast(`Magnification set to ${mag}`);
        
        // Apply zoom to the currently visible image
        $(".zoomable:visible").css("transform", `scale(${zoomLevel})`);
    },
});


// $("#setmag").click(function () {
//     // showToast("Magnification set. Disabling other controls...");
//            if (english) {
//             type("Set machine on other Different Inputs get the Elemental mapping of other");
//             textToSpeech("Set machine on other Different Inputs get the Elemental mapping of other");
//         } else {
//             type("अन्य विभिन्न इनपुट पर मशीन सेट करें अन्य की एलिमेंटल मैपिंग प्राप्त करें");
//             textToSpeech("अन्य विभिन्न इनपुट पर मशीन सेट करें अन्य की एलिमेंटल मैपिंग प्राप्त करें", "hi-IN");
//         }

//         showToast("Set machine on other Different Inputs get the Elemental mapping of other");

//     // Disable 'aslider'
//     // $("#avslider").slider("option", "disabled", false);
//     // $("#setav").prop("disabled", false);
    
//     // Disable 'avslider'
//     $("#vslider").slider("option", "disabled", false);
//     $("#setvac").prop("disabled", false);
    

//     // // Disable 'on' button (beam on)
//     // $("#on").prop("disabled", false);

//     showToast("aslider, avslider, and Beam ON button are now disabled.");
// });

$("#mslider").slider("option", "disabled", true);
    // beam on
    $("#on").one("click", function () {
        $("#on").css("backgroundColor", "#21e76e");
        $("#setav").prop("disabled", true);
        $("#vslider").slider("option", "disabled", true);
        $("#avslider").slider("option", "disabled", true);
        $("#mslider").slider("option", "disabled", false);
        // beam comes here
        clearInterval(beamTimer);
        clearInterval(beamTimer2);
        beamy = 0;
        ctx.clearRect(0, 0, beamCanvas.width, beamCanvas.height);
        ctx2.clearRect(0, 0, beam2W, beam2H);
        beamTimer = beamTimer2 = -1;
        beamTimer = setInterval(drawBeam, 10);
        // beam ends
    });

    // vaccum
    // $("#setvac").click(function () {
    //     if (english) {
    //         type("Now set accelerating voltage.");
    //         textToSpeech("Now set the accelerating voltage.");
    //     } else {
    //         type("अब त्वरित वोल्टेज सेट करें|");
    //         textToSpeech("अब त्वरित वोल्टेज सेट करें", "hi-IN");
    //     }

    //     $("#setav").prop("disabled", false);
    //     $("#avslider").slider("option", "disabled", false);

    //     showToast("Set the accelerating voltage");
    //     $("#vacImg").animate(
    //         {
    //             fontSize: 220,
    //         },
    //         {
    //             step: function (now, fx) {
    //                 $(this).css("clip", `rect(${Math.round(now)}px, 17rem, 300px, 0)`);
    //             },
    //             duration: 2500,
    //             easing: "linear",
    //         }
    //     );
    // });

    // // acc voltage
    // $("#setav").click(function () {
    //     av = $("#avslider").slider("option", "value");
    //     showToast("Switch on the beam");
    //     if (english) {
    //         type("Now switch on the beam.");
    //         textToSpeech("Try to switch on the beam now.");
    //     } else {
    //         type("बीम को चालू करने का प्रयास करें|");
    //         textToSpeech("बीम को चालू करने का प्रयास करें", "hi-IN");
    //     }

    //     $("#on").prop("disabled", false);
    //     $("#setvac").prop("disabled", true);
    //     $("#vslider").slider("option", "disabled", true);

    //     showToast("Switch on the beam");
    // });





  
    
    // Accelerating voltage (AV) slider functionality
    $("#setav").click(function () {
        $("#setvac").prop("disabled", true);
        $("#vslider").slider("option", "disabled", true);
        av = $("#avslider").slider("option", "value");
        showToast("Switch on the beam");
    
        if (english) {
            type("Now switch on the beam.");
            textToSpeech("Try to switch on the beam now.");
        } else {
            type("बीम को चालू करने का प्रयास करें|");
            textToSpeech("बीम को चालू करने का प्रयास करें", "hi-IN");
        }
    
        $("#on").prop("disabled", false);
        $("#setvac").prop("disabled", true);
        $("#vslider").slider("option", "disabled", true);
        
        // Call image update
        // updateImage(av, vac);
    });
    
    // Vacuum level slider functionality
    $("#setvac").click(function () {
        vac = $("#vslider").slider("option", "value");
    
        if (english) {
            type("Now set accelerating voltage.");
            textToSpeech("Now set the accelerating voltage.");
        } else {
            type("अब त्वरित वोल्टेज सेट करें|");
            textToSpeech("अब त्वरित वोल्टेज सेट करें", "hi-IN");
        }
        if(vac==0){
            $("#setav").prop("disabled", true);
            $("#avslider").slider("option", "disabled", true);
            if (english) {
                type("You cant vaccume off, you have to vaccume the chamber until 10^-4 Pa  ");
                textToSpeech("You cant vaccume off, you have to vaccume the chamber until 10^-4 Pa ");
            } else {
                type("आप वैक्यूम बंद नहीं कर सकते, आपको चैम्बर को 10^-4 Pa तक वैक्यूम करना होगा");
                textToSpeech("आप वैक्यूम बंद नहीं कर सकते, आपको चैम्बर को 10^-4 Pa तक वैक्यूम करना होगा", "hi-IN");
            }

        }
       else{ $("#setav").prop("disabled", false);
        $("#avslider").slider("option", "disabled", false);
    
        showToast("Set the accelerating voltage");
       }
        // Call image update
        // updateImage(av, vac);
    });
    

    
    // magnification
    $("#mslidr").click(function () {
        showToast("Magnification set");
        type("Now you can see the output image.");

        mode = $(".imgMode option:selected").text();
        // inp = $("#position :selected").val();

        url = "../images/outputs/" + mag + ".jpg";

        $("#outImage2").attr("src", url);
        $("#outImage2").attr("alt", url);

        $("#outImage1").attr("src", url);
        $("#outImage1").attr("alt", url);

        $("#outImage3").attr("src", url);
        $("#outImage3").attr("alt", url);
    });
});

// imaging mode selection
function change() {
    showToast("Set Magnificaton");
    $("#mslider").prop("disabled", false);
    $("#mslider").slider("option", "disabled", false);
}
// imaging mode selection code end

// beam code start
var beamCanvas = document.getElementById("beam");
var ctx = beamCanvas.getContext("2d");
var beamy = 0,
    beamx = parseInt(beamCanvas.width / 2),
    beamWidth,
    beamTimer = -1;
var beamCanvas2 = document.getElementById("beam2");
var ctx2 = beamCanvas2.getContext("2d");
var beam2H = beamCanvas2.height,
    beam2W = beamCanvas2.width,
    beamx2 = parseInt(beamCanvas2.width / 2),
    beamTimer2 = -1;

function randEx(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBeam() {
    ctx.beginPath();

    beamWidth = Math.sin((beamy * 3.14) / 160) * 7;
    ctx.shadowBlur = 1;
    ctx.shadowColor = "red";
    ctx.strokeStyle = "green";
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = beamWidth;
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    ctx.shadowOffsetX = -beamWidth / 2;
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    ctx.shadowOffsetX = beamWidth / 2;
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    ctx.shadowOffsetX = -beamWidth;
    ctx.moveTo(beamx, beamy);
    beamy += 1;
    ctx.lineTo(beamx, beamy);
    ctx.stroke();
    if (beamy >= beamCanvas.height) {
        clearInterval(beamTimer);
        beamTimer = -1;
        beamTimer2 = setInterval(drawBeam2, 100);

        if (english) {
            type(
                "The output image is displaying on the right side, you can also change the magnification."
            );
            textToSpeech(
                "The output image is displaying on the right side, you can also change the magnification."
            );
        } else {
            type(
                "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, आप आवर्धन भी बदल सकते हैं|"
            );
            textToSpeech(
                "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, आप आवर्धन भी बदल सकते हैं|",
                "hi-IN"
            );
        }


        setTimeout(() => {
        showToast("Beam completed. You can now zoom and change the output image based on sliders.");
        $("#position").prop("disabled", false);
        $("#outImage4").hide();
        $("#outbeam").show(500);
         
           // Call image update
                // updateImage(av, vac);
     
        
      if (item == "ceramic") {
        let imgId = "";
            
        // Determine the image ID based on the av and vac values
        if (av === 15 && vac === 1) {
            imgId = "#outImage1";
        } else if (av === 15 && vac === 2) {
            imgId = "#outImage2";
        } else if (av === 16 && vac === 1) {
            imgId = "#outImage3";
        } else if (av === 17 && vac === 1) {
            imgId = "#outImage6 ";
        } else if (av === 17 && vac === 2) {
            imgId = "#outImage5";
        }
            // $("#outImage1").hide();
            // $("#outImage2").hide();
            // $("#outImage3").show(20000);
            $(imgId).show(20000);
            // function updateImage(av, vac) {
            //     // Hide all images first
            //     $("#outImage1, #outImage2, #outImage3, #outImage4, #outImage5").hide();
            
            //     // Determine which image to show
             
            
            //     // Show the selected image
            //     if (imgId) {
            //         $(imgId).show();
            //     }
            // }

            showToast("Image 3 Generated successfully", 2);

        }
    }, 2000);
    }
}

function drawBeam2() {
    ctx2.beginPath();
    ctx2.clearRect(0, 0, beam2W, beam2H);
    ctx2.strokeStyle = "#FFFFFFBB";
    ctx2.moveTo(beamx2, 23);
    ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
    ctx2.moveTo(beamx2 - 6, 23);
    ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
    ctx2.stroke();
}
// beam code end


        // Update the output image based on the AV and VAC slider values
        function updateOutputImage() {
            const avValue = avSlider.value;
            const vacValue = vacSlider.value;

            if (avValue < 50 && vacValue < 50) {
                outputImage.src = "https://via.placeholder.com/500?text=Low+AV+Low+VAC";
            } else if (avValue >= 50 && vacValue < 50) {
                outputImage.src = "https://via.placeholder.com/500?text=High+AV+Low+VAC";
            } else if (avValue < 50 && vacValue >= 50) {
                outputImage.src = "https://via.placeholder.com/500?text=Low+AV+High+VAC";
            } else {
                outputImage.src = "https://via.placeholder.com/500?text=High+AV+High+VAC";
            }
        }
// sample and holder move

const imageX = document.getElementById("image-x");
const imageB = document.getElementById("image-b");

const removeButton = document.getElementById("toggle id");

removeButton.addEventListener("click", () => {
    imageX.style.transform = "translateX(0%)"; // Move image X from right to left
});

imageB.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "dragging-b"); // Allow image B to be draggable
});

imageX.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop by preventing default behavior
});

imageX.addEventListener("drop", (e) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData("text/plain");

    if (draggedItem === "dragging-b") {
        imageB.style.visibility = "hidden"; // Hide image B when it's dropped
        imageX.src = "../images/parts/specimen.png"; // Replace image X with the sample holder image
        item = "ceramic";
        // Enable vacuum setting controls
        showToast("Now Set the Vaccume until 10^-4 Pa");
        $("#vslider").slider("option", "disabled", false);
        $("#setvac").prop("disabled", false);

        // Provide user feedback
        if (english) {
            type("Now set the vacuum.");
            textToSpeech("Now set the vacuum.");
        } else {
            type("अब वैक्यूम सेट करें|");
            textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
        }
    } else {
        // Optionally show a message if the wrong item is dropped
        showToast("Please follow the instructions", 1);
    }
});





// const imageX = document.getElementById("image-x");
// const imageY = document.getElementById("image-y");
// // const imageA = document.getElementById("image-a");
// const imageB = document.getElementById("image-b");

// const removeButton = document.getElementById("toggle id");
// // const insertButton = document.getElementById("insertButton");

// removeButton.addEventListener("click", () => {
//     imageX.style.transform = "translateX(0%)"; // Move image X from right to left
// });

// // imageY.addEventListener("dragstart", (e) => {
// //     e.dataTransfer.setData("text/plain", "dragging-y"); // Allow image Y to be draggable
// // });

// // imageA.addEventListener("dragstart", (e) => {
// //     e.dataTransfer.setData("text/plain", "dragging-a"); // Allow image A to be draggable
// // });

// imageB.addEventListener("dragstart", (e) => {
//     e.dataTransfer.setData("text/plain", "dragging-b"); // Allow image B to be draggable
// });

// imageB.addEventListener("dragover", (e) => {
//     e.preventDefault();
// });

// imageX.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const draggedItem = e.dataTransfer.getData("text/plain");

//     if (draggedItem === "dragging-b" && isImageYDropped === false) {
//         imageY.style.visibility = "hidden";
//         isImageYDropped = true; // Set the flag when image-_ is dropped
//         item = "zebrafish";
//         imageX.src = "../images/parts/specimen.png"; // Replace image X with image Z when any image is dropped onto it
//         if (english) {
//             type("Now set the vacuum.");
//             textToSpeech("Now set the vacuum.");
//         } else {
//             type("अब वैक्यूम सेट करें|");
//             textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
//         }
//         // $("#insertButton").prop("disabled", false);
//         $("#vslider").slider("option", "disabled", false);
//         $("#setvac").prop("disabled", false);
//     } else if (draggedItem === "dragging-a" && isImageYDropped === false) {
//         imageA.style.visibility = "hidden";
//         isImageYDropped = true; // Set the flag when image-_ is dropped
//         item = "metal";
//         $("#vslider").slider("option", "disabled", false);
//         $("#setvac").prop("disabled", false);
//         imageX.src = "../images/parts/specimen.png"; // Replace image X with image Z when any image is dropped onto it
//         if (english) {
//             type("Now set the vacuum.");
//             textToSpeech("Now set the vacuum.");
//         } else {
//             type("अब वैक्यूम सेट करें|");
//             textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
//         }
//         // $("#insertButton").prop("disabled", false);
//     } else if (draggedItem === "dragging-b" && isImageYDropped === false) {
//         imageB.style.visibility = "hidden";
//         isImageYDropped = true; // Set the flag when image-_ is dropped
//         item = "ceramic";
//         $("#vslider").slider("option", "disabled", false);
//         $("#setvac").prop("disabled", false);
//         imageX.src = "../images/parts/specimen.png"; // Replace image X with image Z when any image is dropped onto it
//         if (english) {
//             type("Now set the vacuum.");
//             textToSpeech("Now set the vacuum.");
//         } else {
//             type("अब वैक्यूम सेट करें|");
//             textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
//         }
//         // $("#insertButton").prop("disabled", false);
//     }
//     // else{
//     //     showToast("Please follow the instructions",1);
//     // }
// });

// insertButton.addEventListener("click", () => {
//     imageX.style.transform = "translateX(0%)"; // Move image X back to its original position
// });

// sample and holder move end

//new beam start(back scattered)

function createBeam(canvasId, startPoint, endPoint, rotationAngle) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let isDrawing = false; // Track if the animation is in progress

    function drawLineAnimation() {
        let length = 0;
        const totalLength = Math.abs(endPoint.y - startPoint.y); // Calculate absolute length
        const speed = 2;

        function animate() {
            length += speed;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(startPoint.x, startPoint.y);
            ctx.rotate(rotationAngle);

            ctx.beginPath();
            ctx.moveTo(0, 0);

            const currentY = length;

            ctx.lineTo(0, currentY);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.restore();

            if (length < totalLength) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                isDrawing = false; // Mark the animation as complete
                onCompletion(); // Call the onCompletion function
            }
        }

        animate();
    }

    // Stop animation if needed
    function stopAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        isDrawing = false; // Mark the animation as complete
    }

    function onCompletion() {
        // Implement what should happen when this beam completes
        updateOutputImage();
        zoomSlider.style.display = "block";

        // showToast("Beam completed. You can now zoom and change the output image based on sliders.");
    }

    return { drawLineAnimation, stopAnimation, onCompletion };
}
// Update the output image based on the AV and VAC slider values
function updateOutputImage() {
    const avValue = avSlider.value;
    const vacValue = vacSlider.value;

    if (avValue < 50 && vacValue < 50) {
        outputImage.src = "https://via.placeholder.com/500?text=Low+AV+Low+VAC";
    } else if (avValue >= 50 && vacValue < 50) {
        outputImage.src = "https://via.placeholder.com/500?text=High+AV+Low+VAC";
    } else if (avValue < 50 && vacValue >= 50) {
        outputImage.src = "https://via.placeholder.com/500?text=Low+AV+High+VAC";
    } else {
        outputImage.src = "https://via.placeholder.com/500?text=High+AV+High+VAC";
    }
}


// Create beams with different angles and lengths
const beam1 = createBeam(
    "canvas1",
    { x: 200, y: 200 },
    { x: 200, y: -1 },
    Math.PI / 0.36
); // 45 degrees
const beam2 = createBeam(
    "canvas2",
    { x: 250, y: 200 },
    { x: 250, y: -1 },
    Math.PI / 0.37
); // 30 degrees
const beam3 = createBeam(
    "canvas3",
    { x: 200, y: 270 },
    { x: 200, y: -10 },
    Math.PI / 120
); // Increased length for Beam 3
const beam4 = createBeam(
    "canvas4",
    { x: 250, y: 250 },
    { x: 200, y: -10 },
    Math.PI / 15
); // Increased length for Beam 4

// Start all beams when the button is clicked
// const startAllButton = document.getElementById("startAllButton");
// startAllButton.addEventListener("click", () => {
//     beam1.drawLineAnimation();
//     beam2.drawLineAnimation();

//     // When beam1 and beam2 complete, start beam3 and beam4
//     setTimeout(() => {
//         beam3.drawLineAnimation();
//     }, 1000);

//     setTimeout(() => {
//         beam4.drawLineAnimation();
//     }, 1000);
// });

// new beam end
// const startAllButton = document.getElementById("startAllButton");
const autoStartButton = document.getElementById("on"); // Add an ID to your other button
autoStartButton.addEventListener("click", () => {
    setTimeout(() => {
        
        beam1.drawLineAnimation();
        beam2.drawLineAnimation();
    
        // When beam1 and beam2 complete, start beam3 and beam4
        setTimeout(() => {
            beam3.drawLineAnimation();
        }, 1000);
    
        setTimeout(() => {
            beam4.drawLineAnimation();
        }, 1000);


    }, 5500);
    // Call the function to start the animations
});