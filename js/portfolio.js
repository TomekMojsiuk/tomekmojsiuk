const portfolio = () => {
 //Projects
 const invoiceMe = $(".invoice__me").find(".icon");
 const invoiceMeCodePreview =
  "https://github.com/TomekMojsiuk/invoice-generator";
 const invoiceMeLivePreview = "https://invoice-me.netlify.com/";

 const weatherApp = $(".weather__app").find(".icon");
 const weatherAppCodePreview = "https://github.com/TomekMojsiuk/weather-app";
 const weatherLivePreview = "https://tm-weather.netlify.com/";

 const tomekMojsiuk = $(".tomekmojsiuk").find(".icon");
 const tomekMojsiukCodePreview = "https://github.com/TomekMojsiuk/tomekmojsiuk";

 const soundEnglish = $(".soundenglish").find(".icon");
 const soundEnglishCodePreview = "https://github.com/TomekMojsiuk/sound-english";
 const soundEnglishLivePreview = "https://sound-english.netlify.com/";

 const projectPreview = (projectName, codePreviewUrl, livePrevievUrl) => {
  projectName.each(function(index) {
   $(this).on("click", function() {
    if (index === 0) {
     window.open(codePreviewUrl);
    } else {
     window.open(livePrevievUrl);
    }
   });
  });
 };

 projectPreview(invoiceMe, invoiceMeCodePreview, invoiceMeLivePreview);
 projectPreview(weatherApp, weatherAppCodePreview, weatherLivePreview);
 projectPreview(tomekMojsiuk, tomekMojsiukCodePreview, tomekMojsiukCodePreview);
 projectPreview(soundEnglish, soundEnglishCodePreview, soundEnglishLivePreview);
};

export default portfolio;
