// Created by iWeb 2.0.4 local-build-20120131

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,35),url:'Video_Blog_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'Video_Blog_files/stroke_9.png'},{rect:new IWRect(1,-1,49,2),url:'Video_Blog_files/stroke_10.png'},{rect:new IWRect(50,-1,2,2),url:'Video_Blog_files/stroke_11.png'},{rect:new IWRect(50,1,2,35),url:'Video_Blog_files/stroke_12.png'},{rect:new IWRect(50,36,2,3),url:'Video_Blog_files/stroke_13.png'},{rect:new IWRect(1,36,49,3),url:'Video_Blog_files/stroke_14.png'},{rect:new IWRect(-1,36,2,3),url:'Video_Blog_files/stroke_15.png'}],new IWSize(51,38)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.rso.cornell.edu/foodforthought/Site/Video_Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Video_Blog_files/Video_BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
