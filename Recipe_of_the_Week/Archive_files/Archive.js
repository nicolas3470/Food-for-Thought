// Created by iWeb 2.0.4 local-build-20120131

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,35),url:'Archive_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Archive_files/stroke_1.png'},{rect:new IWRect(1,-1,49,2),url:'Archive_files/stroke_2.png'},{rect:new IWRect(50,-1,2,2),url:'Archive_files/stroke_3.png'},{rect:new IWRect(50,1,2,35),url:'Archive_files/stroke_4.png'},{rect:new IWRect(50,36,2,3),url:'Archive_files/stroke_5.png'},{rect:new IWRect(1,36,49,3),url:'Archive_files/stroke_6.png'},{rect:new IWRect(-1,36,2,3),url:'Archive_files/stroke_7.png'}],new IWSize(51,38)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Archive_files/ArchiveMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
