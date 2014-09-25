var appSelector = '#template_' + APP.appId;

$(appSelector + ' #buttonText').on('click', function() {
  $(appSelector + ' #overlay').css('display', 'block');
  JSNativeCom.sendEventToNative('OFFER_SAVED');
})

BL.addTemplateResetFunction(function() {
  $(appSelector + ' #overlay').css('display', 'none');
})

if (BL.isTablet) {
  $(appSelector + ' #templateDiv').addClass('tablet-version');
    
  $(appSelector + ' p, ' + appSelector + ' span').forEach(function(p) {
    fontSize = $(p).css('font-size');
    fontSize = fontSize.substring(0, fontSize.length - 2);
    fontSize = parseInt(fontSize);
    $(p).css('font-size', fontSize * 1.5);
  })
    
}